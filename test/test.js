"use strict";
require("typings-test");
const should = require("should");
const smartdelay = require("../dist/index");
describe('smartdelay', function () {
    it('.delayFor should delay async', function (done) {
        this.timeout(5000);
        let timePassed = false;
        setTimeout(() => {
            timePassed = true;
        }, 2000);
        smartdelay.delayFor(3000).then(() => {
            should(timePassed).be.true();
            done();
        });
    });
    it('.delayFor should pass on a type', function (done) {
        this.timeout(5000);
        let timePassed = false;
        setTimeout(() => {
            timePassed = true;
        }, 2000);
        let hey = 'heyThere';
        smartdelay.delayFor(3000, hey).then((stringArg) => {
            should(stringArg).equal('heyThere');
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQixpQ0FBZ0M7QUFFaEMsNENBQTJDO0FBRTNDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsRUFBRSxDQUFDLDhCQUE4QixFQUFFLFVBQVMsSUFBSTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUN0QixVQUFVLENBQUM7WUFDUCxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNQLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDNUIsSUFBSSxFQUFFLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLFVBQVMsSUFBSTtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUN0QixVQUFVLENBQUM7WUFDUCxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNQLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQTtRQUNwQixVQUFVLENBQUMsUUFBUSxDQUFTLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTO1lBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDbkMsSUFBSSxFQUFFLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==