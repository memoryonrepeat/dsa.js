'use strict';

require('./util');
require('./list');

function Stack(){
	this.stack = new Array();
	this.pop = function(){
		return this.stack.pop();
	};
	this.push = function(item){
		return this.stack.push(item);
	};
	this.size = function(){
		return this.stack.length;
	};
	this.isEmpty = function(){
		return (this.stack.length === 0);
	}
	this.getAll = function(){
		return this.stack;
	};
	this.clear = function(){
		this.stack = [];
		return this.stack;
	}
}

module.exports = Stack;