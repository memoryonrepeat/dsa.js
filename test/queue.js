var assert = require("assert");

var Queue = require('../lib/queue');

var queue = new Queue();

describe('Queue', function(){

  describe('#enqueue()', function(){
    it('should push value on top of queue', function(){
		queue.enqueue(1);
		queue.enqueue(2);
		assert.deepEqual([1,2], queue.getAll(), 'Queue should be [1,2]');
		queue.enqueue(3);
		assert.deepEqual([1,2,3], queue.getAll(), 'Queue should be [1,2,3]');
    });
  });

  describe('#dequeue()', function(){
  	it('should return the foremost value of the queue then remove it', function(){
      queue.enqueue(3);
      queue.enqueue(4);
  		queue.enqueue(5);
  		queue.enqueue(6);
  		assert.strictEqual(3, queue.dequeue(), 'Dequeued value should be 3');
      assert.deepEqual([4,5,6], queue.getAll(), 'Remaining queue should be [4,5,6]');
      assert.strictEqual(4, queue.dequeue(), 'Dequeued value should be 4');
      assert.deepEqual([5,6], queue.getAll(), 'Remaining queue should be [5,6]');
  	});
  });

  describe('#peek()', function(){
    it('should only return the foremost value of the queue', function(){
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      assert.strictEqual(3, queue.peek(), 'Peeked value should be 3');
      assert.deepEqual([3,4,5,6], queue.getAll(), 'Remaining queue should be [3,4,5,6]');
    });
  });

  afterEach(function(){
  	queue.clear();
  });

});