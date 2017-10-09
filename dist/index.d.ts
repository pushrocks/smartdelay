import 'typings-global';
/**
 * delay something, works like setTimeout
 * @param timeInMillisecond
 * @param passOn
 */
export declare let delayFor: <T>(timeInMillisecond: number, passOn?: T) => Promise<T>;
/**
 * delay for a random time
 */
export declare let delayForRandom: <T>(timeMinInMillisecond: number, timeMaxInMillisecond: number, passOn?: T) => Promise<T>;
export declare class Timeout<T> {
    promise: Promise<T>;
    private _deferred;
    private _timeout;
    private _cancelled;
    constructor(timeInMillisecondArg: any, passOn?: T);
    makeUnrefed(): void;
    cancel(): void;
}
