'use strict';

var Node = function(value){

	this.value = value;
	this.next = null;

	this.hasNext = function(){
		return this.next !== null;
	}

	this.getValue = function(){
		return this.value;
	}

	this.getNext = function(){
		return this.next;
	}

	this.setValue = function(value){
		this.value = value;
	}

	this.setNext = function(value){
		this.next = value;
	}
}

module.exports = Node;