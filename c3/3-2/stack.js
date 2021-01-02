var MinStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    if( this.stack.length> this.maxSize ){ return; }
    this.stack.push(x);
};

MinStack.prototype.pop = function() {
    return this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getSize = function() {
    return this.stack.length;
};