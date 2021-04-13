# WFPlayer

[![Build Status](https://www.travis-ci.org/zhw2590582/WFPlayer.svg?branch=master)](https://www.travis-ci.org/zhw2590582/WFPlayer)
![version](https://badgen.net/npm/v/wfplayer)
![license](https://badgen.net/npm/license/wfplayer)
![size](https://badgen.net/bundlephobia/minzip/wfplayer)

> WFPlayer.js is an audio waveform generator

![Screenshot](./images/screenshot.png)

## Demo

[Checkout the demo](https://wfplayer.js.org/) from Github Pages

## Features

-   Create waveforms without loading the entire media file
-   Customize cursor, progress, grid, ruler display and color
-   Support for loading media urls and loading media dom elements (video tags and audio tags)
-   Support for real-time change options like color or width etc
-   Listen to the playback state of media elements for playback animation
-   Adaptive parent element size and audio data
-   And more...

## Install

Install with `npm`

```bash
$ npm install wfplayer
```

Or install with `yarn`

```bash
$ yarn add wfplayer
```

```js
import WFPlayer from 'wfplayer';
```

Or umd builds are also available

```html
<script src="path/to/wfplayer.js"></script>
```

Will expose the global variable to `window.WFPlayer`.

## Usage

HTML

```html
<div id="waveform" style="width: 1000px; height: 300px"></div>
<video id="video" src="path/to/video.mp4"></video>

<!-- or -->
<audio id="audio" src="path/to/audio.mp3"></audio>
```

JS

```js
var wf = new WFPlayer({
    container: document.querySelector('#waveform'),
    mediaElement: document.querySelector('#video'),
});

wf.load(document.querySelector('#video'));

// or
wf.load('path/to/audio.mp3');
```

## API

### Options

```js
var wf = new WFPlayer({
    // Mount the audio waveform of the dom
    container: '#waveform',

    // Media element like: video tag or audio tag
    mediaElement: null,

    // Whether use web worker
    useWorker: true,

    // Whether to display wave
    wave: true,

    // Waveform color
    waveColor: 'rgba(255, 255, 255, 0.1)',

    // Background color
    backgroundColor: 'rgb(28, 32, 34)',

    // Whether to display cursor
    cursor: true,

    // Cursor color
    cursorColor: '#ff0000',

    // Whether to display progress
    progress: true,

    // progress color
    progressColor: 'rgba(255, 255, 255, 0.5)',

    // Whether to display grid
    grid: true,

    // Grid color
    gridColor: 'rgba(255, 255, 255, 0.05)',

    // Whether to display ruler
    ruler: true,

    // Ruler color
    rulerColor: 'rgba(255, 255, 255, 0.5)',

    // Whether to display ruler at the top
    rulerAtTop: true,

    // Pixel ratio
    pixelRatio: window.devicePixelRatio,

    // Which audio channel to render
    channel: 0,

    // Duration of rendering
    duration: 10,

    // The ratio of spaces on both sides
    padding: 5,

    // Waveform height scale ratio
    waveScale: 0.8,
});
```

### Instance methods and properties

Load target:

```js
// The target can be the url address of media or a mediaElement
wf.load(target);
```

Change Channel:

```js
wf.changeChannel(1);
```

Jump to a certain time:

```js
wf.seek(second);
```

Export image:

```js
wf.exportImage();
```

Modify option:

```js
wf.setOptions({
    // Like change wave color
    waveColor: 'red',
});
```

Destroy instance:

```js
wf.destroy();
```

## Donations

We accept donations through these channels:

-   [Paypal](https://www.paypal.me/harveyzack)
-   [WeChat Pay](./images/wechatpay.jpg)
-   [Alipay](./images/alipay.jpg)

## QQ Group

![QQ Group](./images/qqgroup.png)

## License

MIT © [Harvey Zack](https://sleepy.im/)
