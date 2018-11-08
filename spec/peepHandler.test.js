const peepHandler = require('../src/peepHandler');

test('displays a new test peep', () => {
  document.body.innerHTML = "<div id='final-div'></div>"
  let pH = new peepHandler();
  pH.createPeep('this is a test', 0)
  expect(document.getElementById('peep0').innerHTML).toEqual('this is a test')
})

test('the new peep is posted after another div', () => {
  document.body.innerHTML = "<div id='final-div'></div>"
  let pH = new peepHandler();
  pH.createPeep('this is a test', 0)
  expect(document.getElementsByTagName("div")['0'].innerHTML).toEqual('this is a test')
  expect(document.getElementsByTagName("div")['1'].innerHTML).toEqual('')
})
