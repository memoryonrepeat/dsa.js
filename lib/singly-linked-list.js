'use strict';

var Node = require('./node');

// API reference:
// https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html

// Size is updated dynamically to improve performance

var SinglyLinkedList = function() {

	this.head = null;
	this.tail = null;
	this.size = 0;

	this.isEmpty = function(){
		return (this.size === 0);
	}

	this.addFirst = function(item){
		var node = new Node(item);
		if (this.isEmpty()){
			this.head = node;
			this.tail = node;
		}
		else{
			node.setNext(this.head);
			this.head = node;
		}
		this.size++;
	}

	this.addLast = function(item){
		var node = new Node(item);
		if (this.isEmpty()){
			this.head = node;
			this.tail = node;
		}
		else{
			this.tail.setNext(node);
			this.tail = node;
		}
		this.size++;
	}

	this.getFirst = function(){
		return this.head;
	}

	this.getLast = function(){
		return this.tail;
	}

	this.getSize = function(){
		return this.size;
	}

	// Remove head from the list
	this.removeFirst = function(){
		if (this.isEmpty()){
			throw new Error('Can not remove from empty list');
		}
		this.head = this.head.getNext();
		this.size--;
	}

	// Remove tail from the list
	this.removeLast = function(){
		if (this.isEmpty()){
			throw new Error('Can not remove from empty list');
		}
		if (this.getSize()===1){
			this.head = null;
			this.tail = null;
			this.size--;
			return;
		}
		var current = this.head;
		while(current.getNext() !== this.tail){
			current = current.getNext();
		}
		current.setNext(null);
		this.tail = current;
		this.size--;	
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