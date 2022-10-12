import fs from 'fs';
import servor from 'servor';
import { fileURLToPath } from 'url';
import { Parcel } from '@parcel/core';
import openBrowser from 'servor/utils/openBrowser.js';

(async () => {
    let isOpenBrowser = false;
    const { version } = JSON.parse(fs.readFileSync(`package.json`, 'utf-8'));

    const { url } = await servor({
        root: 'docs',
        fallback: 'index.html',
        reload: true,
        port: 8083,
    });

    const bundler = new Parcel({
        entries: 'src/index.js',
        defaultConfig: '@parcel/config-default',
        mode: 'development',
        targets: {
            main: {
                distDir: 'docs/uncompiled/',
                outputFormat: 'global',
                engines: {
                    browsers: ['last 1 Chrome version'],
                },
            },
        },
        env: {
            NODE_ENV: 'development',
            APP_VER: version,
        },
        additionalReporters: [
            {
                packageName: '@parcel/reporter-cli',
                resolveFrom: fileURLToPath(import.meta.url),
            },
        ],
    });

    bundler.watch(async (error, event) => {
        if (error) throw error;
        if (event.type === 'buildSuccess') {
            const bundles = event.bundleGraph.getBundles();
            console.log(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!`);
            if (!isOpenBrowser) {
                isOpenBrowser = true;
                openBrowser(url);
            }
        } else if (event.type === 'buildFailure') {
            console.log(event.diagnostics);
        }
    });
})();
