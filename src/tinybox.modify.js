/**
 * tinybox.modify.js 
 */

(function() {
	
	var _box = TINY.box;
	var show = _box.show;
	var isEnabledStack = false;
	var current = "";
	var stack = [];
	
	function isAjax( content ) {
		if ( typeof content != "string"  )
			throw "input is not a string";
		return 	content.substring(0,3)=='http' || 
				content.charAt(0)=="/";
	}

	function reset() {
		current = "";
		stack = [];
	};
	
	_box.disableStack = function() {
		reset();
		isEnabledStack = false;
	};
	
	_box.close = function() {
		this.disableStack();
		this.hide();
	};
	
	_box.back = function( n ) {
		if ( n === undefined ) n = 1; // default value of jumps
		else if ( n == 0 ) return; // fake jump
		if ( n >= stack.length) { // stack size exceded
			this.close();
			return;
		}
		for ( var i=1; i <= n; i++ ) {
			var previous = stack.pop();
			if ( i == n ) {
				this.modify(previous, 1/*noTrack*/);
			}
		}
	};
	
	_box.show = function( o ) {
		if ( o.stack != null && o.stack === true ) {
			reset();
			current = o.url ? o.url : o.html;
			stack.push(current);
			isEnabledStack = true;
		}
		show.call(this,o);
	};
	
	_box.modify = function( content, noTrack ) {
		if ( ! isEnabledStack ) {
			throw 'stack is not enabled';
		}
		if ( current == "" ) { 
			throw 'stack is not initialized';
		}
		if ( ! noTrack ) stack.push(current); // not track this jump
		current = content;
		this.fill(
			content
			, isAjax(content) // check ajax [0,1]
			, 0 // no resizing parameters input
			, 1 // is animated
		);
	};
	
})();