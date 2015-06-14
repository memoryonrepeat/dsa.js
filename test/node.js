var assert = require("assert");

var Node = require('../lib/node');

var node = new Node(1);

describe('Node', function(){

	describe('#getValue()', function(){
		it('should return current value of the node', function(){
			assert.equal(1, node.getValue(), 'Current value is 1');
		});
	});

	describe('#hasNext()', function(){
		it('should return whether the node has next value', function(){
			assert.equal(false, node.hasNext(), 'node has no next value');
			node.setNext(2);
			assert.equal(true, node.hasNext(), 'node has next value');
		});
	});

	describe('#getNext()', function(){
		it('should return current next value of the node', function(){
			assert.equal(2, node.getNext(), 'Current next value is 2');
		});
	});

	describe('#setValue(value)', function(){
		it('should set value of the node to the indicated one', function(){
			node.setValue(3);
			assert.equal(3, node.getValue(), 'Current value is 3');
		});
	});	

	describe('#setNext(value', function(){
		it('should set next value of the node to the indicated one', function(){
			node.setNext(4);
			assert.equal(4, node.getNext(), 'Current next value is 4');
		});
	});

});