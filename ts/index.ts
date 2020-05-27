import * as smartpromise from '@pushrocks/smartpromise';

/**
 * delay something, works like setTimeout
 * @param timeInMillisecond
 * @param passOn
 */
export let delayFor = async <T>(timeInMillisecond: number, passOn?: T) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeInMillisecond);
  });
  return passOn;
};

/**
 * delay for a random time
 */
export let delayForRandom = async <T>(
  timeMinInMillisecond: number,
  timeMaxInMillisecond: number,
  passOn?: T
) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, Math.random() * (timeMaxInMillisecond - timeMinInMillisecond) + timeMinInMillisecond);
  });
  return passOn;
};

export class Timeout<T> {
  promise: Promise<T>;
  private _deferred: smartpromise.Deferred<T>;
  private _timeout: any;
  private _cancelled: boolean = false;

  constructor(timeInMillisecondArg, passOn?: T) {
    this._deferred = smartpromise.defer<T>();
    this.promise = this._deferred.promise;
    this._timeout = setTimeout(() => {
      if (!this._cancelled) {
        this._deferred.resolve(passOn);
      }
    }, timeInMillisecondArg);
  }

  /**
   * unreffing a timeout causes the node process to not wait for completion before exit
   */
  public makeUnrefed() {
    this._timeout.unref();
  }

  /**
   * cancels the timer
   */
  public cancel() {
    this._cancelled = true;
    this.makeUnrefed();
  }
}
