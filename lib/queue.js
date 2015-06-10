'use strict';

require('./util');
require('./list');

function Queue(){
	this.queue = new Array();
	this.dequeue = function(){
		//This is slow. Try to improve later
		return this.queue.shift();
	};
	this.enqueue = function(item){
		return this.queue.push(item);
	};
	this.peek = function(){
		return this.queue[0];
	}
	this.size = function(){
		return this.queue.length;
	};
	this.isEmpty = function(){
		return (this.queue.length === 0);
	}
	this.getAll = function(){
		return this.queue;
	};
	this.clear = function(){
		this.queue = [];
		return this.queue;
	}
}

module.exports = Queue;