var assert = require('chai').assert;
var expect = require('chai').expect;

var Node = require('../lib/node');
var SinglyLinkedList = require('../lib/singly-linked-list');

var list = new SinglyLinkedList();

//TODO: Add more test for edge cases i.e empty list

describe('SinglyLinkedList', function(){

	describe('#isEmpty()', function(){
		it('should tell whether the list is empty', function(){
			assert.strictEqual(true, list.isEmpty(), 'Current list is empty');
		});
	});

	describe('#addFirst()', function(){
		it('should add the item to list', function(){
			list.addFirst(5);
			assert.strictEqual(5, list.getFirst().getValue(), 'Value of first item is 5');
			assert.strictEqual(5, list.getLast().getValue(), 'Value of last item is 5');
			assert.strictEqual(1, list.getSize(), 'List has size 1');
		});
	});

	describe('#getFirst()', function(){
		it('should get the first item of the list', function(){
			list.addFirst(6);
			assert.strictEqual(6, list.getFirst().getValue(), 'Value of first item is 6');
		});
	});

	describe('#getLast()', function(){
		it('should get the last item of the list', function(){
			assert.strictEqual(5, list.getLast().getValue(), 'Value of last item is 5');
		});
	});	

	describe('#getSize()', function(){
		it('should return the size of the list', function(){
			list.addFirst(7);
			assert.strictEqual(3, list.getSize(), 'List has size 3');
			list.addFirst(8);
			assert.strictEqual(4, list.getSize(), 'List has size 4');
		});
	});	

	describe('#removeFirst()', function(){
		it('should remove first element of the list', function(){
			assert.deepEqual([8,7,6,5], list.toArray(), 'List equals to [8,7,6,5]');
			list.removeFirst();
			assert.deepEqual([7,6,5], list.toArray(), 'List equals to [7,6,5]');
		});
	});

	describe('#addLast()', function(){

		it('should successfully add item to an empty list', function(){
			var emptyList = new SinglyLinkedList();
			emptyList.addLast(1);
			assert.deepEqual([1], emptyList.toArray(), 'List equals to [1]');
			emptyList.addLast(2);
			assert.deepEqual([1,2], emptyList.toArray(), 'List equals to [1,2]');
		});

		it('should add the item to the end of the list', function(){
			assert.deepEqual([7,6,5], list.toArray(), 'List equals to [7,6,5]');
			list.addLast(4);
			assert.deepEqual([7,6,5,4], list.toArray(), 'List equals to [7,6,5,4]');
			assert.strictEqual(4, list.getLast().getValue(), 'Value of last item is 4');
		});
	});

	describe('#removeLast()', function(){
		it('should remove last element of the list', function(){
			list.removeLast();
			assert.deepEqual([7,6,5], list.toArray(), 'List equals to [7,6,5]');
			assert.strictEqual(5, list.getLast().getValue(), 'Value of last item is 5');
			list.removeLast();
			assert.deepEqual([7,6], list.toArray(), 'List equals to [7,6]');
			list.removeLast();
			assert.deepEqual([7], list.toArray(), 'List equals to [7]');
			list.removeLast();
			assert.deepEqual([], list.toArray(), 'List is empty');
			expect(function(){
				list.removeLast();
			}).to.throw(Error,/Can not remove from empty list/);
		});
	});

});















