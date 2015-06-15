'use strict';

var Node = require('./node');

// API reference:
// https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html

var SinglyLinkedList = function() {

	this.head = null;
	this.size = 0;

	this.isEmpty = function(){
		return (this.size === 0);
	}

	this.addFirst = function(item){
		var node = new Node(item);
		node.setNext(this.head);
		this.head = node;
		this.size += 1;
	}

	this.getFirst = function(){
		return this.head;
	}

	this.getSize = function(){
		return this.size;
	}
}

module.exports = SinglyLinkedList;