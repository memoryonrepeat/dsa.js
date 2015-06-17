var assert = require("assert");

var Node = require('../lib/node');
var SinglyLinkedList = require('../lib/singly-linked-list');

var list = new SinglyLinkedList();

describe('SinglyLinkedList', function(){

	describe('#isEmpty()', function(){
		it('should tell whether the list is empty', function(){
			assert.equal(true, list.isEmpty(), 'Current list is empty');
		});
	});

	describe('#addFirst()', function(){
		it('should add the item to list', function(){
			list.addFirst(5);
			assert.equal(5, list.getFirst().getValue(), 'Value of first item is 5');
			assert.equal(1, list.getSize(), 'List has size 1');
		});
	});

	describe('#getFirst()', function(){
		it('should get the first item of the list', function(){
			list.addFirst(6);
			assert.equal(6, list.getFirst().getValue(), 'Value of first item is 6');
		});
	});	

	describe('#getSize()', function(){
		it('should return the size of the list', function(){
			list.addFirst(7);
			assert.equal(3, list.getSize(), 'List has size 3');
		});
	});	

});