import * as smartpromise from '@pushrocks/smartpromise';

/**
 * delay something, works like setTimeout
 * @param timeInMillisecondArg
 * @param passOnArg
 */
export let delayFor = async <T>(
  timeInMillisecondArg: number,
  passOnArg?: T,
  unrefedArg = false
) => {
  const timeout = new Timeout(timeInMillisecondArg, null, unrefedArg);
  await timeout.promise;
  return passOnArg;
};

/**
 * delay for a random time
 */
export let delayForRandom = async <T>(
  timeMinInMillisecondArg: number,
  timeMaxInMillisecondArg: number,
  passOnArg?: T,
  unrefedArg = false
) => {
  await delayFor(
    Math.random() * (timeMaxInMillisecondArg - timeMinInMillisecondArg) + timeMinInMillisecondArg,
    null,
    unrefedArg
  );
  return passOnArg;
};

export class Timeout<T> {
  promise: Promise<T>;
  private _deferred: smartpromise.Deferred<T>;
  private _timeout;
  private _cancelled: boolean = false;

  private timeoutInMillis: number;
  private started: number;

  constructor(timeInMillisecondArg, passOn?: T, unrefedArg = false) {
    this.timeoutInMillis = timeInMillisecondArg;
    this._deferred = smartpromise.defer<T>();
    this.promise = this._deferred.promise;
    this._timeout = setTimeout(() => {
      if (!this._cancelled) {
        this._deferred.resolve(passOn);
      }
    }, timeInMillisecondArg);
    this.started = Date.now();
    if (unrefedArg) {
      this.makeUnrefed();
    }
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
    clearTimeout(this._timeout);
  }

  public getTimeLeft() {
    const result = this.started + this.timeoutInMillis - Date.now();
    return result > 0 ? result : 0;
  }
}
