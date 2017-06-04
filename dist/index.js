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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMEJBQXVCO0FBQ3ZCLGlDQUFnQztBQUVoQzs7OztHQUlHO0FBQ1EsUUFBQSxRQUFRLEdBQUcsQ0FBVSxpQkFBeUIsRUFBRSxNQUFVO0lBQ25FLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNoQyxVQUFVLENBQ1I7WUFDRSxPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUMsRUFDRCxpQkFBaUIsQ0FDbEIsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQSxDQUFBO0FBRUQ7SUFLRSxZQUFhLG9CQUFvQixFQUFFLE1BQVU7UUFEckMsZUFBVSxHQUFZLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUssQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hDLENBQUM7UUFDSCxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztDQUNGO0FBdkJELDBCQXVCQyJ9