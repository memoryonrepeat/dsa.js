'use strict';

var Node = function(value){
	this.value = value;
	this.next = null;
	this.hasNext = function(){
		return this.next !== null;
	}
}

module.exports = Node;