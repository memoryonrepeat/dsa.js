var assert = require("assert");

var Node = require('../lib/node');

describe('Node', function(){

  describe('#hasNext()', function(){
    it('should return whether the node has next value', function(){
      var node = new Node(1);
  		assert.equal(false, node.hasNext(), 'node has no next value');
  		node.next = 2;
  		assert.equal(true, node.hasNext(), 'node has next value');
    });
  });

});