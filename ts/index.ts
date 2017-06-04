import 'typings-global'
import * as smartq from 'smartq'

/**
 * delay something, works like setTimeout
 * @param timeInMillisecond
 * @param passOn
 */
export let delayFor = async <T>(timeInMillisecond: number, passOn?: T) => {
  await new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve()
      },
      timeInMillisecond
    )
  })
  return passOn
}

export class Timeout<T> {
  promise: Promise<T>
  private _deferred: smartq.Deferred<T>
  private _timeout: any
  private _cancelled: boolean = false
  constructor (timeInMillisecondArg, passOn?: T) {
    this._deferred = smartq.defer<T>()
    this.promise = this._deferred.promise
    this._timeout = setTimeout(() => {
      if (!this._cancelled) {
        this._deferred.resolve(passOn)
      }
    }, timeInMillisecondArg)
  }

  makeUnrefed () {
    this._timeout.unref()
  }

  cancel () {
    this._cancelled = true
    this.makeUnrefed()
  }
}
