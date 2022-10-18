export = WFPlayer;
export as namespace WFPlayer;

type Option = {
    container: HTMLDivElement;
    mediaElement?: HTMLVideoElement | HTMLAudioElement;
    useWorker?: boolean;
    wave?: boolean;
    waveColor?: string;
    backgroundColor?: string;
    paddingColor?: string;
    cursor?: boolean;
    cursorColor?: string;
    progress?: boolean;
    progressColor?: string;
    grid?: boolean;
    gridColor?: string;
    ruler?: boolean;
    rulerColor?: string;
    rulerAtTop?: boolean;
    scrollable?: boolean;
    refreshDelay?: number;
    channel?: number;
    duration?: number;
    padding?: number;
    waveScale?: number;
    pixelRatio?: number;
};

type Config = {
    gridNum: number;
    gridGap: number;
    beginTime: number;
    density: number;
    sampleRate: number;
    byteLength: number;
};

type Events =
    | 'resize'
    | 'decode:start'
    | 'decode:success'
    | 'decode:error'
    | 'decode'
    | 'update'
    | 'load'
    | 'scroll'
    | 'click'
    | 'contextmenu'
    | 'grabbing'
    | (string & Record<never, never>);

declare class WFPlayer {
    constructor(option: Option);

    static readonly instances: WFPlayer[];
    static readonly version: string;
    static readonly env: string;
    static readonly default: Option;
    static readonly scheme: Record<keyof Option, string>;

    readonly id: number;
    readonly options: Option;
    readonly currentTime: number;
    readonly duration: number;
    readonly playing: boolean;
    readonly grabbing: boolean;

    readonly canvas: WFPlayer['template']['canvas'];
    readonly config: WFPlayer['drawer']['config'];
    readonly proxy: WFPlayer['events']['proxy'];

    on(name: Events, fn: Function, ctx?: object): void;
    once(name: Events, fn: Function, ctx?: object): void;
    emit(name: Events): void;
    off(name: Events, callback?: Function): void;

    setOptions(options: Partial<Option>): WFPlayer;
    load(target: string | Uint8Array | AudioBuffer | HTMLVideoElement | HTMLAudioElement): WFPlayer;
    getCurrentTimeFromEvent(event: Event): number;
    seek(second: number): WFPlayer;
    changeChannel(channel: 0 | 1 | 2): WFPlayer;
    exportImage(): WFPlayer;
    update(): WFPlayer;
    destroy(): WFPlayer;

    readonly events: {
        proxy<KW extends keyof WindowEventMap, KH extends keyof HTMLElementEventMap>(
            element: HTMLDivElement | Document | Window,
            eventName: KW | KH,
            handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
            options?: boolean | AddEventListenerOptions,
        ): () => void;
    };

    readonly template: {
        canvas: HTMLCanvasElement;
        cursor: HTMLDivElement;
    };

    readonly decoder: {
        audioCtx: AudioContext;
        audiobuffer: AudioBuffer;
        channelData: Float32Array;
    };

    readonly drawer: {
        config: Required<Omit<Option, 'container' | 'mediaElement'>> & Config;
        worker: Worker;
    };

    readonly controller: {
        //
    };

    readonly loader: {
        fileSize: number;
        loadSize: number;
        data: Uint8Array;
        reader: ReadableStream;
    };
}
