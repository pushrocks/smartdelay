"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("typings-global");
exports.delayFor = (timeInMillisecond, passOn) => __awaiter(this, void 0, void 0, function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeInMillisecond);
    });
    return passOn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBdUI7QUFFWixRQUFBLFFBQVEsR0FBRyxDQUFVLGlCQUF5QixFQUFFLE1BQVU7SUFDakUsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQzlCLFVBQVUsQ0FDTjtZQUNJLE9BQU8sRUFBRSxDQUFBO1FBQ2IsQ0FBQyxFQUNELGlCQUFpQixDQUNwQixDQUFBO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsTUFBTSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSxDQUFBIn0=