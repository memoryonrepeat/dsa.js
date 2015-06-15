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
		});
	});	

});