const {fake_delays}= require('../async_test_functions.js') 

QUnit.module('fake_delays function tests', ()=>{
    QUnit.test('fake delay with 1000 miliseconds', async function(assert){
          const start=Date.now()
          await fake_delays(1000)
          const end =Date.now()
          const difference=end-start
          assert.ok(difference>=1000, 'Delay is at least 1000 miliseconds')
    })
})