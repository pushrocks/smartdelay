"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const smartq = require("smartq");
/**
 * delay something, works like setTimeout
 * @param timeInMillisecond
 * @param passOn
 */
exports.delayFor = (timeInMillisecond, passOn) => __awaiter(this, void 0, void 0, function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeInMillisecond);
    });
    return passOn;
});
/**
 * delay for a random time
 */
exports.delayForRandom = (timeMinInMillisecond, timeMaxInMillisecond, passOn) => __awaiter(this, void 0, void 0, function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, Math.random() * (timeMaxInMillisecond - timeMinInMillisecond) + timeMinInMillisecond);
    });
    return passOn;
});
class Timeout {
    constructor(timeInMillisecondArg, passOn) {
        this._cancelled = false;
        this._deferred = smartq.defer();
        this.promise = this._deferred.promise;
        this._timeout = setTimeout(() => {
            if (!this._cancelled) {
                this._deferred.resolve(passOn);
            }
        }, timeInMillisecondArg);
    }
    makeUnrefed() {
        this._timeout.unref();
    }
    cancel() {
        this._cancelled = true;
        this.makeUnrefed();
    }
}
exports.Timeout = Timeout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMEJBQXVCO0FBQ3ZCLGlDQUFnQztBQUVoQzs7OztHQUlHO0FBQ1EsUUFBQSxRQUFRLEdBQUcsQ0FBVSxpQkFBeUIsRUFBRSxNQUFVLEVBQUUsRUFBRTtJQUN2RSxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3BDLFVBQVUsQ0FDUixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUMsRUFDRCxpQkFBaUIsQ0FDbEIsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQSxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLGNBQWMsR0FBRyxDQUFVLG9CQUE0QixFQUFFLG9CQUE0QixFQUFFLE1BQVUsRUFBRSxFQUFFO0lBQzlHLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDcEMsVUFBVSxDQUNSLEdBQUcsRUFBRTtZQUNILE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQyxFQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDLEdBQUcsb0JBQW9CLENBQ3JGLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUE7QUFDZixDQUFDLENBQUEsQ0FBQTtBQUVEO0lBS0UsWUFBYSxvQkFBb0IsRUFBRSxNQUFVO1FBRHJDLGVBQVUsR0FBWSxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFLLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDaEMsQ0FBQztRQUNILENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBQ0Y7QUF2QkQsMEJBdUJDIn0=