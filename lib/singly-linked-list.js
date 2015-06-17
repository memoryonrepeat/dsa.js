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
		this.size++;
	}

	this.addLast = function(item){
		var node = new Node(item);
		var current = this.head;
		while(current.hasNext()){
			current = current.getNext();
		}
		current.setNext(node);
	}

	this.getFirst = function(){
		return this.head;
	}

	this.getSize = function(){
		return this.size;
	}

	// Remove head from the list
	this.removeFirst = function(){
		if (this.head !== null){
			this.head = this.head.getNext();
			this.size--;
		}
	}

	// Traverse the list and return the array containing all elements
	this.toArray = function(){
		var arr = [];
		if (this.size>0){
			var current = this.head;
			while(current.hasNext()){
				arr.push(current.getValue());
				current = current.getNext();
			}
			arr.push(current.getValue());
		}
		return arr;
	}
}

module.exports = SinglyLinkedList;