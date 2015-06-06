var assert = require("assert");

var Stack = require('../lib/stack');

var stack = new Stack();

describe('Stack', function(){

  describe('#push()', function(){
    it('should push value on top of stack', function(){
		stack.push(1);
		stack.push(2);
		assert.deepEqual([1,2], stack.getAll(), 'Stack should be [1,2]');
		stack.push(3);
		assert.deepEqual([1,2,3], stack.getAll(), 'Stack should be [1,2,3]');
    });
  });

  describe('#pop()', function(){
  	it('should return the topmost value of the stack', function(){
  		stack.push(5);
  		stack.push(6);
  		assert.strictEqual(6, stack.pop(), 'Pop value should be 5');
  	});
  });

  afterEach(function(){
  	stack.clear();
  });

});