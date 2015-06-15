'use strict';

var Node = require('./node');

var SinglyLinkedList = function() {

	this.head = null;
	this.size = 0;

	this.isEmpty = function(){
		return (this.size === 0);
	}

	this.add = function(item){
		var node = new Node(item);
		node.setNext(this.head);
		this.head = node;
		this.size += 1;
	}
}

module.exports = SinglyLinkedList;