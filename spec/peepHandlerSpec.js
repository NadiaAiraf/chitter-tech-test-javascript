describe("PeepHandler", function() {

  var peepHandler;

  beforeEach(function() {
    peepHandler = new PeepHandler();
  });

  describe('createPeep', function(){
    it('inserts a new div element', function() {
      body = 'This is a test'
      peepHandler.createPeep(body,0)
      setTimeout(function() {
        expect(document.getElementById('peep0')).toContainText(body)
      }, 500)
    })
  })
})
