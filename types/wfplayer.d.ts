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
    scrollbar?: boolean;
    scrollbarColor?: string;
    rulerAtTop?: boolean;
    scrollable?: boolean;
    refreshDelay?: number;
    channel?: number;
    duration?: number;
    padding?: number;
    waveScale?: number;
    waveSize?: number;
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

type Events = {
    resize: [];
    'decode:start': [uint8: Uint8Array];
    'decode:success': [audiobuffer: AudioBuffer];
    'decode:error': [error: Error];
    decode: [config: { channelData: Float32Array; sampleRate: number; duration: number }];
    update: [config: WFPlayer['drawer']['config']];
    load: [config: { fileSize: number; loadSize: number; data: Uint8Array }];
    scroll: [deltaY: -1 | 1, event: Event];
    click: [currentTime: number, event: Event];
    contextmenu: [currentTime: number, event: Event];
    grabbing: [currentTime: number, event: Event];
    startGrabbing: [currentTime: number, event: Event];
    stopGrabbing: [currentTime: number, event: Event];
    mousemove: [event: Event];
    mousedown: [event: Event];
    mouseup: [event: Event];
    mouseenter: [event: Event];
    mouseleave: [event: Event];
    options: [options: Required<Option>];
};

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

    on<T extends keyof Events>(name: T, fn: (...args: Events[T]) => unknown, ctx?: object): unknown;
    once<T extends keyof Events>(name: T, fn: (...args: Events[T]) => unknown, ctx?: object): unknown;
    emit<T extends keyof Events>(name: T, ...args: unknown[]): unknown;
    off<T extends keyof Events>(name: T, callback?: Function): unknown;

    setOptions(options: Partial<Option>): WFPlayer;
    load(target: string | Uint8Array | AudioBuffer | HTMLVideoElement | HTMLAudioElement): WFPlayer;
    getCurrentTimeFromEvent(event: Event): number;
    getDurationFromWidth(width: number): number;
    getWidthFromDuration(width: number): number;
    getLeftFromTime(time: number): number;
    checkVisible(start: number, end: number): boolean;
    checkCurrent(start: number, end: number): boolean;
    seek(second: number): WFPlayer;
    smoothSeek(second: number, duration: number): Promise<WFPlayer>;
    changeChannel(channel: 0 | 1 | 2): WFPlayer;
    exportImage(): WFPlayer;
    update(): WFPlayer;
    reset(): WFPlayer;
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
