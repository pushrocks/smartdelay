import 'typings-test'

import * as should from 'should'

import * as smartdelay from '../dist/index'

describe('smartdelay', function () {
    it('.delayFor should delay async', function(done) {
        this.timeout(5000)
        let timePassed = false
        setTimeout(() => {
            timePassed = true
        },2000)
        smartdelay.delayFor(3000).then(() => {
            should(timePassed).be.true()
            done()
        })
    })
    it('.delayFor should pass on a type', function(done) {
        this.timeout(5000)
        let timePassed = false
        setTimeout(() => {
            timePassed = true
        },2000)
        let hey = 'heyThere'
        smartdelay.delayFor<string>(3000, hey).then((stringArg) => {
            should(stringArg).equal('heyThere')
            done()
        })
    })
})
