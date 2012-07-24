/*!
	SliderJS
	Designed and built by Zach Wise at VéritéCo

	This Source Code Form is subject to the terms of the Mozilla Public
	License, v. 2.0. If a copy of the MPL was not distributed with this
	file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*********************************************** 
     Begin VMM.StoryJS.License.js 
***********************************************/ 

/*!
	StoryJS
	Designed and built by Zach Wise at VéritéCo

	This Source Code Form is subject to the terms of the Mozilla Public
	License, v. 2.0. If a copy of the MPL was not distributed with this
	file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*********************************************** 
     Begin VMM.js 
***********************************************/ 

/**
	* VéritéCo JS Core
	* Designed and built by Zach Wise at VéritéCo zach@verite.co

	* This Source Code Form is subject to the terms of the Mozilla Public
	* License, v. 2.0. If a copy of the MPL was not distributed with this
	* file, You can obtain one at http://mozilla.org/MPL/2.0/.

*/  


/*	Simple JavaScript Inheritance
	By John Resig http://ejohn.org/
	MIT Licensed.
================================================== */
(function() {
	var initializing = false,
	fnTest = /xyz/.test(function() {
		xyz;
		}) ? /\b_super\b/: /.*/;
		// The base Class implementation (does nothing)
	this.Class = function() {};

    // Create a new Class that inherits from this class
	Class.extend = function(prop) {
		var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

        // Copy the properties over onto the new prototype
		for (var name in prop) {
            // Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == "function" &&
			typeof _super[name] == "function" && fnTest.test(prop[name]) ?
			(function(name, fn) {
				return function() {
					var tmp = this._super;

					// Add a new ._super() method that is the same method
					// but on the super-class
					this._super = _super[name];

					// The method only need to be bound temporarily, so we
					// remove it when we're done executing
					var ret = fn.apply(this, arguments);
					this._super = tmp;

					return ret;
				};
			})(name, prop[name]) :
			prop[name];
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!initializing && this.init)
			this.init.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = arguments.callee;

		return Class;
    };
})();

/*	Access to the Global Object
	access the global object without hard-coding the identifier window
================================================== */
var global = (function () {
   return this || (1,eval)('this');
}());

/* VMM
================================================== */
if (typeof VMM == 'undefined') {
	
	/* Main Scope Container
	================================================== */
	//var VMM = {};
	var VMM = Class.extend({});
	
	/* Debug
	================================================== */
	VMM.debug = true;
	
	/* Master Config
	================================================== */
	
	VMM.master_config = ({
		
		init: function() {
			return this;
		},
		
		sizes: {
			api: {
				width:			0,
				height:			0
			}
		},
		
		vp:				"Pellentesque nibh felis, eleifend id, commodo in, interdum vitae, leo",
		
		api_keys_master: {
			flickr:		"RAIvxHY4hE/Elm5cieh4X5ptMyDpj7MYIxziGxi0WGCcy1s+yr7rKQ==",
			google:		"jwNGnYw4hE9lmAez4ll0QD+jo6SKBJFknkopLS4FrSAuGfIwyj57AusuR0s8dAo=",
			twitter:	""
		},
		
		timers: {
			api:			7000
		},
		
		api:	{
			pushques:		[]
			
		},
		
		twitter: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		flickr: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		youtube: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		vimeo: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		googlemaps: {
			active:			false,
			map_active:		false,
			places_active:	false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		googledocs: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		googleplus: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		wikipedia: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[],
			tries:			0
		},
		
		soundcloud: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		}
		
	}).init();
	
	//VMM.createElement(tag, value, cName, attrs, styles);
	VMM.createElement = function(tag, value, cName, attrs, styles) {
		
		var ce = "";
		
		if (tag != null && tag != "") {
			
			// TAG
			ce += "<" + tag;
			if (cName != null && cName != "") {
				ce += " class='" + cName + "'";
			};
			
			if (attrs != null && attrs != "") {
				ce += " " + attrs;
			};
			
			if (styles != null && styles != "") {
				ce += " style='" + styles + "'";
			};
			
			ce += ">";
			
			if (value != null && value != "") {
				ce += value;
			}
			
			// CLOSE TAG
			ce = ce + "</" + tag + ">";
		}
		
		return ce;
		
    };

	VMM.createMediaElement = function(media, caption, credit) {
		
		var ce = "";
		
		var _valid = false;
		
		ce += "<div class='media'>";
		
		if (media != null && media != "") {
			
			valid = true;
			
			ce += "<img src='" + media + "'>";
			
			// CREDIT
			if (credit != null && credit != "") {
				ce += VMM.createElement("div", credit, "credit");
			}
			
			// CAPTION
			if (caption != null && caption != "") {
				ce += VMM.createElement("div", caption, "caption");
			}

		}
		
		ce += "</div>";
		
		return ce;
		
    };

	// Hide URL Bar for iOS and Android by Scott Jehl
	// https://gist.github.com/1183357

	VMM.hideUrlBar = function () {
		var win = window,
			doc = win.document;

		// If there's a hash, or addEventListener is undefined, stop here
		if( !location.hash || !win.addEventListener ){

			//scroll to 1
			window.scrollTo( 0, 1 );
			var scrollTop = 1,

			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );

			win.addEventListener( "load", function(){
				setTimeout(function(){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}, 0);
			}, false );
		}
	};
	

}

/* Trace (console.log)
================================================== */
function trace( msg ) {
	if (VMM.debug) {
		if (window.console) {
			console.log(msg);
		} else if ( typeof( jsTrace ) != 'undefined' ) {
			jsTrace.send( msg );
		} else {
			//alert(msg);
		}
	}
}

/*	Array Remove - By John Resig (MIT Licensed)
	http://ejohn.org/blog/javascript-array-remove/
================================================== */
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
}

/* Extending Date to include Week
================================================== */
Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

/* Extending Date to include Day of Year
================================================== */
Date.prototype.getDayOfYear = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((this - onejan) / 86400000);
}

/* A MORE SPECIFIC TYPEOF();
//	http://rolandog.com/archives/2007/01/18/typeof-a-more-specific-typeof/
================================================== */
// type.of()
var is={
	Null:function(a){return a===null;},
	Undefined:function(a){return a===undefined;},
	nt:function(a){return(a===null||a===undefined);},
	Function:function(a){return(typeof(a)==="function")?a.constructor.toString().match(/Function/)!==null:false;},
	String:function(a){return(typeof(a)==="string")?true:(typeof(a)==="object")?a.constructor.toString().match(/string/i)!==null:false;},
	Array:function(a){return(typeof(a)==="object")?a.constructor.toString().match(/array/i)!==null||a.length!==undefined:false;},
	Boolean:function(a){return(typeof(a)==="boolean")?true:(typeof(a)==="object")?a.constructor.toString().match(/boolean/i)!==null:false;},
	Date:function(a){return(typeof(a)==="date")?true:(typeof(a)==="object")?a.constructor.toString().match(/date/i)!==null:false;},
	HTML:function(a){return(typeof(a)==="object")?a.constructor.toString().match(/html/i)!==null:false;},
	Number:function(a){return(typeof(a)==="number")?true:(typeof(a)==="object")?a.constructor.toString().match(/Number/)!==null:false;},
	Object:function(a){return(typeof(a)==="object")?a.constructor.toString().match(/object/i)!==null:false;},
	RegExp:function(a){return(typeof(a)==="function")?a.constructor.toString().match(/regexp/i)!==null:false;}
};
var type={
	of:function(a){
		for(var i in is){
			if(is[i](a)){
				return i.toLowerCase();
			}
		}
	}
};





/*********************************************** 
     Begin VMM.Library.js 
***********************************************/ 

/*	* LIBRARY ABSTRACTION
================================================== */
if(typeof VMM != 'undefined') {
	
	VMM.smoothScrollTo = function(elem, duration, ease) {
		if( typeof( jQuery ) != 'undefined' ){
			var _ease		= "easein",
				_duration	= 1000;
		
			if (duration != null) {
				if (duration < 1) {
					_duration = 1;
				} else {
					_duration = Math.round(duration);
				}
				
			}
			
			if (ease != null && ease != "") {
				_ease = ease;
			}
			
			if (jQuery(window).scrollTop() != VMM.Lib.offset(elem).top) {
				VMM.Lib.animate('html,body', _duration, _ease, {scrollTop: VMM.Lib.offset(elem).top})
			}
			
		}
		
	};
	
	VMM.attachElement = function(element, content) {
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).html(content);
		}
		
	};
	
	VMM.appendElement = function(element, content) {
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).append(content);
		}
		
	};
	
	VMM.getHTML = function(element) {
		var e;
		if( typeof( jQuery ) != 'undefined' ){
			e = jQuery(element).html();
			return e;
		}
		
	};
	
	VMM.getElement = function(element, p) {
		var e;
		if( typeof( jQuery ) != 'undefined' ){
			if (p) {
				e = jQuery(element).parent().get(0);
				
			} else {
				e = jQuery(element).get(0);
			}
			return e;
		}
		
	};
	
	VMM.bindEvent = function(element, the_handler, the_event_type, event_data) {
		var e;
		var _event_type = "click";
		var _event_data = {};
		
		if (the_event_type != null && the_event_type != "") {
			_event_type = the_event_type;
		}
		
		if (_event_data != null && _event_data != "") {
			_event_data = event_data;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).bind(_event_type, _event_data, the_handler);
			
			//return e;
		}
		
	};
	
	VMM.unbindEvent = function(element, the_handler, the_event_type) {
		var e;
		var _event_type = "click";
		var _event_data = {};
		
		if (the_event_type != null && the_event_type != "") {
			_event_type = the_event_type;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).unbind(_event_type, the_handler);
			
			//return e;
		}
		
	};
	
	VMM.fireEvent = function(element, the_event_type, the_data) {
		var e;
		var _event_type = "click";
		var _data = [];
		
		if (the_event_type != null && the_event_type != "") {
			_event_type = the_event_type;
		}
		if (the_data != null && the_data != "") {
			_data = the_data;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).trigger(_event_type, _data);
			
			//return e;
		}
		
	};
	
	VMM.getJSON = function(url, data, callback) {
		if( typeof( jQuery ) != 'undefined' ){
			jQuery.ajaxSetup({
			     timeout: 3000
			});
			/* CHECK FOR IE
			================================================== */
			if ( VMM.Browser.browser == "Explorer" && parseInt(VMM.Browser.version, 10) >= 7 && window.XDomainRequest) {
				trace("IE JSON");
				var ie_url = url;
				if (ie_url.match('^http://')){
					return jQuery.getJSON(ie_url, data, callback);
				} else if (ie_url.match('^https://')) {
					ie_url = ie_url.replace("https://","http://");
					return jQuery.getJSON(ie_url, data, callback);
				} else {
					return jQuery.getJSON(url, data, callback);
				}
				
			} else {
				return jQuery.getJSON(url, data, callback);

			}
		}
	}
	
	VMM.parseJSON = function(the_json) {
		if( typeof( jQuery ) != 'undefined' ){
			return jQuery.parseJSON(the_json);
		}
	}
	
	// ADD ELEMENT AND RETURN IT
	VMM.appendAndGetElement = function(append_to_element, tag, cName, content) {
		var e,
			_tag		= "<div>",
			_class		= "",
			_content	= "",
			_id			= "";
		
		if (tag != null && tag != "") {
			_tag = tag;
		}
		
		if (cName != null && cName != "") {
			_class = cName;
		}
		
		if (content != null && content != "") {
			_content = content;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			
			e = jQuery(tag);
			
			e.addClass(_class);
			e.html(_content);
			
			jQuery(append_to_element).append(e);
			
		}
		
		return e;
		
	};
	
	VMM.Lib = {
		
		init: function() {
			return this;
		},
		
		hide: function(element, duration) {
			if (duration != null && duration != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).hide(duration);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).hide();
				}
			}
			
		},
		
		remove: function(element) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).remove();
			}
		},
		
		detach: function(element) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).detach();
			}
		},
		
		append: function(element, value) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).append(value);
			}
		},
		
		prepend: function(element, value) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).prepend(value);
			}
		},
		
		show: function(element, duration) {
			if (duration != null && duration != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).show(duration);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).show();
				}
			}
			
		},
		
		load: function(element, callback_function, event_data) {
			var _event_data = {elem:element}; // return element by default
			if (_event_data != null && _event_data != "") {
				_event_data = event_data;
			}
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).load(_event_data, callback_function);
			}
		},
		
		addClass: function(element, cName) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).addClass(cName);
			}
		},
		
		removeClass: function(element, cName) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).removeClass(cName);
			}
		},
		
		attr: function(element, aName, value) {
			if (value != null && value != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).attr(aName, value);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).attr(aName);
				}
			}
		},
		
		prop: function(element, aName, value) {
			if (typeof jQuery == 'undefined' || !/[1-9]\.[3-9].[1-9]/.test(jQuery.fn.jquery)) {
			    VMM.Lib.attribute(element, aName, value);
			} else {
				jQuery(element).prop(aName, value);
			}
		},
		
		attribute: function(element, aName, value) {
			
			if (value != null && value != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).attr(aName, value);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).attr(aName);
				}
			}
		},
		
		visible: function(element, show) {
			if (show != null) {
				if( typeof( jQuery ) != 'undefined' ){
					if (show) {
						jQuery(element).show(0);
					} else {
						jQuery(element).hide(0);
					}
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					if ( jQuery(element).is(':visible')){
						return true;
					} else {
						return false;
					}
				}
			}
		},
		
		css: function(element, prop, value) {

			if (value != null && value != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).css(prop, value);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).css(prop);
				}
			}
		},
		
		cssmultiple: function(element, propval) {

			if( typeof( jQuery ) != 'undefined' ){
				return jQuery(element).css(propval);
			}
		},
		
		offset: function(element) {
			var p;
			if( typeof( jQuery ) != 'undefined' ){
				p = jQuery(element).offset();
			}
			return p;
		},
		
		position: function(element) {
			var p;
			if( typeof( jQuery ) != 'undefined' ){
				p = jQuery(element).position();
			}
			return p;
		},
		
		width: function(element, s) {
			if (s != null && s != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).width(s);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).width();
				}
			}
		},
		
		height: function(element, s) {
			if (s != null && s != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).height(s);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).height();
				}
			}
		},
		
		toggleClass: function(element, cName) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).toggleClass(cName);
			}
		},
		
		each:function(element, return_function) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).each(return_function);
			}
			
		},
		
		html: function(element, str) {
			var e;
			if( typeof( jQuery ) != 'undefined' ){
				e = jQuery(element).html();
				return e;
			}
			
			if (str != null && str != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).html(str);
				}
			} else {
				var e;
				if( typeof( jQuery ) != 'undefined' ){
					e = jQuery(element).html();
					return e;
				}
			}

		},
		
		find: function(element, selec) {
			if( typeof( jQuery ) != 'undefined' ){
				return jQuery(element).find(selec);
			}
		},
		
		stop: function(element) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).stop();
			}
		},
		
		delay_animate: function(delay, element, duration, ease, att, callback_function) {
			if (VMM.Browser.device == "mobile" || VMM.Browser.device == "tablet") {
				var _tdd		= Math.round((duration/1500)*10)/10,
					__duration	= _tdd + 's';
					
				VMM.Lib.css(element, '-webkit-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, '-moz-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, '-o-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, '-ms-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, 'transition', 'all '+ __duration + ' ease');
				VMM.Lib.cssmultiple(element, _att);
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).delay(delay).animate(att, {duration:duration, easing:ease} );
				}
			}
			
		},
		
		animate: function(element, duration, ease, att, que, callback_function) {
			
			var _ease		= "easein",
				_que		= false,
				_duration	= 1000,
				_att		= {};
			
			if (duration != null) {
				if (duration < 1) {
					_duration = 1;
				} else {
					_duration = Math.round(duration);
				}
				
			}
			
			if (ease != null && ease != "") {
				_ease = ease;
			}
			
			if (que != null && que != "") {
				_que = que;
			}
			
			
			if (att != null) {
				_att = att
			} else {
				_att = {opacity: 0}
			}
			
			
			if (VMM.Browser.device == "mobile" || VMM.Browser.device == "tablet") {
				
				var _tdd		= Math.round((_duration/1500)*10)/10,
					__duration	= _tdd + 's';
					
				_ease = " cubic-bezier(0.33, 0.66, 0.66, 1)";
				//_ease = " ease-in-out";
				for (x in _att) {
					if (Object.prototype.hasOwnProperty.call(_att, x)) {
						trace(x + " to " + _att[x]);
						VMM.Lib.css(element, '-webkit-transition',  x + ' ' + __duration + _ease);
						VMM.Lib.css(element, '-moz-transition', x + ' ' + __duration + _ease);
						VMM.Lib.css(element, '-o-transition', x + ' ' + __duration + _ease);
						VMM.Lib.css(element, '-ms-transition', x + ' ' + __duration + _ease);
						VMM.Lib.css(element, 'transition', x + ' ' + __duration + _ease);
					}
				}
				
				VMM.Lib.cssmultiple(element, _att);
				
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					if (callback_function != null && callback_function != "") {
						jQuery(element).animate(_att, {queue:_que, duration:_duration, easing:_ease, complete:callback_function} );
					} else {
						jQuery(element).animate(_att, {queue:_que, duration:_duration, easing:_ease} );
					}
				}
			}
			
		}
		
	}
}

if( typeof( jQuery ) != 'undefined' ){
	
	/*	XDR AJAX EXTENTION FOR jQuery
		https://github.com/jaubourg/ajaxHooks/blob/master/src/ajax/xdr.js
	================================================== */
	(function( jQuery ) {
		if ( window.XDomainRequest ) {
			jQuery.ajaxTransport(function( s ) {
				if ( s.crossDomain && s.async ) {
					if ( s.timeout ) {
						s.xdrTimeout = s.timeout;
						delete s.timeout;
					}
					var xdr;
					return {
						send: function( _, complete ) {
							function callback( status, statusText, responses, responseHeaders ) {
								xdr.onload = xdr.onerror = xdr.ontimeout = jQuery.noop;
								xdr = undefined;
								complete( status, statusText, responses, responseHeaders );
							}
							xdr = new XDomainRequest();
							xdr.open( s.type, s.url );
							xdr.onload = function() {
								callback( 200, "OK", { text: xdr.responseText }, "Content-Type: " + xdr.contentType );
							};
							xdr.onerror = function() {
								callback( 404, "Not Found" );
							};
							if ( s.xdrTimeout ) {
								xdr.ontimeout = function() {
									callback( 0, "timeout" );
								};
								xdr.timeout = s.xdrTimeout;
							}
							xdr.send( ( s.hasContent && s.data ) || null );
						},
						abort: function() {
							if ( xdr ) {
								xdr.onerror = jQuery.noop();
								xdr.abort();
							}
						}
					};
				}
			});
		}
	})( jQuery );
	
	/*	jQuery Easing v1.3
		http://gsgd.co.uk/sandbox/jquery/easing/
	================================================== */
	jQuery.easing['jswing'] = jQuery.easing['swing'];

	jQuery.extend( jQuery.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
	});
}


/*********************************************** 
     Begin VMM.Browser.js 
***********************************************/ 

/*	* DEVICE AND BROWSER DETECTION
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Browser == 'undefined') {
	
	VMM.Browser = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
			this.device = this.searchDevice(navigator.userAgent);
			this.orientation = this.searchOrientation(window.orientation);
		},
		searchOrientation: function(orientation) {
			var orient = "";
			if ( orientation == 0  || orientation == 180) {  
				orient = "portrait";
			} else if ( orientation == 90 || orientation == -90) {  
				orient = "landscape";
			} else {
				orient = "normal";
			}
			return orient;
		},
		searchDevice: function(d) {
			var device = "";
			if (d.match(/Android/i) || d.match(/iPhone|iPod/i)) {
				device = "mobile";
			} else if (d.match(/iPad/i)) {
				device = "tablet";
			} else if (d.match(/BlackBerry/i) || d.match(/IEMobile/i)) {
				device = "other mobile";
			} else {
				device = "desktop";
			}
			return device;
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString	= data[i].string,
					dataProp	= data[i].prop;
					
				this.versionSearchString = data[i].versionSearch || data[i].identity;
				
				if (dataString) {
					if (dataString.indexOf(data[i].subString) != -1) {
						return data[i].identity;
					}
				} else if (dataProp) {
					return data[i].identity;
				}
			}
		},
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1) return;
			return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
		},
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome"
			},
			{ 	string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb"
			},
			{
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari",
				versionSearch: "Version"
			},
			{
				prop: window.opera,
				identity: "Opera",
				versionSearch: "Version"
			},
			{
				string: navigator.vendor,
				subString: "iCab",
				identity: "iCab"
			},
			{
				string: navigator.vendor,
				subString: "KDE",
				identity: "Konqueror"
			},
			{
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox"
			},
			{
				string: navigator.vendor,
				subString: "Camino",
				identity: "Camino"
			},
			{		// for newer Netscapes (6+)
				string: navigator.userAgent,
				subString: "Netscape",
				identity: "Netscape"
			},
			{
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer",
				versionSearch: "MSIE"
			},
			{
				string: navigator.userAgent,
				subString: "Gecko",
				identity: "Mozilla",
				versionSearch: "rv"
			},
			{ 		// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla"
			}
		],
		dataOS : [
			{
				string: navigator.platform,
				subString: "Win",
				identity: "Windows"
			},
			{
				string: navigator.platform,
				subString: "Mac",
				identity: "Mac"
			},
			{
				string: navigator.userAgent,
				subString: "iPhone",
				identity: "iPhone/iPod"
		    },
			{
				string: navigator.userAgent,
				subString: "iPad",
				identity: "iPad"
		    },
			{
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]

	}
	VMM.Browser.init();
}

/*********************************************** 
     Begin VMM.FileExtention.js 
***********************************************/ 

/*	* File Extention
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.FileExtention == 'undefined') {
	VMM.FileExtention = {
		googleDocType: function(url) {
			var fileName			= url.replace(/\s\s*$/, ''),
				fileExtension		= "",
				validFileExtensions = ["DOC","DOCX","XLS","XLSX","PPT","PPTX","PDF","PAGES","AI","PSD","TIFF","DXF","SVG","EPS","PS","TTF","XPS","ZIP","RAR"],
				flag				= false;
				
			fileExtension = fileName.substr(fileName.length - 5, 5);
			
			for (var i = 0; i < validFileExtensions.length; i++) {
				if (fileExtension.toLowerCase().match(validFileExtensions[i].toString().toLowerCase()) || fileName.match("docs.google.com") ) {
					flag = true;
				}
			}
			return flag;
		}
	}
}

/*********************************************** 
     Begin VMM.Date.js 
***********************************************/ 

/*	* Utilities and Useful Functions
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Date == 'undefined') {
	
	VMM.Date = ({
		
		init: function() {
			return this;
		},
		
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date: "hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
			
		month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
		day: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."],
		hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		hour_suffix: ["am"],
			
		//B.C.
		bc_format: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "dddd', 'h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "dddd',' mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date: "hh:MM TT'<br/><small>'dddd',' mmm d',' yyyy'</small>'"
		},
			
		setLanguage: function(lang) {
			trace("SET DATE LANGUAGE");
			VMM.Date.dateformats		=	lang.dateformats;	
			VMM.Date.month				=	lang.date.month;
			VMM.Date.month_abbr			=	lang.date.month_abbr;
			VMM.Date.day				=	lang.date.day;
			VMM.Date.day_abbr			=	lang.date.day_abbr;
			dateFormat.i18n.dayNames	=	lang.date.day_abbr.concat(lang.date.day);
			dateFormat.i18n.monthNames	=	lang.date.month_abbr.concat(lang.date.month);
		},
			
		parse: function(d) {
			"use strict";
			var date,
				date_array,
				time_array,
				time_parse;
			
			if (type.of(d) == "date") {
				date = d;
			} else {
				date = new Date(0, 0, 1, 0, 0, 0, 0);
				
				if ( d.match(/,/gi) ) {
					date_array = d.split(",");
					for(var i = 0; i < date_array.length; i++) {
						date_array[i] = parseInt(date_array[i], 10);
					}
					if (	date_array[0]			) {	date.setFullYear(		date_array[0]);			}
					if (	date_array[1]	> 1		) {	date.setMonth(			date_array[1] - 1);		}
					if (	date_array[2]	> 1		) {	date.setDate(			date_array[2]);			}
					if (	date_array[3]	> 1		) {	date.setHours(			date_array[3]);			}
					if (	date_array[4]	> 1		) {	date.setMinutes(		date_array[4]);			}
					if (	date_array[5]	> 1		) {	date.setSeconds(		date_array[5]);			}
					if (	date_array[6]	> 1		) {	date.setMilliseconds(	date_array[6]);			}
				} else if (d.match("/")) {
					if (d.match(" ")) {
						time_parse = d.split(" ");
						if (d.match(":")) {
							time_array = time_parse[1].split(":");
							if (	time_array[0]	>= 1	) {		date.setHours(			time_array[0]);	}
							if (	time_array[1]	>= 1	) {		date.setMinutes(		time_array[1]);	}
							if (	time_array[2]	>= 1	) {		date.setSeconds(		time_array[2]);	}
							if (	time_array[3]	>= 1	) {		date.setMilliseconds(	time_array[3]);	}
						}
						date_array = time_parse[0].split("/");
					} else {
						date_array = d.split("/");
					}
					if (	date_array[2]			) {	date.setFullYear(		date_array[2]);			}
					if (	date_array[0]	> 1		) {	date.setMonth(			date_array[0] - 1);		}
					if (	date_array[1]	> 1		) {	date.setDate(			date_array[1]);			}
				} else if (d.length <= 5) {
					date.setFullYear(parseInt(d, 10));
					date.setMonth(0);
					date.setDate(1);
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
				} else if (d.match("T")) {
					if (navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
					    // IE 8 < Won't accept dates with a "-" in them.
						time_parse = d.split("T");
						if (d.match(":")) {
							time_array = _time_parse[1].split(":");
							if (	time_array[0]	>= 1	) {		date.setHours(			time_array[0]);	}
							if (	time_array[1]	>= 1	) {		date.setMinutes(		time_array[1]);	}
							if (	time_array[2]	>= 1	) {		date.setSeconds(		time_array[2]);	}
							if (	time_array[3]	>= 1	) {		date.setMilliseconds(	time_array[3]);	}
						}
						_d_array = time_parse[0].split("-");
						if (	date_array[0]			) {	date.setFullYear(		date_array[0]);			}
						if (	date_array[1]	> 1		) {	date.setMonth(			date_array[1] - 1);		}
						if (	date_array[2]	> 1		) {	date.setDate(			date_array[2]);			}
						
					} else {
						date = new Date(Date.parse(d));
					}
				} else {
					date = new Date(
						parseInt(d.slice(0,4), 10), 
						parseInt(d.slice(4,6), 10) - 1, 
						parseInt(d.slice(6,8), 10), 
						parseInt(d.slice(8,10), 10), 
						parseInt(d.slice(10,12), 10)
					);
				}
				
			}
			return date;
		},
			
		prettyDate: function(d, is_abbr, d2) {
			var _date,
				_date2,
				format,
				bc_check,
				is_pair = false,
				bc_original,
				bc_number,
				bc_string;
				
			if (d2 != null) {
				is_pair = true;
			}
			
			
			if (type.of(d) == "date") {
				if (d.getMonth() === 0 && d.getDate() == 1 && d.getHours() === 0 && d.getMinutes() === 0 ) {
					// YEAR ONLY
					format = VMM.Date.dateformats.year;
				} else if (d.getDate() <= 1 && d.getHours() === 0 && d.getMinutes() === 0) {
					// YEAR MONTH
					if (is_abbr) {
						format = VMM.Date.dateformats.month_short;
					} else {
						format = VMM.Date.dateformats.month;
					}
				} else if (d.getHours() === 0 && d.getMinutes() === 0) {
					// YEAR MONTH DAY
					if (is_abbr) {
						format = VMM.Date.dateformats.full_short;
					} else {
						format = VMM.Date.dateformats.full;
					}
				} else  if (d.getMinutes() === 0) {
					// YEAR MONTH DAY HOUR
					if (is_abbr) {
						format = VMM.Date.dateformats.time_no_seconds_short;
					} else {
						format = VMM.Date.dateformats.time_no_seconds_small_date;
					}
				} else {
					// YEAR MONTH DAY HOUR MINUTE
					if (is_abbr){
						format = VMM.Date.dateformats.time_no_seconds_short; 
					} else {
						format = VMM.Date.dateformats.full_long; 
					}
				}
				
				_date = dateFormat(d, format, false);
				bc_check = _date.split(" ");
					
				// BC TIME SUPPORT
				for(var i = 0; i < bc_check.length; i++) {
					if ( parseInt(bc_check[i], 10) < 0 ) {
						trace("YEAR IS BC");
						bc_original	= bc_check[i];
						bc_number	= Math.abs( parseInt(bc_check[i], 10) );
						bc_string	= bc_number.toString() + " B.C.";
						_date		= _date.replace(bc_original, bc_string);
					}
				}
					
					
				if (is_pair) {
					_date2 = dateFormat(d2, format);
					bc_check = _date2.split(" ");
					// BC TIME SUPPORT
					for(var j = 0; j < bc_check.length; j++) {
						if ( parseInt(bc_check[j], 10) < 0 ) {
							trace("YEAR IS BC");
							bc_original	= bc_check[j];
							bc_number	= Math.abs( parseInt(bc_check[j], 10) );
							bc_string	= bc_number.toString() + " B.C.";
							_date2			= _date2.replace(bc_original, bc_string);
						}
					}
						
				}
			} else {
				trace("NOT A VALID DATE?");
				trace(d);
			}
				
			if (is_pair) {
				return _date + " &mdash; " + _date2;
			} else {
				return _date;
			}
		}
		
	}).init();
	
	/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */

	var dateFormat = function () {
		var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
			timezoneClip = /[^-+\dA-Z]/g,
			pad = function (val, len) {
				val = String(val);
				len = len || 2;
				while (val.length < len) val = "0" + val;
				return val;
			};

		// Regexes and supporting functions are cached through closure
		return function (date, mask, utc) {
			var dF = dateFormat;

			// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
			if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
				mask = date;
				date = undefined;
			}

			// Passing date through Date applies Date.parse, if necessary
			// Caused problems in IE
			// date = date ? new Date(date) : new Date;
			if (isNaN(date)) {
				trace("invalid date " + date);
				//return "";
			} 

			mask = String(dF.masks[mask] || mask || dF.masks["default"]);

			// Allow setting the utc argument via the mask
			if (mask.slice(0, 4) == "UTC:") {
				mask = mask.slice(4);
				utc = true;
			}

			var	_ = utc ? "getUTC" : "get",
				d = date[_ + "Date"](),
				D = date[_ + "Day"](),
				m = date[_ + "Month"](),
				y = date[_ + "FullYear"](),
				H = date[_ + "Hours"](),
				M = date[_ + "Minutes"](),
				s = date[_ + "Seconds"](),
				L = date[_ + "Milliseconds"](),
				o = utc ? 0 : date.getTimezoneOffset(),
				flags = {
					d:    d,
					dd:   pad(d),
					ddd:  dF.i18n.dayNames[D],
					dddd: dF.i18n.dayNames[D + 7],
					m:    m + 1,
					mm:   pad(m + 1),
					mmm:  dF.i18n.monthNames[m],
					mmmm: dF.i18n.monthNames[m + 12],
					yy:   String(y).slice(2),
					yyyy: y,
					h:    H % 12 || 12,
					hh:   pad(H % 12 || 12),
					H:    H,
					HH:   pad(H),
					M:    M,
					MM:   pad(M),
					s:    s,
					ss:   pad(s),
					l:    pad(L, 3),
					L:    pad(L > 99 ? Math.round(L / 10) : L),
					t:    H < 12 ? "a"  : "p",
					tt:   H < 12 ? "am" : "pm",
					T:    H < 12 ? "A"  : "P",
					TT:   H < 12 ? "AM" : "PM",
					Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
				};

			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	}();

	// Some common format strings
	dateFormat.masks = {
		"default":      "ddd mmm dd yyyy HH:MM:ss",
		shortDate:      "m/d/yy",
		mediumDate:     "mmm d, yyyy",
		longDate:       "mmmm d, yyyy",
		fullDate:       "dddd, mmmm d, yyyy",
		shortTime:      "h:MM TT",
		mediumTime:     "h:MM:ss TT",
		longTime:       "h:MM:ss TT Z",
		isoDate:        "yyyy-mm-dd",
		isoTime:        "HH:MM:ss",
		isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
		isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};

	// Internationalization strings
	dateFormat.i18n = {
		dayNames: [
			"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
			"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
		],
		monthNames: [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
			"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
		]
	};

	// For convenience...
	Date.prototype.format = function (mask, utc) {
		return dateFormat(this, mask, utc);
	};
	
}

/*********************************************** 
     Begin VMM.Util.js 
***********************************************/ 

/*	* Utilities and Useful Functions
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Util == 'undefined') {
	
	VMM.Util = ({
		
		init: function() {
			return this;
		},
		
		/*	* CORRECT PROTOCOL (DOES NOT WORK)
		================================================== */
		correctProtocol: function(url) {
			var loc = (window.parent.location.protocol).toString(),
				prefix = "",
				the_url = url.split("://", 2);
			
			if (loc.match("http")) {
				prefix = loc;
			} else {
				prefix = "https";
			}
			
			return prefix + "://" + the_url[1];
			
		},
		
		/*	* MERGE CONFIG
		================================================== */
		mergeConfig: function(config_main, config_to_merge) {
			var x;
			for (x in config_to_merge) {
				if (Object.prototype.hasOwnProperty.call(config_to_merge, x)) {
					config_main[x] = config_to_merge[x];
				}
			}
			return config_main;
		},
		
		/*	* GET OBJECT ATTRIBUTE BY INDEX
		================================================== */
		getObjectAttributeByIndex: function(obj, index) {
			if(typeof obj != 'undefined') {
				var i = 0;
				for (var attr in obj){
					if (index === i){
						return obj[attr];
					}
					i++;
				}
				return "";
			} else {
				return "";
			}
			
		},
		
		/*	* ORDINAL
		================================================== */
		ordinal: function(n) {
		    return ["th","st","nd","rd"][(!( ((n%10) >3) || (Math.floor(n%100/10)==1)) ) * (n%10)]; 
		},
		
		/*	* RANDOM BETWEEN
		================================================== */
		//VMM.Util.randomBetween(1, 3)
		randomBetween: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		},
		
		/*	* AVERAGE
			* http://jsfromhell.com/array/average
			* var x = VMM.Util.average([2, 3, 4]);
			* VMM.Util.average([2, 3, 4]).mean
		================================================== */
		average: function(a) {
		    var r = {mean: 0, variance: 0, deviation: 0}, t = a.length;
		    for(var m, s = 0, l = t; l--; s += a[l]);
		    for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
		    return r.deviation = Math.sqrt(r.variance = s / t), r;
		},
		
		/*	* CUSTOM SORT
		================================================== */
		customSort: function(a, b) {
			var a1= a, b1= b;
			if(a1== b1) return 0;
			return a1> b1? 1: -1;
		},
		
		/*	* Remove Duplicates from Array
		================================================== */
		deDupeArray: function(arr) {
			var i,
				len=arr.length,
				out=[],
				obj={};

			for (i=0;i<len;i++) {
				obj[arr[i]]=0;
			}
			for (i in obj) {
				out.push(i);
			}
			return out;
		},
		
		/*	* Given an int or decimal, turn that into string in $xxx,xxx.xx format.
		================================================== */
		number2money: function(n, symbol, padding) {
			var symbol = (symbol !== null) ? symbol : true; // add $
			var padding = (padding !== null) ? padding : false; //pad with .00
			var number = VMM.Math2.floatPrecision(n,2); // rounded correctly to two digits, if decimals passed
			var formatted = this.niceNumber(number);
			// no decimal and padding is enabled
			if (!formatted.split(/\./g)[1] && padding) formatted = formatted + ".00";
			// add money sign
			if (symbol) formatted = "$"+formatted;
			return formatted;
		},
		
		/*	* Returns a word count number
		================================================== */
		wordCount: function(s) {
			var fullStr = s + " ";
			var initial_whitespace_rExp = /^[^A-Za-z0-9\'\-]+/gi;
			var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
			var non_alphanumerics_rExp = /[^A-Za-z0-9\'\-]+/gi;
			var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
			var splitString = cleanedStr.split(" ");
			var word_count = splitString.length -1;
			if (fullStr.length <2) {
				word_count = 0;
			}
			return word_count;
		},
		
		ratio: {
			fit: function(w, h, ratio_w, ratio_h) {
				//VMM.Util.ratio.fit(w, h, ratio_w, ratio_h).width;
				var _fit = {width:0,height:0};
				// TRY WIDTH FIRST
				_fit.width = w;
				//_fit.height = Math.round((h / ratio_h) * ratio_w);
				_fit.height = Math.round((w / ratio_w) * ratio_h);
				if (_fit.height > h) {
					_fit.height = h;
					//_fit.width = Math.round((w / ratio_w) * ratio_h);
					_fit.width = Math.round((h / ratio_h) * ratio_w);
					
					if (_fit.width > w) {
						trace("FIT: DIDN'T FIT!!! ")
					}
				}
				
				return _fit;
				
			},
			r16_9: function(w,h) {
				//VMM.Util.ratio.r16_9(w, h) // Returns corresponding number
				if (w !== null && w !== "") {
					return Math.round((h / 16) * 9);
				} else if (h !== null && h !== "") {
					return Math.round((w / 9) * 16);
				}
			},
			r4_3: function(w,h) {
				if (w !== null && w !== "") {
					return Math.round((h / 4) * 3);
				} else if (h !== null && h !== "") {
					return Math.round((w / 3) * 4);
				}
			}
		},
		
		doubledigit: function(n) {
			return (n < 10 ? '0' : '') + n;
		},
		
		/*	* Returns a truncated segement of a long string of between min and max words. If possible, ends on a period (otherwise goes to max).
		================================================== */
		truncateWords: function(s, min, max) {
			
			if (!min) min = 30;
			if (!max) max = min;
			
			var initial_whitespace_rExp = /^[^A-Za-z0-9\'\-]+/gi;
			var left_trimmedStr = s.replace(initial_whitespace_rExp, "");
			var words = left_trimmedStr.split(" ");
			
			var result = [];
			
			min = Math.min(words.length, min);
			max = Math.min(words.length, max);
			
			for (var i = 0; i<min; i++) {
				result.push(words[i]);
			}		
			
			for (var j = min; i<max; i++) {
				var word = words[i];
				
				result.push(word);
				
				if (word.charAt(word.length-1) == '.') {
					break;
				}
			}		
			
			return (result.join(' '));
		},
		
		/*	* Turns plain text links into real links
		================================================== */
		linkify: function(text,targets,is_touch) {
			
			// http://, https://, ftp://
			var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

			// www. sans http:// or https://
			var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

			// Email addresses
			var emailAddressPattern = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;
			

			return text
				.replace(urlPattern, "<a target='_blank' href='$&' onclick='void(0)'>$&</a>")
				.replace(pseudoUrlPattern, "$1<a target='_blank' onclick='void(0)' href='http://$2'>$2</a>")
				.replace(emailAddressPattern, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>");
		},
		
		linkify_with_twitter: function(text,targets,is_touch) {
			
			// http://, https://, ftp://
			var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
			var url_pattern = /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/img;
			var url_replace = '$1$4$7$10$13<a href="$2$5$8$11$14" class="hyphenate">$2$5$8$11$14</a>$3$6$9$12';
			
			// www. sans http:// or https://
			var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
			function replaceURLWithHTMLLinks(text) {
			    var exp = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig;
			    return text.replace(exp, "<a href='$1' target='_blank'>$3</a>");
			}
			// Email addresses
			var emailAddressPattern = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;
			
			//var twitterHandlePattern = /(@([\w]+))/g;
			var twitterHandlePattern = /\B@([\w-]+)/gm;
			var twitterSearchPattern = /(#([\w]+))/g;

			return text
				//.replace(urlPattern, "<a target='_blank' href='$&' onclick='void(0)'>$&</a>")
				.replace(url_pattern, url_replace)
				.replace(pseudoUrlPattern, "$1<a target='_blank' class='hyphenate' onclick='void(0)' href='http://$2'>$2</a>")
				.replace(emailAddressPattern, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>")
				.replace(twitterHandlePattern, "<a href='http://twitter.com/$1' target='_blank' onclick='void(0)'>@$1</a>")
				.replace(twitterSearchPattern, "<a href='http://twitter.com/#search?q=%23$2' target='_blank' 'void(0)'>$1</a>");
		},
		
		linkify_wikipedia: function(text) {
			
			var urlPattern = /<i[^>]*>(.*?)<\/i>/gim;
			return text
				.replace(urlPattern, "<a target='_blank' href='http://en.wikipedia.org/wiki/$&' onclick='void(0)'>$&</a>")
				.replace(/<i\b[^>]*>/gim, "")
				.replace(/<\/i>/gim, "")
				.replace(/<b\b[^>]*>/gim, "")
				.replace(/<\/b>/gim, "");
		},
		
		/*	* Turns plain text links into real links
		================================================== */
		// VMM.Util.unlinkify();
		unlinkify: function(text) {
			if(!text) return text;
			text = text.replace(/<a\b[^>]*>/i,"");
			text = text.replace(/<\/a>/i, "");
			return text;
		},
		
		untagify: function(text) {
			if (!text) {
				return text;
			}
			text = text.replace(/<\s*\w.*?>/g,"");
			return text;
		},
		
		/*	* TK
		================================================== */
		nl2br: function(text) {
			return text.replace(/(\r\n|[\r\n]|\\n|\\r)/g,"<br/>");
		},
		
		/*	* Generate a Unique ID
		================================================== */
		// VMM.Util.unique_ID(size);
		unique_ID: function(size) {
			
			var getRandomNumber = function(range) {
				return Math.floor(Math.random() * range);
			};

			var getRandomChar = function() {
				var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
				return chars.substr( getRandomNumber(62), 1 );
			};

			var randomID = function(size) {
				var str = "";
				for(var i = 0; i < size; i++) {
					str += getRandomChar();
				}
				return str;
			};
			
			return randomID(size);
		},
		/*	* Tells you if a number is even or not
		================================================== */
		// VMM.Util.isEven(n)
		isEven: function(n){
			return (n%2 === 0) ? true : false;
		},
		/*	* Get URL Variables
		================================================== */
		//	var somestring = VMM.Util.getUrlVars(str_url)["varname"];
		getUrlVars: function(string) {
			
			var str = string.toString();
			
			if (str.match('&#038;')) { 
				str = str.replace("&#038;", "&");
			} else if (str.match('&#38;')) {
				str = str.replace("&#38;", "&");
			} else if (str.match('&amp;')) {
				str = str.replace("&amp;", "&");
			}
			
			var vars = [], hash;
			var hashes = str.slice(str.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			
			
			return vars;
		},

		/*	* Cleans up strings to become real HTML
		================================================== */
		toHTML: function(text) {
			
			text = this.nl2br(text);
			text = this.linkify(text);
			
			return text.replace(/\s\s/g,"&nbsp;&nbsp;");
		},
		
		/*	* Returns text strings as CamelCase
		================================================== */
		toCamelCase: function(s,forceLowerCase) {
			
			if(forceLowerCase !== false) forceLowerCase = true;
			
			var sps = ((forceLowerCase) ? s.toLowerCase() : s).split(" ");
			
			for(var i=0; i<sps.length; i++) {
				
				sps[i] = sps[i].substr(0,1).toUpperCase() + sps[i].substr(1);
			}
			
			return sps.join(" ");
		},
		
		/*	* Replaces dumb quote marks with smart ones
		================================================== */
		properQuotes: function(str) {
			return str.replace(/\"([^\"]*)\"/gi,"&#8220;$1&#8221;");
		},
		/*	* Add Commas to numbers
		================================================== */
		niceNumber: function(nStr){
			nStr += '';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		},
		/*	* Transform text to Title Case
		================================================== */
		toTitleCase: function(t){
			if ( VMM.Browser.browser == "Explorer" && parseInt(VMM.Browser.version, 10) >= 7) {
				return t.replace("_", "%20");
			} else {
				var __TitleCase = {
					__smallWords: ['a', 'an', 'and', 'as', 'at', 'but','by', 'en', 'for', 'if', 'in', 'of', 'on', 'or','the', 'to', 'v[.]?', 'via', 'vs[.]?'],

					init: function() {
						this.__smallRE = this.__smallWords.join('|');
						this.__lowerCaseWordsRE = new RegExp('\\b(' + this.__smallRE + ')\\b', 'gi');
						this.__firstWordRE = new RegExp('^([^a-zA-Z0-9 \\r\\n\\t]*)(' + this.__smallRE + ')\\b', 'gi');
						this.__lastWordRE = new RegExp('\\b(' + this.__smallRE + ')([^a-zA-Z0-9 \\r\\n\\t]*)$', 'gi');
					},

					toTitleCase: function(string) {
						var line = '';

						var split = string.split(/([:.;?!][ ]|(?:[ ]|^)["“])/);

						for (var i = 0; i < split.length; ++i) {
							var s = split[i];

							s = s.replace(/\b([a-zA-Z][a-z.'’]*)\b/g,this.__titleCaseDottedWordReplacer);

			 				// lowercase the list of small words
							s = s.replace(this.__lowerCaseWordsRE, this.__lowerReplacer);

							// if the first word in the title is a small word then capitalize it
							s = s.replace(this.__firstWordRE, this.__firstToUpperCase);

							// if the last word in the title is a small word, then capitalize it
							s = s.replace(this.__lastWordRE, this.__firstToUpperCase);

							line += s;
						}

						// special cases
						line = line.replace(/ V(s?)\. /g, ' v$1. ');
						line = line.replace(/(['’])S\b/g, '$1s');
						line = line.replace(/\b(AT&T|Q&A)\b/ig, this.__upperReplacer);

						return line;
					},

					__titleCaseDottedWordReplacer: function (w) {
						return (w.match(/[a-zA-Z][.][a-zA-Z]/)) ? w : __TitleCase.__firstToUpperCase(w);
					},

					__lowerReplacer: function (w) { return w.toLowerCase() },

					__upperReplacer: function (w) { return w.toUpperCase() },

					__firstToUpperCase: function (w) {
						var split = w.split(/(^[^a-zA-Z0-9]*[a-zA-Z0-9])(.*)$/);
						if (split[1]) {
							split[1] = split[1].toUpperCase();
						}
					
						return split.join('');
					
					
					}
				};

				__TitleCase.init();
			
				t = t.replace(/_/g," ");
				t = __TitleCase.toTitleCase(t);
			
				return t;
				
			}
			
		}
		
	}).init();
}

/*********************************************** 
     Begin VMM.LoadLib.js 
***********************************************/ 

/*	* LoadLib Based on LazyLoad by Ryan Grove
	* https://github.com/rgrove/lazyload/ 
	* Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
	* All rights reserved.

	* Permission is hereby granted, free of charge, to any person obtaining a copy of
	* this software and associated documentation files (the 'Software'), to deal in
	* the Software without restriction, including without limitation the rights to
	* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	* the Software, and to permit persons to whom the Software is furnished to do so,
	* subject to the following conditions:

	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.

================================================== */
window.loadedJS = [];


if(typeof VMM != 'undefined' && typeof VMM.LoadLib == 'undefined') {
	//VMM.LoadLib.js('http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js', onJQueryLoaded);
	//VMM.LoadLib.css('http://someurl.css', onCSSLoaded);
	
	
	
	VMM.LoadLib = (function (doc) {
		var env,
		head,
		pending = {},
		pollCount = 0,
		queue = {css: [], js: []},
		styleSheets = doc.styleSheets;
	
		var loaded_Array = [];
	
		function isLoaded(url) {
			var has_been_loaded = false;
			for(var i=0; i<loaded_Array.length; i++) {
				if (loaded_Array[i] == url) {
					has_been_loaded = true;
				}
			}
			if (!has_been_loaded) {
				loaded_Array.push(url);
			}
			return has_been_loaded;
		}

		function createNode(name, attrs) {
			var node = doc.createElement(name), attr;

			for (attr in attrs) {
				if (attrs.hasOwnProperty(attr)) {
					node.setAttribute(attr, attrs[attr]);
				}
			}

			return node;
		}

	  function finish(type) {
	    var p = pending[type],
	        callback,
	        urls;

	    if (p) {
	      callback = p.callback;
	      urls     = p.urls;
	      urls.shift();
	      pollCount = 0;
	      if (!urls.length) {
	        callback && callback.call(p.context, p.obj);
	        pending[type] = null;
	        queue[type].length && load(type);
	      }
	    }
	  }

	  function getEnv() {
	    var ua = navigator.userAgent;

	    env = {

	      async: doc.createElement('script').async === true
	    };

	    (env.webkit = /AppleWebKit\//.test(ua))
	      || (env.ie = /MSIE/.test(ua))
	      || (env.opera = /Opera/.test(ua))
	      || (env.gecko = /Gecko\//.test(ua))
	      || (env.unknown = true);
	  }

	  function load(type, urls, callback, obj, context) {
	    var _finish = function () { finish(type); },
	        isCSS   = type === 'css',
	        nodes   = [],
	        i, len, node, p, pendingUrls, url;

	    env || getEnv();

	    if (urls) {

	      urls = typeof urls === 'string' ? [urls] : urls.concat();

	      if (isCSS || env.async || env.gecko || env.opera) {

	        queue[type].push({
	          urls    : urls,
	          callback: callback,
	          obj     : obj,
	          context : context
	        });
	      } else {
	        for (i = 0, len = urls.length; i < len; ++i) {
	          queue[type].push({
	            urls    : [urls[i]],
	            callback: i === len - 1 ? callback : null,
	            obj     : obj,
	            context : context
	          });
	        }
	      }
	    }

	    if (pending[type] || !(p = pending[type] = queue[type].shift())) {
	      return;
	    }

	    head || (head = doc.head || doc.getElementsByTagName('head')[0]);
	    pendingUrls = p.urls;

	    for (i = 0, len = pendingUrls.length; i < len; ++i) {
	      url = pendingUrls[i];

	      if (isCSS) {
	          node = env.gecko ? createNode('style') : createNode('link', {
	            href: url,
	            rel : 'stylesheet'
	          });
	      } else {
	        node = createNode('script', {src: url});
	        node.async = false;
	      }

	      node.className = 'lazyload';
	      node.setAttribute('charset', 'utf-8');

	      if (env.ie && !isCSS) {
	        node.onreadystatechange = function () {
	          if (/loaded|complete/.test(node.readyState)) {
	            node.onreadystatechange = null;
	            _finish();
	          }
	        };
	      } else if (isCSS && (env.gecko || env.webkit)) {
	        if (env.webkit) {
	          p.urls[i] = node.href; 
	          pollWebKit();
	        } else {
	          node.innerHTML = '@import "' + url + '";';
	          pollGecko(node);
	        }
	      } else {
	        node.onload = node.onerror = _finish;
	      }

	      nodes.push(node);
	    }

	    for (i = 0, len = nodes.length; i < len; ++i) {
	      head.appendChild(nodes[i]);
	    }
	  }

	  function pollGecko(node) {
	    var hasRules;

	    try {

	      hasRules = !!node.sheet.cssRules;
	    } catch (ex) {
	      pollCount += 1;

	      if (pollCount < 200) {
	        setTimeout(function () { pollGecko(node); }, 50);
	      } else {

	        hasRules && finish('css');
	      }

	      return;
	    }

	    finish('css');
	  }

	  function pollWebKit() {
	    var css = pending.css, i;

	    if (css) {
	      i = styleSheets.length;

	      while (--i >= 0) {
	        if (styleSheets[i].href === css.urls[0]) {
	          finish('css');
	          break;
	        }
	      }

	      pollCount += 1;

	      if (css) {
	        if (pollCount < 200) {
	          setTimeout(pollWebKit, 50);
	        } else {

	          finish('css');
	        }
	      }
	    }
	  }

	  return {

		css: function (urls, callback, obj, context) {
			if (isLoaded(urls)) {
				return callback;
			} else {
				load('css', urls, callback, obj, context);
			}
		},

		js: function (urls, callback, obj, context) {
			if (isLoaded(urls)) {
				return callback;
			} else {
				load('js', urls, callback, obj, context);
			}
		}

	  };
	})(this.document);
}



/*********************************************** 
     Begin VMM.FileExtention.js 
***********************************************/ 

/*	* File Extention
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.FileExtention == 'undefined') {
	VMM.FileExtention = {
		googleDocType: function(url) {
			var fileName			= url.replace(/\s\s*$/, ''),
				fileExtension		= "",
				validFileExtensions = ["DOC","DOCX","XLS","XLSX","PPT","PPTX","PDF","PAGES","AI","PSD","TIFF","DXF","SVG","EPS","PS","TTF","XPS","ZIP","RAR"],
				flag				= false;
				
			fileExtension = fileName.substr(fileName.length - 5, 5);
			
			for (var i = 0; i < validFileExtensions.length; i++) {
				if (fileExtension.toLowerCase().match(validFileExtensions[i].toString().toLowerCase()) || fileName.match("docs.google.com") ) {
					flag = true;
				}
			}
			return flag;
		}
	}
}

/*********************************************** 
     Begin VMM.Date.js 
***********************************************/ 

/*	* Utilities and Useful Functions
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Date == 'undefined') {
	
	VMM.Date = ({
		
		init: function() {
			return this;
		},
		
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date: "hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
			
		month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
		day: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."],
		hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		hour_suffix: ["am"],
			
		//B.C.
		bc_format: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "dddd', 'h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "dddd',' mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date: "hh:MM TT'<br/><small>'dddd',' mmm d',' yyyy'</small>'"
		},
			
		setLanguage: function(lang) {
			trace("SET DATE LANGUAGE");
			VMM.Date.dateformats		=	lang.dateformats;	
			VMM.Date.month				=	lang.date.month;
			VMM.Date.month_abbr			=	lang.date.month_abbr;
			VMM.Date.day				=	lang.date.day;
			VMM.Date.day_abbr			=	lang.date.day_abbr;
			dateFormat.i18n.dayNames	=	lang.date.day_abbr.concat(lang.date.day);
			dateFormat.i18n.monthNames	=	lang.date.month_abbr.concat(lang.date.month);
		},
			
		parse: function(d) {
			"use strict";
			var date,
				date_array,
				time_array,
				time_parse;
			
			if (type.of(d) == "date") {
				date = d;
			} else {
				date = new Date(0, 0, 1, 0, 0, 0, 0);
				
				if ( d.match(/,/gi) ) {
					date_array = d.split(",");
					for(var i = 0; i < date_array.length; i++) {
						date_array[i] = parseInt(date_array[i], 10);
					}
					if (	date_array[0]			) {	date.setFullYear(		date_array[0]);			}
					if (	date_array[1]	> 1		) {	date.setMonth(			date_array[1] - 1);		}
					if (	date_array[2]	> 1		) {	date.setDate(			date_array[2]);			}
					if (	date_array[3]	> 1		) {	date.setHours(			date_array[3]);			}
					if (	date_array[4]	> 1		) {	date.setMinutes(		date_array[4]);			}
					if (	date_array[5]	> 1		) {	date.setSeconds(		date_array[5]);			}
					if (	date_array[6]	> 1		) {	date.setMilliseconds(	date_array[6]);			}
				} else if (d.match("/")) {
					if (d.match(" ")) {
						time_parse = d.split(" ");
						if (d.match(":")) {
							time_array = time_parse[1].split(":");
							if (	time_array[0]	>= 1	) {		date.setHours(			time_array[0]);	}
							if (	time_array[1]	>= 1	) {		date.setMinutes(		time_array[1]);	}
							if (	time_array[2]	>= 1	) {		date.setSeconds(		time_array[2]);	}
							if (	time_array[3]	>= 1	) {		date.setMilliseconds(	time_array[3]);	}
						}
						date_array = time_parse[0].split("/");
					} else {
						date_array = d.split("/");
					}
					if (	date_array[2]			) {	date.setFullYear(		date_array[2]);			}
					if (	date_array[0]	> 1		) {	date.setMonth(			date_array[0] - 1);		}
					if (	date_array[1]	> 1		) {	date.setDate(			date_array[1]);			}
				} else if (d.length <= 5) {
					date.setFullYear(parseInt(d, 10));
					date.setMonth(0);
					date.setDate(1);
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
				} else if (d.match("T")) {
					if (navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
					    // IE 8 < Won't accept dates with a "-" in them.
						time_parse = d.split("T");
						if (d.match(":")) {
							time_array = _time_parse[1].split(":");
							if (	time_array[0]	>= 1	) {		date.setHours(			time_array[0]);	}
							if (	time_array[1]	>= 1	) {		date.setMinutes(		time_array[1]);	}
							if (	time_array[2]	>= 1	) {		date.setSeconds(		time_array[2]);	}
							if (	time_array[3]	>= 1	) {		date.setMilliseconds(	time_array[3]);	}
						}
						_d_array = time_parse[0].split("-");
						if (	date_array[0]			) {	date.setFullYear(		date_array[0]);			}
						if (	date_array[1]	> 1		) {	date.setMonth(			date_array[1] - 1);		}
						if (	date_array[2]	> 1		) {	date.setDate(			date_array[2]);			}
						
					} else {
						date = new Date(Date.parse(d));
					}
				} else {
					date = new Date(
						parseInt(d.slice(0,4), 10), 
						parseInt(d.slice(4,6), 10) - 1, 
						parseInt(d.slice(6,8), 10), 
						parseInt(d.slice(8,10), 10), 
						parseInt(d.slice(10,12), 10)
					);
				}
				
			}
			return date;
		},
			
		prettyDate: function(d, is_abbr, d2) {
			var _date,
				_date2,
				format,
				bc_check,
				is_pair = false,
				bc_original,
				bc_number,
				bc_string;
				
			if (d2 != null) {
				is_pair = true;
			}
			
			
			if (type.of(d) == "date") {
				if (d.getMonth() === 0 && d.getDate() == 1 && d.getHours() === 0 && d.getMinutes() === 0 ) {
					// YEAR ONLY
					format = VMM.Date.dateformats.year;
				} else if (d.getDate() <= 1 && d.getHours() === 0 && d.getMinutes() === 0) {
					// YEAR MONTH
					if (is_abbr) {
						format = VMM.Date.dateformats.month_short;
					} else {
						format = VMM.Date.dateformats.month;
					}
				} else if (d.getHours() === 0 && d.getMinutes() === 0) {
					// YEAR MONTH DAY
					if (is_abbr) {
						format = VMM.Date.dateformats.full_short;
					} else {
						format = VMM.Date.dateformats.full;
					}
				} else  if (d.getMinutes() === 0) {
					// YEAR MONTH DAY HOUR
					if (is_abbr) {
						format = VMM.Date.dateformats.time_no_seconds_short;
					} else {
						format = VMM.Date.dateformats.time_no_seconds_small_date;
					}
				} else {
					// YEAR MONTH DAY HOUR MINUTE
					if (is_abbr){
						format = VMM.Date.dateformats.time_no_seconds_short; 
					} else {
						format = VMM.Date.dateformats.full_long; 
					}
				}
				
				_date = dateFormat(d, format, false);
				bc_check = _date.split(" ");
					
				// BC TIME SUPPORT
				for(var i = 0; i < bc_check.length; i++) {
					if ( parseInt(bc_check[i], 10) < 0 ) {
						trace("YEAR IS BC");
						bc_original	= bc_check[i];
						bc_number	= Math.abs( parseInt(bc_check[i], 10) );
						bc_string	= bc_number.toString() + " B.C.";
						_date		= _date.replace(bc_original, bc_string);
					}
				}
					
					
				if (is_pair) {
					_date2 = dateFormat(d2, format);
					bc_check = _date2.split(" ");
					// BC TIME SUPPORT
					for(var j = 0; j < bc_check.length; j++) {
						if ( parseInt(bc_check[j], 10) < 0 ) {
							trace("YEAR IS BC");
							bc_original	= bc_check[j];
							bc_number	= Math.abs( parseInt(bc_check[j], 10) );
							bc_string	= bc_number.toString() + " B.C.";
							_date2			= _date2.replace(bc_original, bc_string);
						}
					}
						
				}
			} else {
				trace("NOT A VALID DATE?");
				trace(d);
			}
				
			if (is_pair) {
				return _date + " &mdash; " + _date2;
			} else {
				return _date;
			}
		}
		
	}).init();
	
	/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */

	var dateFormat = function () {
		var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
			timezoneClip = /[^-+\dA-Z]/g,
			pad = function (val, len) {
				val = String(val);
				len = len || 2;
				while (val.length < len) val = "0" + val;
				return val;
			};

		// Regexes and supporting functions are cached through closure
		return function (date, mask, utc) {
			var dF = dateFormat;

			// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
			if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
				mask = date;
				date = undefined;
			}

			// Passing date through Date applies Date.parse, if necessary
			// Caused problems in IE
			// date = date ? new Date(date) : new Date;
			if (isNaN(date)) {
				trace("invalid date " + date);
				//return "";
			} 

			mask = String(dF.masks[mask] || mask || dF.masks["default"]);

			// Allow setting the utc argument via the mask
			if (mask.slice(0, 4) == "UTC:") {
				mask = mask.slice(4);
				utc = true;
			}

			var	_ = utc ? "getUTC" : "get",
				d = date[_ + "Date"](),
				D = date[_ + "Day"](),
				m = date[_ + "Month"](),
				y = date[_ + "FullYear"](),
				H = date[_ + "Hours"](),
				M = date[_ + "Minutes"](),
				s = date[_ + "Seconds"](),
				L = date[_ + "Milliseconds"](),
				o = utc ? 0 : date.getTimezoneOffset(),
				flags = {
					d:    d,
					dd:   pad(d),
					ddd:  dF.i18n.dayNames[D],
					dddd: dF.i18n.dayNames[D + 7],
					m:    m + 1,
					mm:   pad(m + 1),
					mmm:  dF.i18n.monthNames[m],
					mmmm: dF.i18n.monthNames[m + 12],
					yy:   String(y).slice(2),
					yyyy: y,
					h:    H % 12 || 12,
					hh:   pad(H % 12 || 12),
					H:    H,
					HH:   pad(H),
					M:    M,
					MM:   pad(M),
					s:    s,
					ss:   pad(s),
					l:    pad(L, 3),
					L:    pad(L > 99 ? Math.round(L / 10) : L),
					t:    H < 12 ? "a"  : "p",
					tt:   H < 12 ? "am" : "pm",
					T:    H < 12 ? "A"  : "P",
					TT:   H < 12 ? "AM" : "PM",
					Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
				};

			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	}();

	// Some common format strings
	dateFormat.masks = {
		"default":      "ddd mmm dd yyyy HH:MM:ss",
		shortDate:      "m/d/yy",
		mediumDate:     "mmm d, yyyy",
		longDate:       "mmmm d, yyyy",
		fullDate:       "dddd, mmmm d, yyyy",
		shortTime:      "h:MM TT",
		mediumTime:     "h:MM:ss TT",
		longTime:       "h:MM:ss TT Z",
		isoDate:        "yyyy-mm-dd",
		isoTime:        "HH:MM:ss",
		isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
		isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};

	// Internationalization strings
	dateFormat.i18n = {
		dayNames: [
			"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
			"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
		],
		monthNames: [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
			"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
		]
	};

	// For convenience...
	Date.prototype.format = function (mask, utc) {
		return dateFormat(this, mask, utc);
	};
	
}

/*********************************************** 
     Begin VMM.LoadLib.js 
***********************************************/ 

/*	* LoadLib Based on LazyLoad by Ryan Grove
	* https://github.com/rgrove/lazyload/ 
	* Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
	* All rights reserved.

	* Permission is hereby granted, free of charge, to any person obtaining a copy of
	* this software and associated documentation files (the 'Software'), to deal in
	* the Software without restriction, including without limitation the rights to
	* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	* the Software, and to permit persons to whom the Software is furnished to do so,
	* subject to the following conditions:

	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.

================================================== */
window.loadedJS = [];


if(typeof VMM != 'undefined' && typeof VMM.LoadLib == 'undefined') {
	//VMM.LoadLib.js('http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js', onJQueryLoaded);
	//VMM.LoadLib.css('http://someurl.css', onCSSLoaded);
	
	
	
	VMM.LoadLib = (function (doc) {
		var env,
		head,
		pending = {},
		pollCount = 0,
		queue = {css: [], js: []},
		styleSheets = doc.styleSheets;
	
		var loaded_Array = [];
	
		function isLoaded(url) {
			var has_been_loaded = false;
			for(var i=0; i<loaded_Array.length; i++) {
				if (loaded_Array[i] == url) {
					has_been_loaded = true;
				}
			}
			if (!has_been_loaded) {
				loaded_Array.push(url);
			}
			return has_been_loaded;
		}

		function createNode(name, attrs) {
			var node = doc.createElement(name), attr;

			for (attr in attrs) {
				if (attrs.hasOwnProperty(attr)) {
					node.setAttribute(attr, attrs[attr]);
				}
			}

			return node;
		}

	  function finish(type) {
	    var p = pending[type],
	        callback,
	        urls;

	    if (p) {
	      callback = p.callback;
	      urls     = p.urls;
	      urls.shift();
	      pollCount = 0;
	      if (!urls.length) {
	        callback && callback.call(p.context, p.obj);
	        pending[type] = null;
	        queue[type].length && load(type);
	      }
	    }
	  }

	  function getEnv() {
	    var ua = navigator.userAgent;

	    env = {

	      async: doc.createElement('script').async === true
	    };

	    (env.webkit = /AppleWebKit\//.test(ua))
	      || (env.ie = /MSIE/.test(ua))
	      || (env.opera = /Opera/.test(ua))
	      || (env.gecko = /Gecko\//.test(ua))
	      || (env.unknown = true);
	  }

	  function load(type, urls, callback, obj, context) {
	    var _finish = function () { finish(type); },
	        isCSS   = type === 'css',
	        nodes   = [],
	        i, len, node, p, pendingUrls, url;

	    env || getEnv();

	    if (urls) {

	      urls = typeof urls === 'string' ? [urls] : urls.concat();

	      if (isCSS || env.async || env.gecko || env.opera) {

	        queue[type].push({
	          urls    : urls,
	          callback: callback,
	          obj     : obj,
	          context : context
	        });
	      } else {
	        for (i = 0, len = urls.length; i < len; ++i) {
	          queue[type].push({
	            urls    : [urls[i]],
	            callback: i === len - 1 ? callback : null,
	            obj     : obj,
	            context : context
	          });
	        }
	      }
	    }

	    if (pending[type] || !(p = pending[type] = queue[type].shift())) {
	      return;
	    }

	    head || (head = doc.head || doc.getElementsByTagName('head')[0]);
	    pendingUrls = p.urls;

	    for (i = 0, len = pendingUrls.length; i < len; ++i) {
	      url = pendingUrls[i];

	      if (isCSS) {
	          node = env.gecko ? createNode('style') : createNode('link', {
	            href: url,
	            rel : 'stylesheet'
	          });
	      } else {
	        node = createNode('script', {src: url});
	        node.async = false;
	      }

	      node.className = 'lazyload';
	      node.setAttribute('charset', 'utf-8');

	      if (env.ie && !isCSS) {
	        node.onreadystatechange = function () {
	          if (/loaded|complete/.test(node.readyState)) {
	            node.onreadystatechange = null;
	            _finish();
	          }
	        };
	      } else if (isCSS && (env.gecko || env.webkit)) {
	        if (env.webkit) {
	          p.urls[i] = node.href; 
	          pollWebKit();
	        } else {
	          node.innerHTML = '@import "' + url + '";';
	          pollGecko(node);
	        }
	      } else {
	        node.onload = node.onerror = _finish;
	      }

	      nodes.push(node);
	    }

	    for (i = 0, len = nodes.length; i < len; ++i) {
	      head.appendChild(nodes[i]);
	    }
	  }

	  function pollGecko(node) {
	    var hasRules;

	    try {

	      hasRules = !!node.sheet.cssRules;
	    } catch (ex) {
	      pollCount += 1;

	      if (pollCount < 200) {
	        setTimeout(function () { pollGecko(node); }, 50);
	      } else {

	        hasRules && finish('css');
	      }

	      return;
	    }

	    finish('css');
	  }

	  function pollWebKit() {
	    var css = pending.css, i;

	    if (css) {
	      i = styleSheets.length;

	      while (--i >= 0) {
	        if (styleSheets[i].href === css.urls[0]) {
	          finish('css');
	          break;
	        }
	      }

	      pollCount += 1;

	      if (css) {
	        if (pollCount < 200) {
	          setTimeout(pollWebKit, 50);
	        } else {

	          finish('css');
	        }
	      }
	    }
	  }

	  return {

		css: function (urls, callback, obj, context) {
			if (isLoaded(urls)) {
				return callback;
			} else {
				load('css', urls, callback, obj, context);
			}
		},

		js: function (urls, callback, obj, context) {
			if (isLoaded(urls)) {
				return callback;
			} else {
				load('js', urls, callback, obj, context);
			}
		}

	  };
	})(this.document);
}



/*********************************************** 
     Begin VMM.Library.js 
***********************************************/ 

/*	* LIBRARY ABSTRACTION
================================================== */
if(typeof VMM != 'undefined') {
	
	VMM.smoothScrollTo = function(elem, duration, ease) {
		if( typeof( jQuery ) != 'undefined' ){
			var _ease		= "easein",
				_duration	= 1000;
		
			if (duration != null) {
				if (duration < 1) {
					_duration = 1;
				} else {
					_duration = Math.round(duration);
				}
				
			}
			
			if (ease != null && ease != "") {
				_ease = ease;
			}
			
			if (jQuery(window).scrollTop() != VMM.Lib.offset(elem).top) {
				VMM.Lib.animate('html,body', _duration, _ease, {scrollTop: VMM.Lib.offset(elem).top})
			}
			
		}
		
	};
	
	VMM.attachElement = function(element, content) {
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).html(content);
		}
		
	};
	
	VMM.appendElement = function(element, content) {
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).append(content);
		}
		
	};
	
	VMM.getHTML = function(element) {
		var e;
		if( typeof( jQuery ) != 'undefined' ){
			e = jQuery(element).html();
			return e;
		}
		
	};
	
	VMM.getElement = function(element, p) {
		var e;
		if( typeof( jQuery ) != 'undefined' ){
			if (p) {
				e = jQuery(element).parent().get(0);
				
			} else {
				e = jQuery(element).get(0);
			}
			return e;
		}
		
	};
	
	VMM.bindEvent = function(element, the_handler, the_event_type, event_data) {
		var e;
		var _event_type = "click";
		var _event_data = {};
		
		if (the_event_type != null && the_event_type != "") {
			_event_type = the_event_type;
		}
		
		if (_event_data != null && _event_data != "") {
			_event_data = event_data;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).bind(_event_type, _event_data, the_handler);
			
			//return e;
		}
		
	};
	
	VMM.unbindEvent = function(element, the_handler, the_event_type) {
		var e;
		var _event_type = "click";
		var _event_data = {};
		
		if (the_event_type != null && the_event_type != "") {
			_event_type = the_event_type;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).unbind(_event_type, the_handler);
			
			//return e;
		}
		
	};
	
	VMM.fireEvent = function(element, the_event_type, the_data) {
		var e;
		var _event_type = "click";
		var _data = [];
		
		if (the_event_type != null && the_event_type != "") {
			_event_type = the_event_type;
		}
		if (the_data != null && the_data != "") {
			_data = the_data;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			jQuery(element).trigger(_event_type, _data);
			
			//return e;
		}
		
	};
	
	VMM.getJSON = function(url, data, callback) {
		if( typeof( jQuery ) != 'undefined' ){
			jQuery.ajaxSetup({
			     timeout: 3000
			});
			/* CHECK FOR IE
			================================================== */
			if ( VMM.Browser.browser == "Explorer" && parseInt(VMM.Browser.version, 10) >= 7 && window.XDomainRequest) {
				trace("IE JSON");
				var ie_url = url;
				if (ie_url.match('^http://')){
					return jQuery.getJSON(ie_url, data, callback);
				} else if (ie_url.match('^https://')) {
					ie_url = ie_url.replace("https://","http://");
					return jQuery.getJSON(ie_url, data, callback);
				} else {
					return jQuery.getJSON(url, data, callback);
				}
				
			} else {
				return jQuery.getJSON(url, data, callback);

			}
		}
	}
	
	VMM.parseJSON = function(the_json) {
		if( typeof( jQuery ) != 'undefined' ){
			return jQuery.parseJSON(the_json);
		}
	}
	
	// ADD ELEMENT AND RETURN IT
	VMM.appendAndGetElement = function(append_to_element, tag, cName, content) {
		var e,
			_tag		= "<div>",
			_class		= "",
			_content	= "",
			_id			= "";
		
		if (tag != null && tag != "") {
			_tag = tag;
		}
		
		if (cName != null && cName != "") {
			_class = cName;
		}
		
		if (content != null && content != "") {
			_content = content;
		}
		
		if( typeof( jQuery ) != 'undefined' ){
			
			e = jQuery(tag);
			
			e.addClass(_class);
			e.html(_content);
			
			jQuery(append_to_element).append(e);
			
		}
		
		return e;
		
	};
	
	VMM.Lib = {
		
		init: function() {
			return this;
		},
		
		hide: function(element, duration) {
			if (duration != null && duration != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).hide(duration);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).hide();
				}
			}
			
		},
		
		remove: function(element) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).remove();
			}
		},
		
		detach: function(element) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).detach();
			}
		},
		
		append: function(element, value) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).append(value);
			}
		},
		
		prepend: function(element, value) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).prepend(value);
			}
		},
		
		show: function(element, duration) {
			if (duration != null && duration != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).show(duration);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).show();
				}
			}
			
		},
		
		load: function(element, callback_function, event_data) {
			var _event_data = {elem:element}; // return element by default
			if (_event_data != null && _event_data != "") {
				_event_data = event_data;
			}
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).load(_event_data, callback_function);
			}
		},
		
		addClass: function(element, cName) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).addClass(cName);
			}
		},
		
		removeClass: function(element, cName) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).removeClass(cName);
			}
		},
		
		attr: function(element, aName, value) {
			if (value != null && value != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).attr(aName, value);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).attr(aName);
				}
			}
		},
		
		prop: function(element, aName, value) {
			if (typeof jQuery == 'undefined' || !/[1-9]\.[3-9].[1-9]/.test(jQuery.fn.jquery)) {
			    VMM.Lib.attribute(element, aName, value);
			} else {
				jQuery(element).prop(aName, value);
			}
		},
		
		attribute: function(element, aName, value) {
			
			if (value != null && value != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).attr(aName, value);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).attr(aName);
				}
			}
		},
		
		visible: function(element, show) {
			if (show != null) {
				if( typeof( jQuery ) != 'undefined' ){
					if (show) {
						jQuery(element).show(0);
					} else {
						jQuery(element).hide(0);
					}
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					if ( jQuery(element).is(':visible')){
						return true;
					} else {
						return false;
					}
				}
			}
		},
		
		css: function(element, prop, value) {

			if (value != null && value != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).css(prop, value);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).css(prop);
				}
			}
		},
		
		cssmultiple: function(element, propval) {

			if( typeof( jQuery ) != 'undefined' ){
				return jQuery(element).css(propval);
			}
		},
		
		offset: function(element) {
			var p;
			if( typeof( jQuery ) != 'undefined' ){
				p = jQuery(element).offset();
			}
			return p;
		},
		
		position: function(element) {
			var p;
			if( typeof( jQuery ) != 'undefined' ){
				p = jQuery(element).position();
			}
			return p;
		},
		
		width: function(element, s) {
			if (s != null && s != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).width(s);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).width();
				}
			}
		},
		
		height: function(element, s) {
			if (s != null && s != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).height(s);
				}
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					return jQuery(element).height();
				}
			}
		},
		
		toggleClass: function(element, cName) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).toggleClass(cName);
			}
		},
		
		each:function(element, return_function) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).each(return_function);
			}
			
		},
		
		html: function(element, str) {
			var e;
			if( typeof( jQuery ) != 'undefined' ){
				e = jQuery(element).html();
				return e;
			}
			
			if (str != null && str != "") {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).html(str);
				}
			} else {
				var e;
				if( typeof( jQuery ) != 'undefined' ){
					e = jQuery(element).html();
					return e;
				}
			}

		},
		
		find: function(element, selec) {
			if( typeof( jQuery ) != 'undefined' ){
				return jQuery(element).find(selec);
			}
		},
		
		stop: function(element) {
			if( typeof( jQuery ) != 'undefined' ){
				jQuery(element).stop();
			}
		},
		
		delay_animate: function(delay, element, duration, ease, att, callback_function) {
			if (VMM.Browser.device == "mobile" || VMM.Browser.device == "tablet") {
				var _tdd		= Math.round((duration/1500)*10)/10,
					__duration	= _tdd + 's';
					
				VMM.Lib.css(element, '-webkit-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, '-moz-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, '-o-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, '-ms-transition', 'all '+ __duration + ' ease');
				VMM.Lib.css(element, 'transition', 'all '+ __duration + ' ease');
				VMM.Lib.cssmultiple(element, _att);
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					jQuery(element).delay(delay).animate(att, {duration:duration, easing:ease} );
				}
			}
			
		},
		
		animate: function(element, duration, ease, att, que, callback_function) {
			
			var _ease		= "easein",
				_que		= false,
				_duration	= 1000,
				_att		= {};
			
			if (duration != null) {
				if (duration < 1) {
					_duration = 1;
				} else {
					_duration = Math.round(duration);
				}
				
			}
			
			if (ease != null && ease != "") {
				_ease = ease;
			}
			
			if (que != null && que != "") {
				_que = que;
			}
			
			
			if (att != null) {
				_att = att
			} else {
				_att = {opacity: 0}
			}
			
			
			if (VMM.Browser.device == "mobile" || VMM.Browser.device == "tablet") {
				
				var _tdd		= Math.round((_duration/1500)*10)/10,
					__duration	= _tdd + 's';
					
				_ease = " cubic-bezier(0.33, 0.66, 0.66, 1)";
				//_ease = " ease-in-out";
				for (x in _att) {
					if (Object.prototype.hasOwnProperty.call(_att, x)) {
						trace(x + " to " + _att[x]);
						VMM.Lib.css(element, '-webkit-transition',  x + ' ' + __duration + _ease);
						VMM.Lib.css(element, '-moz-transition', x + ' ' + __duration + _ease);
						VMM.Lib.css(element, '-o-transition', x + ' ' + __duration + _ease);
						VMM.Lib.css(element, '-ms-transition', x + ' ' + __duration + _ease);
						VMM.Lib.css(element, 'transition', x + ' ' + __duration + _ease);
					}
				}
				
				VMM.Lib.cssmultiple(element, _att);
				
			} else {
				if( typeof( jQuery ) != 'undefined' ){
					if (callback_function != null && callback_function != "") {
						jQuery(element).animate(_att, {queue:_que, duration:_duration, easing:_ease, complete:callback_function} );
					} else {
						jQuery(element).animate(_att, {queue:_que, duration:_duration, easing:_ease} );
					}
				}
			}
			
		}
		
	}
}

if( typeof( jQuery ) != 'undefined' ){
	
	/*	XDR AJAX EXTENTION FOR jQuery
		https://github.com/jaubourg/ajaxHooks/blob/master/src/ajax/xdr.js
	================================================== */
	(function( jQuery ) {
		if ( window.XDomainRequest ) {
			jQuery.ajaxTransport(function( s ) {
				if ( s.crossDomain && s.async ) {
					if ( s.timeout ) {
						s.xdrTimeout = s.timeout;
						delete s.timeout;
					}
					var xdr;
					return {
						send: function( _, complete ) {
							function callback( status, statusText, responses, responseHeaders ) {
								xdr.onload = xdr.onerror = xdr.ontimeout = jQuery.noop;
								xdr = undefined;
								complete( status, statusText, responses, responseHeaders );
							}
							xdr = new XDomainRequest();
							xdr.open( s.type, s.url );
							xdr.onload = function() {
								callback( 200, "OK", { text: xdr.responseText }, "Content-Type: " + xdr.contentType );
							};
							xdr.onerror = function() {
								callback( 404, "Not Found" );
							};
							if ( s.xdrTimeout ) {
								xdr.ontimeout = function() {
									callback( 0, "timeout" );
								};
								xdr.timeout = s.xdrTimeout;
							}
							xdr.send( ( s.hasContent && s.data ) || null );
						},
						abort: function() {
							if ( xdr ) {
								xdr.onerror = jQuery.noop();
								xdr.abort();
							}
						}
					};
				}
			});
		}
	})( jQuery );
	
	/*	jQuery Easing v1.3
		http://gsgd.co.uk/sandbox/jquery/easing/
	================================================== */
	jQuery.easing['jswing'] = jQuery.easing['swing'];

	jQuery.extend( jQuery.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
	});
}


/*********************************************** 
     Begin VMM.Util.js 
***********************************************/ 

/*	* Utilities and Useful Functions
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Util == 'undefined') {
	
	VMM.Util = ({
		
		init: function() {
			return this;
		},
		
		/*	* CORRECT PROTOCOL (DOES NOT WORK)
		================================================== */
		correctProtocol: function(url) {
			var loc = (window.parent.location.protocol).toString(),
				prefix = "",
				the_url = url.split("://", 2);
			
			if (loc.match("http")) {
				prefix = loc;
			} else {
				prefix = "https";
			}
			
			return prefix + "://" + the_url[1];
			
		},
		
		/*	* MERGE CONFIG
		================================================== */
		mergeConfig: function(config_main, config_to_merge) {
			var x;
			for (x in config_to_merge) {
				if (Object.prototype.hasOwnProperty.call(config_to_merge, x)) {
					config_main[x] = config_to_merge[x];
				}
			}
			return config_main;
		},
		
		/*	* GET OBJECT ATTRIBUTE BY INDEX
		================================================== */
		getObjectAttributeByIndex: function(obj, index) {
			if(typeof obj != 'undefined') {
				var i = 0;
				for (var attr in obj){
					if (index === i){
						return obj[attr];
					}
					i++;
				}
				return "";
			} else {
				return "";
			}
			
		},
		
		/*	* ORDINAL
		================================================== */
		ordinal: function(n) {
		    return ["th","st","nd","rd"][(!( ((n%10) >3) || (Math.floor(n%100/10)==1)) ) * (n%10)]; 
		},
		
		/*	* RANDOM BETWEEN
		================================================== */
		//VMM.Util.randomBetween(1, 3)
		randomBetween: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		},
		
		/*	* AVERAGE
			* http://jsfromhell.com/array/average
			* var x = VMM.Util.average([2, 3, 4]);
			* VMM.Util.average([2, 3, 4]).mean
		================================================== */
		average: function(a) {
		    var r = {mean: 0, variance: 0, deviation: 0}, t = a.length;
		    for(var m, s = 0, l = t; l--; s += a[l]);
		    for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
		    return r.deviation = Math.sqrt(r.variance = s / t), r;
		},
		
		/*	* CUSTOM SORT
		================================================== */
		customSort: function(a, b) {
			var a1= a, b1= b;
			if(a1== b1) return 0;
			return a1> b1? 1: -1;
		},
		
		/*	* Remove Duplicates from Array
		================================================== */
		deDupeArray: function(arr) {
			var i,
				len=arr.length,
				out=[],
				obj={};

			for (i=0;i<len;i++) {
				obj[arr[i]]=0;
			}
			for (i in obj) {
				out.push(i);
			}
			return out;
		},
		
		/*	* Given an int or decimal, turn that into string in $xxx,xxx.xx format.
		================================================== */
		number2money: function(n, symbol, padding) {
			var symbol = (symbol !== null) ? symbol : true; // add $
			var padding = (padding !== null) ? padding : false; //pad with .00
			var number = VMM.Math2.floatPrecision(n,2); // rounded correctly to two digits, if decimals passed
			var formatted = this.niceNumber(number);
			// no decimal and padding is enabled
			if (!formatted.split(/\./g)[1] && padding) formatted = formatted + ".00";
			// add money sign
			if (symbol) formatted = "$"+formatted;
			return formatted;
		},
		
		/*	* Returns a word count number
		================================================== */
		wordCount: function(s) {
			var fullStr = s + " ";
			var initial_whitespace_rExp = /^[^A-Za-z0-9\'\-]+/gi;
			var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
			var non_alphanumerics_rExp = /[^A-Za-z0-9\'\-]+/gi;
			var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
			var splitString = cleanedStr.split(" ");
			var word_count = splitString.length -1;
			if (fullStr.length <2) {
				word_count = 0;
			}
			return word_count;
		},
		
		ratio: {
			fit: function(w, h, ratio_w, ratio_h) {
				//VMM.Util.ratio.fit(w, h, ratio_w, ratio_h).width;
				var _fit = {width:0,height:0};
				// TRY WIDTH FIRST
				_fit.width = w;
				//_fit.height = Math.round((h / ratio_h) * ratio_w);
				_fit.height = Math.round((w / ratio_w) * ratio_h);
				if (_fit.height > h) {
					_fit.height = h;
					//_fit.width = Math.round((w / ratio_w) * ratio_h);
					_fit.width = Math.round((h / ratio_h) * ratio_w);
					
					if (_fit.width > w) {
						trace("FIT: DIDN'T FIT!!! ")
					}
				}
				
				return _fit;
				
			},
			r16_9: function(w,h) {
				//VMM.Util.ratio.r16_9(w, h) // Returns corresponding number
				if (w !== null && w !== "") {
					return Math.round((h / 16) * 9);
				} else if (h !== null && h !== "") {
					return Math.round((w / 9) * 16);
				}
			},
			r4_3: function(w,h) {
				if (w !== null && w !== "") {
					return Math.round((h / 4) * 3);
				} else if (h !== null && h !== "") {
					return Math.round((w / 3) * 4);
				}
			}
		},
		
		doubledigit: function(n) {
			return (n < 10 ? '0' : '') + n;
		},
		
		/*	* Returns a truncated segement of a long string of between min and max words. If possible, ends on a period (otherwise goes to max).
		================================================== */
		truncateWords: function(s, min, max) {
			
			if (!min) min = 30;
			if (!max) max = min;
			
			var initial_whitespace_rExp = /^[^A-Za-z0-9\'\-]+/gi;
			var left_trimmedStr = s.replace(initial_whitespace_rExp, "");
			var words = left_trimmedStr.split(" ");
			
			var result = [];
			
			min = Math.min(words.length, min);
			max = Math.min(words.length, max);
			
			for (var i = 0; i<min; i++) {
				result.push(words[i]);
			}		
			
			for (var j = min; i<max; i++) {
				var word = words[i];
				
				result.push(word);
				
				if (word.charAt(word.length-1) == '.') {
					break;
				}
			}		
			
			return (result.join(' '));
		},
		
		/*	* Turns plain text links into real links
		================================================== */
		linkify: function(text,targets,is_touch) {
			
			// http://, https://, ftp://
			var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

			// www. sans http:// or https://
			var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

			// Email addresses
			var emailAddressPattern = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;
			

			return text
				.replace(urlPattern, "<a target='_blank' href='$&' onclick='void(0)'>$&</a>")
				.replace(pseudoUrlPattern, "$1<a target='_blank' onclick='void(0)' href='http://$2'>$2</a>")
				.replace(emailAddressPattern, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>");
		},
		
		linkify_with_twitter: function(text,targets,is_touch) {
			
			// http://, https://, ftp://
			var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
			var url_pattern = /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/img;
			var url_replace = '$1$4$7$10$13<a href="$2$5$8$11$14" class="hyphenate">$2$5$8$11$14</a>$3$6$9$12';
			
			// www. sans http:// or https://
			var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
			function replaceURLWithHTMLLinks(text) {
			    var exp = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/ig;
			    return text.replace(exp, "<a href='$1' target='_blank'>$3</a>");
			}
			// Email addresses
			var emailAddressPattern = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;
			
			//var twitterHandlePattern = /(@([\w]+))/g;
			var twitterHandlePattern = /\B@([\w-]+)/gm;
			var twitterSearchPattern = /(#([\w]+))/g;

			return text
				//.replace(urlPattern, "<a target='_blank' href='$&' onclick='void(0)'>$&</a>")
				.replace(url_pattern, url_replace)
				.replace(pseudoUrlPattern, "$1<a target='_blank' class='hyphenate' onclick='void(0)' href='http://$2'>$2</a>")
				.replace(emailAddressPattern, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>")
				.replace(twitterHandlePattern, "<a href='http://twitter.com/$1' target='_blank' onclick='void(0)'>@$1</a>")
				.replace(twitterSearchPattern, "<a href='http://twitter.com/#search?q=%23$2' target='_blank' 'void(0)'>$1</a>");
		},
		
		linkify_wikipedia: function(text) {
			
			var urlPattern = /<i[^>]*>(.*?)<\/i>/gim;
			return text
				.replace(urlPattern, "<a target='_blank' href='http://en.wikipedia.org/wiki/$&' onclick='void(0)'>$&</a>")
				.replace(/<i\b[^>]*>/gim, "")
				.replace(/<\/i>/gim, "")
				.replace(/<b\b[^>]*>/gim, "")
				.replace(/<\/b>/gim, "");
		},
		
		/*	* Turns plain text links into real links
		================================================== */
		// VMM.Util.unlinkify();
		unlinkify: function(text) {
			if(!text) return text;
			text = text.replace(/<a\b[^>]*>/i,"");
			text = text.replace(/<\/a>/i, "");
			return text;
		},
		
		untagify: function(text) {
			if (!text) {
				return text;
			}
			text = text.replace(/<\s*\w.*?>/g,"");
			return text;
		},
		
		/*	* TK
		================================================== */
		nl2br: function(text) {
			return text.replace(/(\r\n|[\r\n]|\\n|\\r)/g,"<br/>");
		},
		
		/*	* Generate a Unique ID
		================================================== */
		// VMM.Util.unique_ID(size);
		unique_ID: function(size) {
			
			var getRandomNumber = function(range) {
				return Math.floor(Math.random() * range);
			};

			var getRandomChar = function() {
				var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
				return chars.substr( getRandomNumber(62), 1 );
			};

			var randomID = function(size) {
				var str = "";
				for(var i = 0; i < size; i++) {
					str += getRandomChar();
				}
				return str;
			};
			
			return randomID(size);
		},
		/*	* Tells you if a number is even or not
		================================================== */
		// VMM.Util.isEven(n)
		isEven: function(n){
			return (n%2 === 0) ? true : false;
		},
		/*	* Get URL Variables
		================================================== */
		//	var somestring = VMM.Util.getUrlVars(str_url)["varname"];
		getUrlVars: function(string) {
			
			var str = string.toString();
			
			if (str.match('&#038;')) { 
				str = str.replace("&#038;", "&");
			} else if (str.match('&#38;')) {
				str = str.replace("&#38;", "&");
			} else if (str.match('&amp;')) {
				str = str.replace("&amp;", "&");
			}
			
			var vars = [], hash;
			var hashes = str.slice(str.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			
			
			return vars;
		},

		/*	* Cleans up strings to become real HTML
		================================================== */
		toHTML: function(text) {
			
			text = this.nl2br(text);
			text = this.linkify(text);
			
			return text.replace(/\s\s/g,"&nbsp;&nbsp;");
		},
		
		/*	* Returns text strings as CamelCase
		================================================== */
		toCamelCase: function(s,forceLowerCase) {
			
			if(forceLowerCase !== false) forceLowerCase = true;
			
			var sps = ((forceLowerCase) ? s.toLowerCase() : s).split(" ");
			
			for(var i=0; i<sps.length; i++) {
				
				sps[i] = sps[i].substr(0,1).toUpperCase() + sps[i].substr(1);
			}
			
			return sps.join(" ");
		},
		
		/*	* Replaces dumb quote marks with smart ones
		================================================== */
		properQuotes: function(str) {
			return str.replace(/\"([^\"]*)\"/gi,"&#8220;$1&#8221;");
		},
		/*	* Add Commas to numbers
		================================================== */
		niceNumber: function(nStr){
			nStr += '';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		},
		/*	* Transform text to Title Case
		================================================== */
		toTitleCase: function(t){
			if ( VMM.Browser.browser == "Explorer" && parseInt(VMM.Browser.version, 10) >= 7) {
				return t.replace("_", "%20");
			} else {
				var __TitleCase = {
					__smallWords: ['a', 'an', 'and', 'as', 'at', 'but','by', 'en', 'for', 'if', 'in', 'of', 'on', 'or','the', 'to', 'v[.]?', 'via', 'vs[.]?'],

					init: function() {
						this.__smallRE = this.__smallWords.join('|');
						this.__lowerCaseWordsRE = new RegExp('\\b(' + this.__smallRE + ')\\b', 'gi');
						this.__firstWordRE = new RegExp('^([^a-zA-Z0-9 \\r\\n\\t]*)(' + this.__smallRE + ')\\b', 'gi');
						this.__lastWordRE = new RegExp('\\b(' + this.__smallRE + ')([^a-zA-Z0-9 \\r\\n\\t]*)$', 'gi');
					},

					toTitleCase: function(string) {
						var line = '';

						var split = string.split(/([:.;?!][ ]|(?:[ ]|^)["“])/);

						for (var i = 0; i < split.length; ++i) {
							var s = split[i];

							s = s.replace(/\b([a-zA-Z][a-z.'’]*)\b/g,this.__titleCaseDottedWordReplacer);

			 				// lowercase the list of small words
							s = s.replace(this.__lowerCaseWordsRE, this.__lowerReplacer);

							// if the first word in the title is a small word then capitalize it
							s = s.replace(this.__firstWordRE, this.__firstToUpperCase);

							// if the last word in the title is a small word, then capitalize it
							s = s.replace(this.__lastWordRE, this.__firstToUpperCase);

							line += s;
						}

						// special cases
						line = line.replace(/ V(s?)\. /g, ' v$1. ');
						line = line.replace(/(['’])S\b/g, '$1s');
						line = line.replace(/\b(AT&T|Q&A)\b/ig, this.__upperReplacer);

						return line;
					},

					__titleCaseDottedWordReplacer: function (w) {
						return (w.match(/[a-zA-Z][.][a-zA-Z]/)) ? w : __TitleCase.__firstToUpperCase(w);
					},

					__lowerReplacer: function (w) { return w.toLowerCase() },

					__upperReplacer: function (w) { return w.toUpperCase() },

					__firstToUpperCase: function (w) {
						var split = w.split(/(^[^a-zA-Z0-9]*[a-zA-Z0-9])(.*)$/);
						if (split[1]) {
							split[1] = split[1].toUpperCase();
						}
					
						return split.join('');
					
					
					}
				};

				__TitleCase.init();
			
				t = t.replace(/_/g," ");
				t = __TitleCase.toTitleCase(t);
			
				return t;
				
			}
			
		}
		
	}).init();
}

/*********************************************** 
     Begin VMM.js 
***********************************************/ 

/**
	* VéritéCo JS Core
	* Designed and built by Zach Wise at VéritéCo zach@verite.co

	* This Source Code Form is subject to the terms of the Mozilla Public
	* License, v. 2.0. If a copy of the MPL was not distributed with this
	* file, You can obtain one at http://mozilla.org/MPL/2.0/.

*/  


/*	Simple JavaScript Inheritance
	By John Resig http://ejohn.org/
	MIT Licensed.
================================================== */
(function() {
	var initializing = false,
	fnTest = /xyz/.test(function() {
		xyz;
		}) ? /\b_super\b/: /.*/;
		// The base Class implementation (does nothing)
	this.Class = function() {};

    // Create a new Class that inherits from this class
	Class.extend = function(prop) {
		var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

        // Copy the properties over onto the new prototype
		for (var name in prop) {
            // Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == "function" &&
			typeof _super[name] == "function" && fnTest.test(prop[name]) ?
			(function(name, fn) {
				return function() {
					var tmp = this._super;

					// Add a new ._super() method that is the same method
					// but on the super-class
					this._super = _super[name];

					// The method only need to be bound temporarily, so we
					// remove it when we're done executing
					var ret = fn.apply(this, arguments);
					this._super = tmp;

					return ret;
				};
			})(name, prop[name]) :
			prop[name];
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!initializing && this.init)
			this.init.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = arguments.callee;

		return Class;
    };
})();

/*	Access to the Global Object
	access the global object without hard-coding the identifier window
================================================== */
var global = (function () {
   return this || (1,eval)('this');
}());

/* VMM
================================================== */
if (typeof VMM == 'undefined') {
	
	/* Main Scope Container
	================================================== */
	//var VMM = {};
	var VMM = Class.extend({});
	
	/* Debug
	================================================== */
	VMM.debug = true;
	
	/* Master Config
	================================================== */
	
	VMM.master_config = ({
		
		init: function() {
			return this;
		},
		
		sizes: {
			api: {
				width:			0,
				height:			0
			}
		},
		
		vp:				"Pellentesque nibh felis, eleifend id, commodo in, interdum vitae, leo",
		
		api_keys_master: {
			flickr:		"RAIvxHY4hE/Elm5cieh4X5ptMyDpj7MYIxziGxi0WGCcy1s+yr7rKQ==",
			google:		"jwNGnYw4hE9lmAez4ll0QD+jo6SKBJFknkopLS4FrSAuGfIwyj57AusuR0s8dAo=",
			twitter:	""
		},
		
		timers: {
			api:			7000
		},
		
		api:	{
			pushques:		[]
			
		},
		
		twitter: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		flickr: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		youtube: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		vimeo: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		googlemaps: {
			active:			false,
			map_active:		false,
			places_active:	false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		googledocs: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		googleplus: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		},
		
		wikipedia: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[],
			tries:			0
		},
		
		soundcloud: {
			active:			false,
			array:			[],
			api_loaded:		false,
			que:			[]
		}
		
	}).init();
	
	//VMM.createElement(tag, value, cName, attrs, styles);
	VMM.createElement = function(tag, value, cName, attrs, styles) {
		
		var ce = "";
		
		if (tag != null && tag != "") {
			
			// TAG
			ce += "<" + tag;
			if (cName != null && cName != "") {
				ce += " class='" + cName + "'";
			};
			
			if (attrs != null && attrs != "") {
				ce += " " + attrs;
			};
			
			if (styles != null && styles != "") {
				ce += " style='" + styles + "'";
			};
			
			ce += ">";
			
			if (value != null && value != "") {
				ce += value;
			}
			
			// CLOSE TAG
			ce = ce + "</" + tag + ">";
		}
		
		return ce;
		
    };

	VMM.createMediaElement = function(media, caption, credit) {
		
		var ce = "";
		
		var _valid = false;
		
		ce += "<div class='media'>";
		
		if (media != null && media != "") {
			
			valid = true;
			
			ce += "<img src='" + media + "'>";
			
			// CREDIT
			if (credit != null && credit != "") {
				ce += VMM.createElement("div", credit, "credit");
			}
			
			// CAPTION
			if (caption != null && caption != "") {
				ce += VMM.createElement("div", caption, "caption");
			}

		}
		
		ce += "</div>";
		
		return ce;
		
    };

	// Hide URL Bar for iOS and Android by Scott Jehl
	// https://gist.github.com/1183357

	VMM.hideUrlBar = function () {
		var win = window,
			doc = win.document;

		// If there's a hash, or addEventListener is undefined, stop here
		if( !location.hash || !win.addEventListener ){

			//scroll to 1
			window.scrollTo( 0, 1 );
			var scrollTop = 1,

			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );

			win.addEventListener( "load", function(){
				setTimeout(function(){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}, 0);
			}, false );
		}
	};
	

}

/* Trace (console.log)
================================================== */
function trace( msg ) {
	if (VMM.debug) {
		if (window.console) {
			console.log(msg);
		} else if ( typeof( jsTrace ) != 'undefined' ) {
			jsTrace.send( msg );
		} else {
			//alert(msg);
		}
	}
}

/*	Array Remove - By John Resig (MIT Licensed)
	http://ejohn.org/blog/javascript-array-remove/
================================================== */
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
}

/* Extending Date to include Week
================================================== */
Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

/* Extending Date to include Day of Year
================================================== */
Date.prototype.getDayOfYear = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((this - onejan) / 86400000);
}

/* A MORE SPECIFIC TYPEOF();
//	http://rolandog.com/archives/2007/01/18/typeof-a-more-specific-typeof/
================================================== */
// type.of()
var is={
	Null:function(a){return a===null;},
	Undefined:function(a){return a===undefined;},
	nt:function(a){return(a===null||a===undefined);},
	Function:function(a){return(typeof(a)==="function")?a.constructor.toString().match(/Function/)!==null:false;},
	String:function(a){return(typeof(a)==="string")?true:(typeof(a)==="object")?a.constructor.toString().match(/string/i)!==null:false;},
	Array:function(a){return(typeof(a)==="object")?a.constructor.toString().match(/array/i)!==null||a.length!==undefined:false;},
	Boolean:function(a){return(typeof(a)==="boolean")?true:(typeof(a)==="object")?a.constructor.toString().match(/boolean/i)!==null:false;},
	Date:function(a){return(typeof(a)==="date")?true:(typeof(a)==="object")?a.constructor.toString().match(/date/i)!==null:false;},
	HTML:function(a){return(typeof(a)==="object")?a.constructor.toString().match(/html/i)!==null:false;},
	Number:function(a){return(typeof(a)==="number")?true:(typeof(a)==="object")?a.constructor.toString().match(/Number/)!==null:false;},
	Object:function(a){return(typeof(a)==="object")?a.constructor.toString().match(/object/i)!==null:false;},
	RegExp:function(a){return(typeof(a)==="function")?a.constructor.toString().match(/regexp/i)!==null:false;}
};
var type={
	of:function(a){
		for(var i in is){
			if(is[i](a)){
				return i.toLowerCase();
			}
		}
	}
};





/*********************************************** 
     Begin VMM.Core.js 
***********************************************/ 

/* VeriteCo Core
================================================== */

/*	* CodeKit Import
	* http://incident57.com/codekit/
================================================== */
// @codekit-prepend "VMM.js";
// @codekit-prepend "VMM.Library.js";
// @codekit-prepend "VMM.Browser.js";
// @codekit-prepend "VMM.FileExtention.js";
// @codekit-prepend "VMM.Date.js";
// @codekit-prepend "VMM.Util.js";
// @codekit-prepend "VMM.LoadLib.js";
// @codekit-prepend "VMM.Language.js";



/*********************************************** 
     Begin VMM.Language.js 
***********************************************/ 

/* DEFAULT LANGUAGE 
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.Language == 'undefined') {
	VMM.Language = {
		lang: "en",
		api: {
			wikipedia: "en"
		},
		date: {
			month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
			day: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			day_abbr: ["Sun.","Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' h:MM TT",
			full_long_small_date: "h:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Loading Timeline... ",
			return_to_title: "Return to Title",
			expand_timeline: "Expand Timeline",
			contract_timeline: "Contract Timeline",
			wikipedia: "From Wikipedia, the free encyclopedia",
			loading_content: "Loading Content",
			loading: "Loading"
		}
	}
};

/*********************************************** 
     Begin VMM.ExternalAPI.js 
***********************************************/ 

/* External API
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.ExternalAPI == 'undefined') {
	
	VMM.ExternalAPI = ({
		
		keys: {
			google:				"",
			flickr:				"",
			twitter:			""
		},
		
		keys_master: {
			vp:			"Pellentesque nibh felis, eleifend id, commodo in, interdum vitae, leo",
			flickr:		"RAIvxHY4hE/Elm5cieh4X5ptMyDpj7MYIxziGxi0WGCcy1s+yr7rKQ==",
			google:		"jwNGnYw4hE9lmAez4ll0QD+jo6SKBJFknkopLS4FrSAuGfIwyj57AusuR0s8dAo=",
			twitter:	""
		},
		
		init: function() {
			return this;
		},
		
		setKeys: function(d) {
			VMM.ExternalAPI.keys	= d;
		},
		
		pushQues: function() {
			
			if (VMM.master_config.googlemaps.active) {
				VMM.ExternalAPI.googlemaps.pushQue();
			}
			if (VMM.master_config.youtube.active) {
				VMM.ExternalAPI.youtube.pushQue();
			}
			if (VMM.master_config.soundcloud.active) {
				VMM.ExternalAPI.soundcloud.pushQue();
			}
			if (VMM.master_config.googledocs.active) {
				VMM.ExternalAPI.googledocs.pushQue();
			}
			if (VMM.master_config.googleplus.active) {
				VMM.ExternalAPI.googleplus.pushQue();
			}
			if (VMM.master_config.wikipedia.active) {
				VMM.ExternalAPI.wikipedia.pushQue();
			}
			if (VMM.master_config.vimeo.active) {
				VMM.ExternalAPI.vimeo.pushQue();
			}
			if (VMM.master_config.twitter.active) {
				VMM.ExternalAPI.twitter.pushQue();
			}
			if (VMM.master_config.flickr.active) {
				VMM.ExternalAPI.flickr.pushQue();
			}
		},
		
		twitter: {
			tweetArray: [],
			
			get: function(m) {
				var tweet = {mid: m.id, id: m.uid};
				VMM.master_config.twitter.que.push(tweet);
				VMM.master_config.twitter.active = true;
				//VMM.master_config.api.pushques.push(VMM.ExternalAPI.twitter.pushQue);
				
			},
			
			create: function(tweet, callback) {
				
				var id				= tweet.mid.toString(),
					error_obj		= { twitterid: tweet.mid },
					the_url			= "http://api.twitter.com/1/statuses/show.json?id=" + tweet.mid + "&include_entities=true&callback=?",
					twitter_timeout	= setTimeout(VMM.ExternalAPI.twitter.errorTimeOut, VMM.master_config.timers.api, tweet),
					callback_timeout= setTimeout(callback, VMM.master_config.timers.api, tweet);
				
				VMM.getJSON(the_url, function(d) {
					var id		= d.id_str,
						twit	= "<blockquote><p>",
						td		= VMM.Util.linkify_with_twitter(d.text, "_blank");
					
					//	TWEET CONTENT	
					twit += td;
					twit += "</p></blockquote>";
					
					//	TWEET MEDIA
					if (typeof d.entities.media != 'undefined') {
						if (d.entities.media[0].type == "photo") {
							//twit += "<img src=' " + d.entities.media[0].media_url + "'  alt=''>"
						}
					}
					
					//	TWEET AUTHOR
					twit += "<div class='vcard author'>";
					twit += "<a class='screen-name url' href='https://twitter.com/" + d.user.screen_name + "' data-screen-name='" + d.user.screen_name + "' target='_blank'>";
					twit += "<span class='avatar'><img src=' " + d.user.profile_image_url + "'  alt=''></span>";
					twit += "<span class='fn'>" + d.user.name + "</span>";
					twit += "<span class='nickname'>@" + d.user.screen_name + "<span class='thumbnail-inline'></span></span>";
					twit += "</a>";
					twit += "</div>";
				
					
				
					VMM.attachElement("#"+tweet.id.toString(), twit );
					VMM.attachElement("#text_thumb_"+tweet.id.toString(), d.text );
					
				})
				.error(function(jqXHR, textStatus, errorThrown) {
					trace("TWITTER error");
					trace("TWITTER ERROR: " + textStatus + " " + jqXHR.responseText);
					VMM.attachElement("#"+tweet.id, VMM.MediaElement.loadingmessage("ERROR LOADING TWEET " + tweet.mid) );
				})
				.success(function(d) {
					clearTimeout(twitter_timeout);
					clearTimeout(callback_timeout);
					callback();
				});
				
			},
			
			errorTimeOut: function(tweet) {
				trace("TWITTER JSON ERROR TIMEOUT " + tweet.mid);
				VMM.attachElement("#"+tweet.id.toString(), VMM.MediaElement.loadingmessage("Still waiting on Twitter: " + tweet.mid) );
				// CHECK RATE STATUS
				VMM.getJSON("http://api.twitter.com/1/account/rate_limit_status.json", function(d) {
					trace("REMAINING TWITTER API CALLS " + d.remaining_hits);
					trace("TWITTER RATE LIMIT WILL RESET AT " + d.reset_time);
					var mes = "";
					if (d.remaining_hits == 0) {
						mes		= 	"<p>You've reached the maximum number of tweets you can load in an hour.</p>";
						mes 	+=	"<p>You can view tweets again starting at: <br/>" + d.reset_time + "</p>";
					} else {
						mes		=	"<p>Still waiting on Twitter. " + tweet.mid + "</p>";
						//mes 	= 	"<p>Tweet " + id + " was not found.</p>";
					}
					VMM.attachElement("#"+tweet.id.toString(), VMM.MediaElement.loadingmessage(mes) );
				});
				
			},
			
			pushQue: function() {
				if (VMM.master_config.twitter.que.length > 0) {
					VMM.ExternalAPI.twitter.create(VMM.master_config.twitter.que[0], VMM.ExternalAPI.twitter.pushQue);
					VMM.master_config.twitter.que.remove(0);
				}
			},
			
			
			
			getHTML: function(id) {
				//var the_url = document.location.protocol + "//api.twitter.com/1/statuses/oembed.json?id=" + id+ "&callback=?";
				var the_url = "http://api.twitter.com/1/statuses/oembed.json?id=" + id+ "&callback=?";
				VMM.getJSON(the_url, VMM.ExternalAPI.twitter.onJSONLoaded);
			},
			
			onJSONLoaded: function(d) {
				trace("TWITTER JSON LOADED");
				var id = d.id;
				VMM.attachElement("#"+id, VMM.Util.linkify_with_twitter(d.html) );
			},
			
			parseTwitterDate: function(d) {
				var date = new Date(Date.parse(d));
				/*
				var t = d.replace(/(\d{1,2}[:]\d{2}[:]\d{2}) (.*)/, '$2 $1');
				t = t.replace(/(\+\S+) (.*)/, '$2 $1');
				var date = new Date(Date.parse(t)).toLocaleDateString();
				var time = new Date(Date.parse(t)).toLocaleTimeString();
				*/
				return date;
			},
			
			prettyParseTwitterDate: function(d) {
				var date = new Date(Date.parse(d));
				return VMM.Date.prettyDate(date, true);
			},
			
			getTweets: function(tweets) {
				var tweetArray = [];
				var number_of_tweets = tweets.length;
				
				for(var i = 0; i < tweets.length; i++) {
					
					var twitter_id = "";
					
					
					/* FIND THE TWITTER ID
					================================================== */
					if (tweets[i].tweet.match("status\/")) {
						twitter_id = tweets[i].tweet.split("status\/")[1];
					} else if (tweets[i].tweet.match("statuses\/")) {
						twitter_id = tweets[i].tweet.split("statuses\/")[1];
					} else {
						twitter_id = "";
					}
					
					/* FETCH THE DATA
					================================================== */
					var the_url = "http://api.twitter.com/1/statuses/show.json?id=" + twitter_id + "&include_entities=true&callback=?";
					VMM.getJSON(the_url, function(d) {
						
						var tweet = {}
						/* FORMAT RESPONSE
						================================================== */
						var twit = "<div class='twitter'><blockquote><p>";
						var td = VMM.Util.linkify_with_twitter(d.text, "_blank");
						twit += td;
						twit += "</p>";
						
						twit += "— " + d.user.name + " (<a href='https://twitter.com/" + d.user.screen_name + "'>@" + d.user.screen_name + "</a>) <a href='https://twitter.com/" + d.user.screen_name + "/status/" + d.id + "'>" + VMM.ExternalAPI.twitter.prettyParseTwitterDate(d.created_at) + " </a></blockquote></div>";
						
						tweet.content = twit;
						tweet.raw = d;
						
						tweetArray.push(tweet);
						
						
						/* CHECK IF THATS ALL OF THEM
						================================================== */
						if (tweetArray.length == number_of_tweets) {
							var the_tweets = {tweetdata: tweetArray}
							VMM.fireEvent(global, "TWEETSLOADED", the_tweets);
						}
					})
					.success(function() { trace("second success"); })
					.error(function() { trace("error"); })
					.complete(function() { trace("complete"); });
					
				}
					
				
			},
			
			getTweetSearch: function(tweets, number_of_tweets) {
				var _number_of_tweets = 40;
				if (number_of_tweets != null && number_of_tweets != "") {
					_number_of_tweets = number_of_tweets;
				}
				
				var the_url = "http://search.twitter.com/search.json?q=" + tweets + "&rpp=" + _number_of_tweets + "&include_entities=true&result_type=mixed";
				var tweetArray = [];
				VMM.getJSON(the_url, function(d) {
					
					/* FORMAT RESPONSE
					================================================== */
					for(var i = 0; i < d.results.length; i++) {
						var tweet = {}
						var twit = "<div class='twitter'><blockquote><p>";
						var td = VMM.Util.linkify_with_twitter(d.results[i].text, "_blank");
						twit += td;
						twit += "</p>";
						twit += "— " + d.results[i].from_user_name + " (<a href='https://twitter.com/" + d.results[i].from_user + "'>@" + d.results[i].from_user + "</a>) <a href='https://twitter.com/" + d.results[i].from_user + "/status/" + d.id + "'>" + VMM.ExternalAPI.twitter.prettyParseTwitterDate(d.results[i].created_at) + " </a></blockquote></div>";
						tweet.content = twit;
						tweet.raw = d.results[i];
						tweetArray.push(tweet);
					}
					var the_tweets = {tweetdata: tweetArray}
					VMM.fireEvent(global, "TWEETSLOADED", the_tweets);
				});
				
			},
			
			prettyHTML: function(id, secondary) {
				var id = id.toString();
				var error_obj = {
					twitterid: id
				};
				var the_url = "http://api.twitter.com/1/statuses/show.json?id=" + id + "&include_entities=true&callback=?";
				var twitter_timeout = setTimeout(VMM.ExternalAPI.twitter.errorTimeOut, VMM.master_config.timers.api, id);
				
				VMM.getJSON(the_url, VMM.ExternalAPI.twitter.formatJSON)
					.error(function(jqXHR, textStatus, errorThrown) {
						trace("TWITTER error");
						trace("TWITTER ERROR: " + textStatus + " " + jqXHR.responseText);
						VMM.attachElement("#twitter_"+id, "<p>ERROR LOADING TWEET " + id + "</p>" );
					})
					.success(function(d) {
						clearTimeout(twitter_timeout);
						if (secondary) {
							VMM.ExternalAPI.twitter.secondaryMedia(d);
						}
					});
			},
			
			
			
			formatJSON: function(d) {
				var id = d.id_str;
				
				var twit = "<blockquote><p>";
				var td = VMM.Util.linkify_with_twitter(d.text, "_blank");
				//td = td.replace(/(@([\w]+))/g,"<a href='http://twitter.com/$2' target='_blank'>$1</a>");
				//td = td.replace(/(#([\w]+))/g,"<a href='http://twitter.com/#search?q=%23$2' target='_blank'>$1</a>");
				twit += td;
				twit += "</p></blockquote>";
				//twit += " <a href='https://twitter.com/" + d.user.screen_name + "/status/" + d.id_str + "' target='_blank' alt='link to original tweet' title='link to original tweet'>" + "<span class='created-at'></span>" + " </a>";
				
				twit += "<div class='vcard author'>";
				twit += "<a class='screen-name url' href='https://twitter.com/" + d.user.screen_name + "' data-screen-name='" + d.user.screen_name + "' target='_blank'>";
				twit += "<span class='avatar'><img src=' " + d.user.profile_image_url + "'  alt=''></span>";
				twit += "<span class='fn'>" + d.user.name + "</span>";
				twit += "<span class='nickname'>@" + d.user.screen_name + "<span class='thumbnail-inline'></span></span>";
				twit += "</a>";
				twit += "</div>";
				
				if (typeof d.entities.media != 'undefined') {
					if (d.entities.media[0].type == "photo") {
						twit += "<img src=' " + d.entities.media[0].media_url + "'  alt=''>"
					}
				}
				
				VMM.attachElement("#twitter_"+id.toString(), twit );
				VMM.attachElement("#text_thumb_"+id.toString(), d.text );
				
			}
			
			
		},
		
		googlemaps: {
			
			maptype: "toner",
			
			setMapType: function(d) {
				if (d != "") {
					VMM.ExternalAPI.googlemaps.maptype = d;
				}
			},
			
			get: function(m) {
				var timer, 
					api_key,
					map_vars,
					map_url,
					map;
				
				map_vars = VMM.Util.getUrlVars(m.id);
				
				if (VMM.ExternalAPI.keys.google != "") {
					api_key = VMM.ExternalAPI.keys.google;
				} else {
					api_key = Aes.Ctr.decrypt(VMM.ExternalAPI.keys_master.google, VMM.ExternalAPI.keys_master.vp, 256);
				}
				
				map_url = "http://maps.googleapis.com/maps/api/js?key=" + api_key + "&libraries=places&sensor=false&callback=VMM.ExternalAPI.googlemaps.onMapAPIReady";
				map = { url: m.id, vars: map_vars, id: m.uid };
				
				if (VMM.master_config.googlemaps.active) {
					VMM.master_config.googlemaps.que.push(map);
				} else {
					VMM.master_config.googlemaps.que.push(map);
					
					if (VMM.master_config.googlemaps.api_loaded) {
						
					} else {
						VMM.LoadLib.js(map_url, function() {
							trace("Google Maps API Library Loaded");
						});
					}
				}
			},
			
			create: function(m) {
				var map_attribution	= "",
					layer,
					map,
					map_options,
					unique_map_id	= m.id.toString() + "_gmap",
					map_attribution_html	= "",
					location		= new google.maps.LatLng(41.875696,-87.624207),
					latlong,
					zoom			= 11,
					has_location	= false,
					has_zoom		= false,
					map_bounds;
					
				
				function mapProvider(name) {
					if (name in VMM.ExternalAPI.googlemaps.map_providers) {
						map_attribution = VMM.ExternalAPI.googlemaps.map_attribution[VMM.ExternalAPI.googlemaps.map_providers[name].attribution];
						return VMM.ExternalAPI.googlemaps.map_providers[name];
					} else {
						if (VMM.ExternalAPI.googlemaps.defaultType(name)) {
							trace("GOOGLE MAP DEFAULT TYPE");
							return google.maps.MapTypeId[name.toUpperCase()];
						} else {
							trace("Not a maptype: " + name );
						}
					}
				}
				
				google.maps.VeriteMapType = function(name) {
					if (VMM.ExternalAPI.googlemaps.defaultType(name)) {
						return google.maps.MapTypeId[name.toUpperCase()];
					} else {
						var provider = 			mapProvider(name);
						return google.maps.ImageMapType.call(this, {
							"getTileUrl": function(coord, zoom) {
								var index = 	(zoom + coord.x + coord.y) % VMM.ExternalAPI.googlemaps.map_subdomains.length;
								return [
									provider.url
										.replace("{S}", VMM.ExternalAPI.googlemaps.map_subdomains[index])
										.replace("{Z}", zoom)
										.replace("{X}", coord.x)
										.replace("{Y}", coord.y)
										.replace("{z}", zoom)
										.replace("{x}", coord.x)
										.replace("{y}", coord.y)
								];
							},
							"tileSize": 		new google.maps.Size(256, 256),
							"name":				name,
							"minZoom":			provider.minZoom,
							"maxZoom":			provider.maxZoom
						});
					}
				};
				
				google.maps.VeriteMapType.prototype = new google.maps.ImageMapType("_");
				
				/* Make the Map
				================================================== */
				
				if (VMM.ExternalAPI.googlemaps.maptype != "") {
					if (VMM.ExternalAPI.googlemaps.defaultType(VMM.ExternalAPI.googlemaps.maptype)) {
						layer				=	google.maps.MapTypeId[VMM.ExternalAPI.googlemaps.maptype.toUpperCase()];
					} else {
						layer				=	VMM.ExternalAPI.googlemaps.maptype;
					}
				} else {
					layer					=	"toner";
				}
				
				
				if (type.of(VMM.Util.getUrlVars(m.url)["ll"]) == "string") {
					has_location			= true;
					latlong					= VMM.Util.getUrlVars(m.url)["ll"].split(",");
					location				= new google.maps.LatLng(parseFloat(latlong[0]),parseFloat(latlong[1]));
					
				} else if (type.of(VMM.Util.getUrlVars(m.url)["sll"]) == "string") {
					latlong					= VMM.Util.getUrlVars(m.url)["sll"].split(",");
					location				= new google.maps.LatLng(parseFloat(latlong[0]),parseFloat(latlong[1]));
				} 
				
				if (type.of(VMM.Util.getUrlVars(m.url)["z"]) == "string") {
					has_zoom				=	true;
					zoom					=	parseFloat(VMM.Util.getUrlVars(m.url)["z"]);
				}
				
				map_options = {
					zoom:						zoom,
					disableDefaultUI:			true,
					mapTypeControl:				false,
					zoomControl:				true,
					zoomControlOptions: {
						style:					google.maps.ZoomControlStyle.SMALL,
						position:				google.maps.ControlPosition.TOP_RIGHT
					},
					center: 					location,
					mapTypeId:					layer,
					mapTypeControlOptions: {
				        mapTypeIds:				[layer]
				    }
				}
				
				
				VMM.attachElement("#" + m.id, "<div class='google-map' id='" + unique_map_id + "' style='width=100%;height=100%;'></div>");
				
				map		= new google.maps.Map(document.getElementById(unique_map_id), map_options);
				
				if (VMM.ExternalAPI.googlemaps.defaultType(VMM.ExternalAPI.googlemaps.maptype)) {
					
				} else {
					map.mapTypes.set(layer, new google.maps.VeriteMapType(layer));
					// ATTRIBUTION
					map_attribution_html =	"<div class='map-attribution'><div class='attribution-text'>" + map_attribution + "</div></div>";
					VMM.appendElement("#"+unique_map_id, map_attribution_html);
				}
				
				loadKML();
				
				// KML
				function loadKML() {
					var kml_url, kml_layer, infowindow, text;
					
					kml_url				= m.url + "&output=kml";
					kml_url				= kml_url.replace("&output=embed", "");
					kml_layer			= new google.maps.KmlLayer(kml_url, {preserveViewport:true});
					infowindow			= new google.maps.InfoWindow();
					kml_layer.setMap(map);

					google.maps.event.addListenerOnce(kml_layer, "defaultviewport_changed", function() {
						map.fitBounds(kml_layer.getDefaultViewport() );
						if (has_location) {
							map.panTo(location);
						} 
						if (has_zoom) {
							map.setZoom(zoom);
						}
					});
					
					google.maps.event.addListener(kml_layer, 'click', function(kmlEvent) {
						text			= kmlEvent.featureData.description;
						showInfoWindow(text);
						
						function showInfoWindow(c) {
							infowindow.setContent(c);
							infowindow.open(map);
						}
					});
				}
				
			},
			
			pushQue: function() {
				for(var i = 0; i < VMM.master_config.googlemaps.que.length; i++) {
					VMM.ExternalAPI.googlemaps.create(VMM.master_config.googlemaps.que[i]);
				}
				VMM.master_config.googlemaps.que = [];
			},
			
			onMapAPIReady: function() {
				VMM.master_config.googlemaps.map_active = true;
				VMM.master_config.googlemaps.places_active = true;
				VMM.ExternalAPI.googlemaps.onAPIReady();
			},
			
			onPlacesAPIReady: function() {
				VMM.master_config.googlemaps.places_active = true;
				VMM.ExternalAPI.googlemaps.onAPIReady();
			},
			
			onAPIReady: function() {
				if (!VMM.master_config.googlemaps.active) {
					if (VMM.master_config.googlemaps.map_active && VMM.master_config.googlemaps.places_active) {
						VMM.master_config.googlemaps.active = true;
						VMM.ExternalAPI.googlemaps.pushQue();
					}
				}
			},
			
			defaultType: function(name) {
				if (name.toLowerCase() == "satellite" || name.toLowerCase() == "hybrid" || name.toLowerCase() == "terrain" || name.toLowerCase() == "roadmap") {
					return true;
				} else {
					return false;
				}
			},
			
			map_subdomains: ["", "a.", "b.", "c.", "d."],
			
			map_attribution: {
				"stamen": 			"Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>.",
				"apple": 			"Map data &copy; 2012  Apple, Imagery &copy; 2012 Apple"
			},
						
			map_providers: {
				"toner": {
					"url": 			"http://{S}tile.stamen.com/toner/{Z}/{X}/{Y}.png",
					"minZoom": 		0,
					"maxZoom": 		20,
					"attribution": 	"stamen"
					
				},
				"toner-lines": {
					"url": 			"http://{S}tile.stamen.com/toner-lines/{Z}/{X}/{Y}.png",
					"minZoom": 		0,
					"maxZoom": 		20,
					"attribution": 	"stamen"
				},
				"toner-labels": {
					"url": 			"http://{S}tile.stamen.com/toner-labels/{Z}/{X}/{Y}.png",
					"minZoom": 		0,
					"maxZoom": 		20,
					"attribution": 	"stamen"
				},
				"sterrain": {
					"url": 			"http://{S}tile.stamen.com/terrain/{Z}/{X}/{Y}.jpg",
					"minZoom": 		4,
					"maxZoom": 		20,
					"attribution": 	"stamen"
				},
				"apple": {
					"url": 			"http://gsp2.apple.com/tile?api=1&style=slideshow&layers=default&lang=en_US&z={z}&x={x}&y={y}&v=9",
					"minZoom": 		4,
					"maxZoom": 		14,
					"attribution": 	"apple"
				},
				"watercolor": {
					"url": 			"http://{S}tile.stamen.com/watercolor/{Z}/{X}/{Y}.jpg",
					"minZoom": 		3,
					"maxZoom": 		16,
					"attribution": 	"stamen"
				}
			}
		},
		
		googleplus: {
			
			get: function(m) {
				var api_key;
				var gplus = {user: m.user, activity: m.id, id: m.uid};
				
				VMM.master_config.googleplus.que.push(gplus);
				VMM.master_config.googleplus.active = true;
			},
			
			create: function(gplus, callback) {
				var mediaElem			= "",
					api_key				= "",
					g_activity			= "",
					g_content			= "",
					g_attachments		= "",
					gperson_api_url,
					gactivity_api_url;
					googleplus_timeout	= setTimeout(VMM.ExternalAPI.googleplus.errorTimeOut, VMM.master_config.timers.api, gplus),
					callback_timeout	= setTimeout(callback, VMM.master_config.timers.api, gplus);
					
				
				if (VMM.master_config.Timeline.api_keys.google != "") {
					api_key = VMM.master_config.Timeline.api_keys.google;
				} else {
					api_key = Aes.Ctr.decrypt(VMM.master_config.api_keys_master.google, VMM.master_config.vp, 256);
				}
				
				gperson_api_url = "https://www.googleapis.com/plus/v1/people/" + gplus.user + "/activities/public?alt=json&maxResults=100&fields=items(id,url)&key=" + api_key;
				
				//mediaElem	=	"<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + gplus.url + "&amp;embedded=true'></iframe>";
				mediaElem = "GOOGLE PLUS API CALL";
				
				VMM.getJSON(gperson_api_url, function(p_data) {
					for(var i = 0; i < p_data.items.length; i++) {
						trace("loop");
						if (p_data.items[i].url.split("posts/")[1] == gplus.activity) {
							trace("FOUND IT!!");
							
							g_activity = p_data.items[i].id;
							gactivity_api_url = "https://www.googleapis.com/plus/v1/activities/" + g_activity + "?alt=json&key=" + api_key;
							
							VMM.getJSON(gactivity_api_url, function(a_data) {
								trace(a_data);
								//a_data.url
								//a_data.image.url
								//a_data.actor.displayName
								//a_data.provider.title
								//a_data.object.content
								
								//g_content		+=	"<h4>" + a_data.title + "</h4>";
								
								if (typeof a_data.annotation != 'undefined') {
									g_content	+=	"<div class='googleplus-annotation'>'" + a_data.annotation + "</div>";
									g_content	+=	a_data.object.content;
								} else {
									g_content	+=	a_data.object.content;
								}
								
								if (typeof a_data.object.attachments != 'undefined') {
									
									//g_attachments	+=	"<div class='googleplus-attachemnts'>";
									
									for(var k = 0; k < a_data.object.attachments.length; k++) {
										if (a_data.object.attachments[k].objectType == "photo") {
											g_attachments	=	"<a href='" + a_data.object.url + "' target='_blank'>" + "<img src='" + a_data.object.attachments[k].image.url + "' class='article-thumb'></a>" + g_attachments;
										} else if (a_data.object.attachments[k].objectType == "video") {
											g_attachments	=	"<img src='" + a_data.object.attachments[k].image.url + "' class='article-thumb'>" + g_attachments;
											g_attachments	+=	"<div>";
											g_attachments	+=	"<a href='" + a_data.object.attachments[k].url + "' target='_blank'>"
											g_attachments	+=	"<h5>" + a_data.object.attachments[k].displayName + "</h5>";
											//g_attachments	+=	"<p>" + a_data.object.attachments[k].content + "</p>";
											g_attachments	+=	"</a>";
											g_attachments	+=	"</div>";
										} else if (a_data.object.attachments[k].objectType == "article") {
											g_attachments	+=	"<div>";
											g_attachments	+=	"<a href='" + a_data.object.attachments[k].url + "' target='_blank'>"
											g_attachments	+=	"<h5>" + a_data.object.attachments[k].displayName + "</h5>";
											g_attachments	+=	"<p>" + a_data.object.attachments[k].content + "</p>";
											g_attachments	+=	"</a>";
											g_attachments	+=	"</div>";
										}
										
										trace(a_data.object.attachments[k]);
									}
									
									g_attachments	=	"<div class='googleplus-attachments'>" + g_attachments + "</div>";
								}
								
								//mediaElem		=	"<div class='googleplus'>";
								mediaElem		=	"<div class='googleplus-content'>" + g_content + g_attachments + "</div>";

								mediaElem		+=	"<div class='vcard author'><a class='screen-name url' href='" + a_data.url + "' target='_blank'>";
								mediaElem		+=	"<span class='avatar'><img src='" + a_data.actor.image.url + "' style='max-width: 32px; max-height: 32px;'></span>"
								mediaElem		+=	"<span class='fn'>" + a_data.actor.displayName + "</span>";
								mediaElem		+=	"<span class='nickname'><span class='thumbnail-inline'></span></span>";
								mediaElem		+=	"</a></div>";
								
								VMM.attachElement("#googleplus_" + gplus.activity, mediaElem);
								
								
							});
							
							break;
						}
					}
					
					
					
				})
				.error(function(jqXHR, textStatus, errorThrown) {
					var error_obj = VMM.parseJSON(jqXHR.responseText);
					trace(error_obj.error.message);
					VMM.attachElement("#googleplus_" + gplus.activity, VMM.MediaElement.loadingmessage("<p>ERROR LOADING GOOGLE+ </p><p>" + error_obj.error.message + "</p>"));
				})
				.success(function(d) {
					clearTimeout(googleplus_timeout);
					clearTimeout(callback_timeout);
					callback();
				});
				
				
				
			},
			
			pushQue: function() {
				if (VMM.master_config.googleplus.que.length > 0) {
					VMM.ExternalAPI.googleplus.create(VMM.master_config.googleplus.que[0], VMM.ExternalAPI.googleplus.pushQue);
					VMM.master_config.googleplus.que.remove(0);
				}
				/*
				for(var i = 0; i < VMM.master_config.googleplus.que.length; i++) {
					VMM.ExternalAPI.googleplus.create(VMM.master_config.googleplus.que[i]);
				}
				VMM.master_config.googleplus.que = [];
				*/
			},
			
			errorTimeOut: function(gplus) {
				trace("GOOGLE+ JSON ERROR TIMEOUT " + gplus.activity);
				VMM.attachElement("#googleplus_" + gplus.activity, VMM.MediaElement.loadingmessage("<p>Still waiting on GOOGLE+ </p><p>" + gplus.activity + "</p>"));
				
			}
			
		},
		
		googledocs: {
			
			get: function(m) {
				var doc = {url: m.id, id: m.uid};
				VMM.master_config.googledocs.que.push(doc);
				VMM.master_config.googledocs.active = true;
			},
			
			create: function(doc) {
				var mediaElem = ""; 
				if (doc.url.match(/docs.google.com/i)) {
					mediaElem	=	"<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + doc.url + "&amp;embedded=true'></iframe>";
				} else {
					mediaElem	=	"<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + "http://docs.google.com/viewer?url=" + doc.url + "&amp;embedded=true'></iframe>";
				}
				VMM.attachElement("#"+doc.id, mediaElem);
			},
			
			pushQue: function() {
				
				for(var i = 0; i < VMM.master_config.googledocs.que.length; i++) {
					VMM.ExternalAPI.googledocs.create(VMM.master_config.googledocs.que[i]);
				}
				VMM.master_config.googledocs.que = [];
			}
		
		},
		
		flickr: {
			
			get: function(m) {
				var flick = {mid: m.id, id: m.uid, link: m.link};
				VMM.master_config.flickr.que.push(flick);
				VMM.master_config.flickr.active = true;
			},
			
			create: function(flick, callback) {
				var api_key,
					callback_timeout= setTimeout(callback, VMM.master_config.timers.api, flick);
					
				if (typeof VMM.master_config.Timeline != 'undefined' && VMM.master_config.Timeline.api_keys.flickr != "") {
					api_key = VMM.master_config.Timeline.api_keys.flickr;
				} else {
					api_key = Aes.Ctr.decrypt(VMM.master_config.api_keys_master.flickr, VMM.master_config.vp, 256)
				}
				var the_url = "http://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + api_key + "&photo_id=" + flick.mid + "&format=json&jsoncallback=?";
				
				VMM.getJSON(the_url, function(d) {
					var flickr_id = d.sizes.size[0].url.split("photos\/")[1].split("/")[1];
				
					var flickr_large_id = "#" + flick.id,
						flickr_thumb_id = "#" + flick.id + "_thumb";
						//flickr_thumb_id = "flickr_" + uid + "_thumb";
				
					var flickr_img_size,
						flickr_img_thumb,
						flickr_size_found = false,
						flickr_best_size = "Large";
				
					flickr_best_size = VMM.ExternalAPI.flickr.sizes(VMM.master_config.sizes.api.height);
				
					for(var i = 0; i < d.sizes.size.length; i++) {
						if (d.sizes.size[i].label == flickr_best_size) {
							flickr_size_found = true;
							flickr_img_size = d.sizes.size[i].source;
						}
					}
					if (!flickr_size_found) {
						flickr_img_size = d.sizes.size[d.sizes.size.length - 1].source;
					}
				
					flickr_img_thumb = d.sizes.size[0].source;
					VMM.Lib.attr(flickr_large_id, "src", flickr_img_size);
					//VMM.attachElement(flickr_large_id, "<a href='" + flick.link + "' target='_blank'><img src='" + flickr_img_size + "'></a>");
					VMM.attachElement(flickr_thumb_id, "<img src='" + flickr_img_thumb + "'>");
					
				})
				.error(function(jqXHR, textStatus, errorThrown) {
					trace("FLICKR error");
					trace("FLICKR ERROR: " + textStatus + " " + jqXHR.responseText);
				})
				.success(function(d) {
					clearTimeout(callback_timeout);
					callback();
				});
				
			},
			
			pushQue: function() {
				if (VMM.master_config.flickr.que.length > 0) {
					VMM.ExternalAPI.flickr.create(VMM.master_config.flickr.que[0], VMM.ExternalAPI.flickr.pushQue);
					VMM.master_config.flickr.que.remove(0);
				}
			},
			
			sizes: function(s) {
				var _size = "";
				if (s <= 75) {
					_size = "Thumbnail";
				} else if (s <= 180) {
					_size = "Small";
				} else if (s <= 240) {
					_size = "Small 320";
				} else if (s <= 375) {
					_size = "Medium";
				} else if (s <= 480) {
					_size = "Medium 640";
				} else if (s <= 600) {
					_size = "Medium 800";
				} else {
					_size = "Large";
				}
				
				return _size;
			}
			
		},
		
		instagram: {
			get: function(mid, thumb) {
				if (thumb) {
					return "http://instagr.am/p/" + mid + "/media/?size=t";
				} else {
					return "http://instagr.am/p/" + mid + "/media/?size=" + VMM.ExternalAPI.instagram.sizes(VMM.master_config.sizes.api.height);
				}
			},
			
			sizes: function(s) {
				var _size = "";
				if (s <= 150) {
					_size = "t";
				} else if (s <= 306) {
					_size = "m";
				} else {
					_size = "l";
				}
				
				return _size;
			}
		},
		
		soundcloud: {
			
			get: function(m) {
				var sound = {mid: m.id, id: m.uid};
				VMM.master_config.soundcloud.que.push(sound);
				VMM.master_config.soundcloud.active = true;
			},
			
			create: function(sound, callback) {
				var the_url = "http://soundcloud.com/oembed?url=" + sound.mid + "&format=js&callback=?";
				VMM.getJSON(the_url, function(d) {
					VMM.attachElement("#"+sound.id, d.html);
					callback();
				});
			},
			
			pushQue: function() {
				if (VMM.master_config.soundcloud.que.length > 0) {
					VMM.ExternalAPI.soundcloud.create(VMM.master_config.soundcloud.que[0], VMM.ExternalAPI.soundcloud.pushQue);
					VMM.master_config.soundcloud.que.remove(0);
				}
			}
			
		},
		
		wikipedia: {
			
			get: function(m) {
				var api_obj = {url: m.id, id: m.uid, lang: m.lang};
				VMM.master_config.wikipedia.que.push(api_obj);
				VMM.master_config.wikipedia.active = true;
			},
			
			create: function(api_obj, callback) {
				var the_url = "http://" + api_obj.lang + ".wikipedia.org/w/api.php?action=query&prop=extracts&redirects=&titles=" + api_obj.url + "&exintro=1&format=json&callback=?";
				callback_timeout= setTimeout(callback, VMM.master_config.timers.api, api_obj);
				
				if ( VMM.Browser.browser == "Explorer" && parseInt(VMM.Browser.version, 10) >= 7 && window.XDomainRequest) {
					var temp_text	=	"<h4><a href='http://" + VMM.master_config.language.api.wikipedia + ".wikipedia.org/wiki/" + api_obj.url + "' target='_blank'>" + api_obj.url + "</a></h4>";
					temp_text		+=	"<span class='wiki-source'>" + VMM.master_config.language.messages.wikipedia + "</span>";
					temp_text		+=	"<p>Wikipedia entry unable to load using Internet Explorer 8 or below.</p>";
					VMM.attachElement("#"+api_obj.id, temp_text );
				}
				
				VMM.getJSON(the_url, function(d) {
					if (d.query) {
						var wiki_extract,
							wiki_title, 
							_wiki = "", 
							wiki_text = "", 
							wiki_number_of_paragraphs = 1, 
							wiki_text_array = [];
						
						wiki_extract = VMM.Util.getObjectAttributeByIndex(d.query.pages, 0).extract;
						wiki_title = VMM.Util.getObjectAttributeByIndex(d.query.pages, 0).title;
						
						if (wiki_extract.match("<p>")) {
							wiki_text_array = wiki_extract.split("<p>");
						} else {
							wiki_text_array.push(wiki_extract);
						}
					
						for(var i = 0; i < wiki_text_array.length; i++) {
							if (i+1 <= wiki_number_of_paragraphs && i+1 < wiki_text_array.length) {
								wiki_text	+= "<p>" + wiki_text_array[i+1];
							}
						}
					
						_wiki		=	"<h4><a href='http://" + VMM.master_config.language.api.wikipedia + ".wikipedia.org/wiki/" + wiki_title + "' target='_blank'>" + wiki_title + "</a></h4>";
						_wiki		+=	"<span class='wiki-source'>" + VMM.master_config.language.messages.wikipedia + "</span>";
						_wiki		+=	VMM.Util.linkify_wikipedia(wiki_text);
					
						if (wiki_extract.match("REDIRECT")) {
						
						} else {
							VMM.attachElement("#"+api_obj.id, _wiki );
						}
					}
					//callback();
				})
				.error(function(jqXHR, textStatus, errorThrown) {
					trace("WIKIPEDIA error");
					trace("WIKIPEDIA ERROR: " + textStatus + " " + jqXHR.responseText);
					trace(errorThrown);
					
					VMM.attachElement("#"+api_obj.id, VMM.MediaElement.loadingmessage("<p>Wikipedia is not responding</p>"));
					// TRY AGAIN?
					clearTimeout(callback_timeout);
					if (VMM.master_config.wikipedia.tries < 4) {
						trace("WIKIPEDIA ATTEMPT " + VMM.master_config.wikipedia.tries);
						trace(api_obj);
						VMM.master_config.wikipedia.tries++;
						VMM.ExternalAPI.wikipedia.create(api_obj, callback);
					} else {
						callback();
					}
					
				})
				.success(function(d) {
					VMM.master_config.wikipedia.tries = 0;
					clearTimeout(callback_timeout);
					callback();
				});
				
				
			},
			
			pushQue: function() {
				
				if (VMM.master_config.wikipedia.que.length > 0) {
					trace("WIKIPEDIA PUSH QUE " + VMM.master_config.wikipedia.que.length);
					VMM.ExternalAPI.wikipedia.create(VMM.master_config.wikipedia.que[0], VMM.ExternalAPI.wikipedia.pushQue);
					VMM.master_config.wikipedia.que.remove(0);
				}

			}
			
		},
		
		youtube: {
			
			get: function(m) {
				var the_url = "http://gdata.youtube.com/feeds/api/videos/" + m.id + "?v=2&alt=jsonc&callback=?",
					vid = {mid: m.id, id: m.uid, start: m.start, hd: m.hd};
					
				VMM.master_config.youtube.que.push(vid);
				
				if (!VMM.master_config.youtube.active) {
					if (!VMM.master_config.youtube.api_loaded) {
						VMM.LoadLib.js('http://www.youtube.com/player_api', function() {
							trace("YouTube API Library Loaded");
						});
					}
				}
				
				// THUMBNAIL
				VMM.getJSON(the_url, function(d) {
					VMM.ExternalAPI.youtube.createThumb(d, vid)
				});
				
			},
			
			create: function(vid) {
				if (typeof(vid.start) != 'undefined') {
					
					var vidstart			= vid.start.toString(),
						vid_start_minutes	= 0,
						vid_start_seconds	= 0;
						
					if (vidstart.match('m')) {
						vid_start_minutes = parseInt(vidstart.split("m")[0], 10);
						vid_start_seconds = parseInt(vidstart.split("m")[1].split("s")[0], 10);
						vid.start = (vid_start_minutes * 60) + vid_start_seconds;
					} else {
						vid.start = 0;
					}
				} else {
					vid.start = 0;
				}
				
				var p = {
					active: 				false,
					player: 				{},
					name:					vid.id,
					playing:				false,
					hd:						false
				};
				
				if (typeof(vid.hd) != 'undefined') {
					p.hd = true;
				}
				
				p.player[vid.id] = new YT.Player(vid.id, {
					height: 				'390',
					width: 					'640',
					playerVars: {
						enablejsapi:		1,
						color: 				'white',
						showinfo:			0,
						theme:				'light',
						start:				vid.start,
						rel:				0
					},
					videoId: vid.mid,
					events: {
						'onReady': 			VMM.ExternalAPI.youtube.onPlayerReady,
						'onStateChange': 	VMM.ExternalAPI.youtube.onStateChange
					}
				});
				
				VMM.master_config.youtube.array.push(p);
			},
			
			createThumb: function(d, vid) {
				trace("CREATE THUMB");
				trace(d);
				trace(vid);
				if (typeof d.data != 'undefined') {
					var thumb_id = "#" + vid.id + "_thumb";
					VMM.attachElement(thumb_id, "<img src='" + d.data.thumbnail.sqDefault + "'>");
					
				}
			},
			
			pushQue: function() {
				for(var i = 0; i < VMM.master_config.youtube.que.length; i++) {
					VMM.ExternalAPI.youtube.create(VMM.master_config.youtube.que[i]);
				}
				VMM.master_config.youtube.que = [];
			},
			
			onAPIReady: function() {
				VMM.master_config.youtube.active = true;
				VMM.ExternalAPI.youtube.pushQue();
			},
			
			stopPlayers: function() {
				for(var i = 0; i < VMM.master_config.youtube.array.length; i++) {
					if (VMM.master_config.youtube.array[i].playing) {
						var the_name = VMM.master_config.youtube.array[i].name;
						VMM.master_config.youtube.array[i].player[the_name].stopVideo();
					}
				}
			},
			
			onStateChange: function(e) {
				for(var i = 0; i < VMM.master_config.youtube.array.length; i++) {
					var the_name = VMM.master_config.youtube.array[i].name;
					if (VMM.master_config.youtube.array[i].player[the_name] == e.target) {
						if (e.data == YT.PlayerState.PLAYING) {
							VMM.master_config.youtube.array[i].playing = true;
							trace(VMM.master_config.youtube.array[i].hd)
							if (VMM.master_config.youtube.array[i].hd) {
								// SET TO HD
								// DOESN'T WORK AS OF NOW
								//VMM.master_config.youtube.array[i].player.setPlaybackQuality("hd720");
							}
						}
					}
				}
			},
			
			onPlayerReady: function(e) {
				
			}
			
			
		},
		
		vimeo: {
			
			get: function(m) {
				var vid = {mid: m.id, id: m.uid};
				VMM.master_config.vimeo.que.push(vid);
				VMM.master_config.vimeo.active = true;
			},
			
			create: function(vid, callback) {
				trace("VIMEO CREATE");
				// THUMBNAIL
				var the_url = "http://vimeo.com/api/v2/video/" + vid.mid + ".json";
				VMM.getJSON(the_url, function(d) {
					VMM.ExternalAPI.vimeo.createThumb(d, vid);
					callback();
				});
				
			},
			
			createThumb: function(d, vid) {
				trace("VIMEO CREATE THUMB");
				var thumb_id = "#" + vid.id + "_thumb";
				VMM.attachElement(thumb_id, "<img src='" + d[0].thumbnail_small + "'>");
			},
			
			pushQue: function() {
				if (VMM.master_config.vimeo.que.length > 0) {
					VMM.ExternalAPI.vimeo.create(VMM.master_config.vimeo.que[0], VMM.ExternalAPI.vimeo.pushQue);
					VMM.master_config.vimeo.que.remove(0);
				}
				/*
				for(var i = 0; i < VMM.master_config.vimeo.que.length; i++) {
					VMM.ExternalAPI.vimeo.create(VMM.master_config.vimeo.que[i]);
				}
				VMM.master_config.vimeo.que = [];
				*/
			}
			
		}
	
	}).init();
	
}

/*  YOUTUBE API READY
	Can't find a way to customize this callback and keep it in the VMM namespace
	Youtube wants it to be this function. 
================================================== */
function onYouTubePlayerAPIReady() {
	trace("GLOBAL YOUTUBE API CALLED")
	VMM.ExternalAPI.youtube.onAPIReady();
}

/*********************************************** 
     Begin VMM.MediaElement.js 
***********************************************/ 

/* MediaElement
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.MediaElement == 'undefined') {
	
	VMM.MediaElement = ({
		
		init: function() {
			return this;
		},
		
		loadingmessage: function(m) {
			return "<div class='loading'><div class='loading-container'><div class='loading-icon'></div>" + "<div class='message'><p>" + m + "</p></div></div></div>";
		},
		
		thumbnail: function(data, w, h, uid) {
			var _w		= 16,
				_h		= 24,
				_uid	= "";
				
			if (w != null && w != "") {_w = w};
			if (h != null && h != "") {_h = h};
			if (uid != null && uid != "") {_uid = uid};
			
			if (data.media != null && data.media != "") {
				var _valid		= true,
					mediaElem	= "",
					m			= VMM.MediaType(data.media); //returns an object with .type and .id
					
				// DETERMINE THUMBNAIL OR ICON
				if (data.thumbnail != null && data.thumbnail != "") {
					trace("CUSTOM THUMB");
					mediaElem		=	"<div class='thumbnail thumb-custom' id='" + uid + "_custom_thumb'><img src='" + data.thumbnail + "'></div>";
					return mediaElem;
				} else if (m.type == "image") {
					mediaElem		=	"<div class='thumbnail thumb-photo'></div>";
					return mediaElem;
				} else if (m.type	==	"flickr") {
					mediaElem		=	"<div class='thumbnail thumb-photo' id='" + uid + "_thumb'></div>";
					return mediaElem;
				} else if (m.type	==	"instagram") {
					mediaElem		=	"<div class='thumbnail thumb-instagram' id='" + uid + "_thumb'><img src='" + VMM.ExternalAPI.instagram.get(m.id, true) + "'></div>";
					return mediaElem;
				} else if (m.type	==	"youtube") {
					mediaElem		=	"<div class='thumbnail thumb-youtube' id='" + uid + "_thumb'></div>";
					return mediaElem;
				} else if (m.type	==	"googledoc") {
					mediaElem		=	"<div class='thumbnail thumb-document'></div>";
					return mediaElem;
				} else if (m.type	==	"vimeo") {
					mediaElem		=	"<div class='thumbnail thumb-vimeo' id='" + uid + "_thumb'></div>";
					return mediaElem;
				} else if (m.type  ==  "dailymotion") {
					mediaElem		=  "<div class='thumbnail thumb-video'></div>";
					return mediaElem;
				} else if (m.type	==	"twitter"){
					mediaElem		=	"<div class='thumbnail thumb-twitter'></div>";
					return mediaElem;
				} else if (m.type	==	"twitter-ready") {
					mediaElem		=	"<div class='thumbnail thumb-twitter'></div>";
					return mediaElem;
				} else if (m.type	==	"soundcloud") {
					mediaElem		=	"<div class='thumbnail thumb-audio'></div>";
					return mediaElem;
				} else if (m.type	==	"google-map") {
					mediaElem		=	"<div class='thumbnail thumb-map'></div>";
					return mediaElem;
				} else if (m.type		==	"googleplus") {
					mediaElem		=	"<div class='thumbnail thumb-googleplus'></div>";
					return mediaElem;
				} else if (m.type	==	"wikipedia") {
					mediaElem		=	"<div class='thumbnail thumb-wikipedia'></div>";
					return mediaElem;
				} else if (m.type	==	"storify") {
					mediaElem		=	"<div class='thumbnail thumb-storify'></div>";
					return mediaElem;
				} else if (m.type	==	"quote") {
					mediaElem		=	"<div class='thumbnail thumb-quote'></div>";
					return mediaElem;
				} else if (m.type	==	"unknown") {
					if (m.id.match("blockquote")) {
						mediaElem	=	"<div class='thumbnail thumb-quote'></div>";
					} else {
						mediaElem	=	"<div class='thumbnail thumb-plaintext'></div>";
					}
					return mediaElem;
				} else if (m.type	==	"website") {
					mediaElem		=	"<div class='thumbnail thumb-website'></div>";
					return mediaElem;
				} else {
					mediaElem = "<div class='thumbnail thumb-plaintext'></div>";
					return mediaElem;
				}
			} 
		},
		
		create: function(data, uid) {
			var _valid = false,
				//loading_messege			=	"<span class='messege'><p>" + VMM.master_config.language.messages.loading + "</p></span>";
				loading_messege			=	VMM.MediaElement.loadingmessage(VMM.master_config.language.messages.loading + "...");
			
			if (data.media != null && data.media != "") {
				var mediaElem = "", captionElem = "", creditElem = "", _id = "", isTextMedia = false, m;
				
				m = VMM.MediaType(data.media); //returns an object with .type and .id
				m.uid = uid;
				_valid = true;
				
			// CREDIT
				if (data.credit != null && data.credit != "") {
					creditElem			=	"<div class='credit'>" + VMM.Util.linkify_with_twitter(data.credit, "_blank") + "</div>";
				}
			// CAPTION
				if (data.caption != null && data.caption != "") {
					captionElem			=	"<div class='caption'>" + VMM.Util.linkify_with_twitter(data.caption, "_blank") + "</div>";
				}
			// IMAGE
				if (m.type				==	"image") {
					mediaElem			=	"<div class='media-image media-shadow'><img src='" + m.id + "' class='media-image'></div>";
			// FLICKR
				} else if (m.type		==	"flickr") {
					//mediaElem			=	"<div class='media-image media-shadow' id='" + uid + "'>" + loading_messege + "</div>";
					mediaElem			=	"<div class='media-image media-shadow'><a href='" + m.link + "' target='_blank'><img id='" + uid + "'></a></div>";
					VMM.ExternalAPI.flickr.get(m);
			// INSTAGRAM
				} else if (m.type		==	"instagram") {
					mediaElem			=	"<div class='media-image media-shadow'><a href='" + m.link + "' target='_blank'><img src='" + VMM.ExternalAPI.instagram.get(m.id) + "'></a></div>";
					//VMM.ExternalAPI.instagram.get(m.id, uid);
			// GOOGLE DOCS
				} else if (m.type		==	"googledoc") {
					mediaElem			=	"<div class='media-frame media-shadow doc' id='" + m.uid + "'>" + loading_messege + "</div>";
					VMM.ExternalAPI.googledocs.get(m);
			// YOUTUBE
				} else if (m.type		==	"youtube") {
					mediaElem			=	"<div class='media-shadow'><div class='media-frame video youtube' id='" + m.uid + "'>" + loading_messege + "</div></div>";
					VMM.ExternalAPI.youtube.get(m);
			// VIMEO
				} else if (m.type		==	"vimeo") {
					mediaElem			=	"<div class='media-shadow'><iframe class='media-frame video vimeo' autostart='false' frameborder='0' width='100%' height='100%' src='http://player.vimeo.com/video/" + m.id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff'></iframe></div>";
					VMM.ExternalAPI.vimeo.get(m);
			// DAILYMOTION
				} else if (m.type		==	"dailymotion") {
					mediaElem			=	"<div class='media-shadow'><iframe class='media-frame video dailymotion' autostart='false' frameborder='0' width='100%' height='100%' src='http://www.dailymotion.com/embed/video/" + m.id + "'></iframe></div>";
			// TWITTER
				} else if (m.type		==	"twitter"){
					mediaElem			=	"<div class='twitter' id='" + m.uid + "'>" + loading_messege + "</div>";
					isTextMedia			=	true;
					VMM.ExternalAPI.twitter.get(m);
			// TWITTER
				} else if (m.type		==	"twitter-ready") {
					isTextMedia			=	true;
					mediaElem			=	m.id;
			// SOUNDCLOUD
				} else if (m.type		==	"soundcloud") {
					mediaElem			=	"<div class='media-frame media-shadow soundcloud' id='" + m.uid + "'>" + loading_messege + "</div>";
					VMM.ExternalAPI.soundcloud.get(m);
			// GOOGLE MAPS
				} else if (m.type		==	"google-map") {
					mediaElem			=	"<div class='media-frame media-shadow map' id='" + m.uid + "'>" + loading_messege + "</div>";
					VMM.ExternalAPI.googlemaps.get(m);
			// GOOGLE PLUS
				} else if (m.type		==	"googleplus") {
					_id					=	"googleplus_" + m.id;
					mediaElem			=	"<div class='googleplus' id='" + _id + "'>" + loading_messege + "</div>";
					isTextMedia			=	true;
					VMM.ExternalAPI.googleplus.get(m);
			// WIKIPEDIA
				} else if (m.type		==	"wikipedia") {
					mediaElem			=	"<div class='wikipedia' id='" + m.uid + "'>" + loading_messege + "</div>";
					isTextMedia			=	true;
					VMM.ExternalAPI.wikipedia.get(m);
			// STORIFY
				} else if (m.type		==	"storify") { 
					isTextMedia			=	true;
					mediaElem			=	"<div class='plain-text-quote'>" + m.id + "</div>";
			// QUOTE
				} else if (m.type		==	"quote") { 
					isTextMedia			=	true;
					mediaElem			=	"<div class='plain-text-quote'>" + m.id + "</div>";
			// UNKNOWN
				} else if (m.type		==	"unknown") { 
					trace("NO KNOWN MEDIA TYPE FOUND TRYING TO JUST PLACE THE HTML"); 
					isTextMedia			=	true;
					mediaElem			=	"<div class='plain-text'><div class='container'>" + VMM.Util.properQuotes(m.id) + "</div></div>";
			// WEBSITE
				} else if (m.type		==	"website") { 
					//mediaElem			=	"<div class='media-shadow'><iframe class='media-frame website' frameborder='0' autostart='false' width='100%' height='100%' scrolling='yes' marginheight='0' marginwidth='0' src='" + m.id + "'></iframe></div>";
					//mediaElem			=	"<a href='" + m.id + "' target='_blank'>" + "<img src='http://api.snapito.com/free/lc?url=" + m.id + "'></a>";
					
					mediaElem			=	"<div class='media-shadow website'><a href='" + m.id + "' target='_blank'>" + "<img src='http://api1.thumbalizr.com/?url=" + m.id.replace(/[\./]$/g, "") + "&width=300' class='media-image'></a></div>";
					
			// NO MATCH
				} else {
					trace("NO KNOWN MEDIA TYPE FOUND");
					trace(m.type);
				}
				
			// WRAP THE MEDIA ELEMENT
				mediaElem				=	"<div class='media-container' >" + mediaElem + creditElem + captionElem + "</div>";
			// RETURN
				if (isTextMedia) {
					return "<div class='text-media'><div class='media-wrapper'>" + mediaElem + "</div></div>";
				} else {
					return "<div class='media-wrapper'>" + mediaElem + "</div>";
				}
				
			};
			
		}
		
	}).init();
}

/*********************************************** 
     Begin VMM.MediaType.js 
***********************************************/ 

/*	MediaType
	Determines the type of media the url string is.
	returns an object with .type and .id
	the id is a key piece of information needed to make
	the request of the api.
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.MediaType == 'undefined') {
	
	VMM.MediaType = function(_d) {
		var d		= _d.replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
			success	= false,
			media	= {
				type:		"unknown",
				id:			"",
				start:		0,
				hd:			false,
				link:		"",
				lang:		"",
				uniqueid:	VMM.Util.unique_ID(6)
			};
		
		if (d.match("div class='twitter'")) {
			media.type = "twitter-ready";
		    media.id = d;
		    success = true;
		} else if (d.match('(www.)?youtube|youtu\.be')) {
			if (d.match('v=')) {
				media.id	= VMM.Util.getUrlVars(d)["v"];
			} else if (d.match('\/embed\/')) {
				media.id	= d.split("embed\/")[1].split(/[?&]/)[0];
			} else {
				media.id	= d.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
			}
			media.start	= VMM.Util.getUrlVars(d)["t"];
			media.hd	= VMM.Util.getUrlVars(d)["hd"];
		    media.type = "youtube";
		    success = true;
		} else if (d.match('(player.)?vimeo\.com')) {
		    media.type = "vimeo";
		    media.id = d.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0];;
		    success = true;
	    } else if (d.match('(www.)?dailymotion\.com')) {
			media.id = d.split(/video\/|\/\/dailymotion\.com\//)[1];
			media.type = "dailymotion";
			success = true;
		} else if (d.match('(player.)?soundcloud\.com')) {
			media.type = "soundcloud";
			media.id = d;
			success = true;
		} else if (d.match('(www.)?twitter\.com') && d.match('status') ) {
			if (d.match("status\/")) {
				media.id = d.split("status\/")[1];
			} else if (d.match("statuses\/")) {
				media.id = d.split("statuses\/")[1];
			} else {
				media.id = "";
			}
			media.type = "twitter";
			success = true;
		} else if (d.match("maps.google") && !d.match("staticmap")) {
			media.type = "google-map";
		    media.id = d.split(/src=['|"][^'|"]*?['|"]/gi);
			success = true;
		} else if (d.match("plus.google")) {
			media.type = "googleplus";
		    media.id = d.split("/posts/")[1];
			//https://plus.google.com/u/0/112374836634096795698/posts/bRJSvCb5mUU
			//https://plus.google.com/107096716333816995401/posts/J5iMpEDHWNL
			if (d.split("/posts/")[0].match("u/0/")) {
				media.user = d.split("u/0/")[1].split("/posts")[0];
			} else {
				media.user = d.split("google.com/")[1].split("/posts/")[0];
			}
			success = true;
		} else if (d.match("flickr.com/photos")) {
			media.type = "flickr";
			media.id = d.split("photos\/")[1].split("/")[1];
			media.link = d;
			success = true;
		} else if (d.match("instagr.am/p/")) {
			media.type = "instagram";
			media.link = d;
			media.id = d.split("\/p\/")[1].split("/")[0];
			success = true;
		} else if (d.match(/jpg|jpeg|png|gif/i) || d.match("staticmap") || d.match("yfrog.com") || d.match("twitpic.com")) {
			media.type = "image";
			media.id = d;
			success = true;
		} else if (VMM.FileExtention.googleDocType(d)) {
			media.type = "googledoc";
			media.id = d;
			success = true;
		} else if (d.match('(www.)?wikipedia\.org')) {
			media.type = "wikipedia";
			//media.id = d.split("wiki\/")[1];
			var wiki_id = d.split("wiki\/")[1].split("#")[0].replace("_", " ");
			media.id = wiki_id.replace(" ", "%20");
			media.lang = d.split("//")[1].split(".wikipedia")[0];
			success = true;
		} else if (d.indexOf('http://') == 0) {
			media.type = "website";
			media.id = d;
			success = true;
		} else if (d.match('storify')) {
			media.type = "storify";
			media.id = d;
			success = true;
		} else if (d.match('blockquote')) {
			media.type = "quote";
			media.id = d;
			success = true;
		} else {
			trace("unknown media");  
			media.type = "unknown";
			media.id = d;
			success = true;
		}
		
		if (success) { 
			return media;
		} else {
			trace("No valid media id detected");
			trace(d);
		}
		return false;
	}
}

/*********************************************** 
     Begin VMM.TextElement.js 
***********************************************/ 

/* TextElement
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.TextElement == 'undefined') {
	
	VMM.TextElement = ({
		
		init: function() {
			return this;
		},
		
		create: function(data) {
			return data;
		}
		
	}).init();
}

/*********************************************** 
     Begin VMM.Media.js 
***********************************************/ 

/* Media
================================================== */

/*	* CodeKit Import
	* http://incident57.com/codekit/
================================================== */
// @codekit-prepend "VMM.ExternalAPI.js";
// @codekit-prepend "VMM.MediaElement.js";
// @codekit-prepend "VMM.MediaType.js";
// @codekit-prepend "VMM.TextElement.js";


/*********************************************** 
     Begin VMM.DragSlider.js 
***********************************************/ 

/* DRAG SLIDER
================================================== */
if(typeof VMM != 'undefined' && typeof VMM.DragSlider == 'undefined') {
	// VMM.DragSlider.createSlidePanel(drag_object, move_object, w, padding, sticky);
	// VMM.DragSlider.cancelSlide();

	VMM.DragSlider = function() {
		var drag = {
			element:		"",
			element_move:	"",
			constraint:		"",
			sliding:		false,
			pagex: {
				start:		0,
				end:		0
			},
			left: {
				start:		0,
				end:		0
			},
			time: {
				start:		0,
				end:		0
			},
			touch:			false,
			ease:			"easeOutExpo"
		},
		dragevent = {
			down:		"mousedown",
			up:			"mouseup",
			leave:		"mouseleave",
			move:		"mousemove"
		},
		mousedrag = {
			down:		"mousedown",
			up:			"mouseup",
			leave:		"mouseleave",
			move:		"mousemove"
		},
		touchdrag = {
			down:		"touchstart",
			up:			"touchend",
			leave:		"mouseleave",
			move:		"touchmove"
		};
		
		this.createPanel = function(drag_object, move_object, constraint, touch) {
			drag.element		= drag_object;
			drag.element_move	= move_object;
			
			if ( constraint != null && constraint != "") {
				drag.constraint = constraint;
			} else {
				drag.constraint = false;
			}
			if ( touch) {
				drag.touch = touch;
			} else {
				drag.touch = false;
			}
			trace("TOUCH" + drag.touch);
			if (drag.touch) {
				dragevent = touchdrag;
			} else {
				dragevent = mousedrag;
			}
			
			makeDraggable(drag.element, drag.element_move);
		}
		
		this.updateConstraint = function(constraint) {
			trace("updateConstraint");
			drag.constraint = constraint;
		}
		
		var makeDraggable = function(drag_object, move_object) {
			
			VMM.bindEvent(drag_object, onDragStart, dragevent.down, {element: move_object, delement: drag_object});
			VMM.bindEvent(drag_object, onDragEnd, dragevent.up, {element: move_object, delement: drag_object});
			VMM.bindEvent(drag_object, onDragLeave, dragevent.leave, {element: move_object, delement: drag_object});
			
	    }
		this.cancelSlide = function(e) {
			VMM.unbindEvent(drag.element, onDragMove, dragevent.move);
			return true;
		}
		var onDragLeave = function(e) {
			VMM.unbindEvent(e.data.delement, onDragMove, dragevent.move);
			if (!drag.touch) {
				e.preventDefault();
			}
			e.stopPropagation();
			if (drag.sliding) {
				drag.sliding = false;
				dragEnd(e.data.element, e.data.delement, e);
				return false;
			} else {
				return true;
			}
		}
		
		var onDragStart = function(e) {
			dragStart(e.data.element, e.data.delement, e);
			if (!drag.touch) {
				e.preventDefault();
			}
			e.stopPropagation();
			return true;
		}
		
		var onDragEnd = function(e) {
			if (!drag.touch) {
				e.preventDefault();
			}
			e.stopPropagation();
			if (drag.sliding) {
				drag.sliding = false;
				dragEnd(e.data.element, e.data.delement, e);
				return false;
			} else {
				return true;
			}
		}
		var onDragMove = function(e) {
			dragMove(e.data.element, e);
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
		var dragStart = function(elem, delem, e) {
			if (drag.touch) {
				trace("IS TOUCH")
				VMM.Lib.css(elem, '-webkit-transition-duration', '0');
				drag.pagex.start = e.originalEvent.touches[0].screenX;
			} else {
				drag.pagex.start = e.pageX;
			}
			drag.left.start = getLeft(elem);
			drag.time.start = new Date().getTime();
			
			VMM.Lib.stop(elem);
			VMM.bindEvent(delem, onDragMove, dragevent.move, {element: elem});

	    }
		var dragEnd = function(elem, delem, e) {
			VMM.unbindEvent(delem, onDragMove, dragevent.move);
			dragMomentum(elem, e);
		}
		var dragMove = function(elem, e) {
			drag.sliding = true;
			if (drag.touch) {
				drag.pagex.end = e.originalEvent.touches[0].screenX;
			} else {
				drag.pagex.end = e.pageX;
			}
			drag.left.end = getLeft(elem);
			VMM.Lib.css(elem, 'left', -(drag.pagex.start - drag.pagex.end - drag.left.start));
			
		}
		var dragMomentum = function(elem, e) {
			var drag_info = {
					left:			drag.left.end,
					left_adjust:	0,
					change: {
						x:			0
					},
					time:			(new Date().getTime() - drag.time.start) * 10,
					time_adjust:	(new Date().getTime() - drag.time.start) * 10
				},
				multiplier = 3000;
				
			if (drag.touch) {
				multiplier = 6000;
			}
			
			drag_info.change.x = multiplier * (Math.abs(drag.pagex.end) - Math.abs(drag.pagex.start));
			
			
			drag_info.left_adjust = Math.round(drag_info.change.x / drag_info.time);
			
			drag_info.left = Math.min(drag_info.left + drag_info.left_adjust);
			
			if (drag.constraint) {
				if (drag_info.left > drag.constraint.left) {
					drag_info.left = drag.constraint.left;
					if (drag_info.time > 5000) {
						drag_info.time = 5000;
					}
				} else if (drag_info.left < drag.constraint.right) {
					drag_info.left = drag.constraint.right;
					if (drag_info.time > 5000) {
						drag_info.time = 5000;
					}
				}
			}
			
			VMM.fireEvent(elem, "DRAGUPDATE", [drag_info]);

			
			if (drag_info.time > 0) {
				if (drag.touch) {
					//VMM.Lib.css(elem, '-webkit-transition-property', 'left');
					//VMM.Lib.css(elem, '-webkit-transition-duration', drag_info.time);
					//VMM.Lib.css(elem, 'left', drag_info.left);
					
					//VMM.Lib.animate(elem, drag_info.time, "easeOutQuad", {"left": drag_info.left});
					VMM.Lib.animate(elem, drag_info.time, "easeOutCirc", {"left": drag_info.left});
					//VMM.Lib.css(elem, 'webkitTransition', '');
					//VMM.Lib.css(elem, 'webkitTransition', '-webkit-transform ' + drag_info.time + 'ms cubic-bezier(0.33, 0.66, 0.66, 1)');
					//VMM.Lib.css(elem, 'webkitTransform', 'translate3d(' + drag_info.left + 'px, 0, 0)');

				} else {
					VMM.Lib.animate(elem, drag_info.time, drag.ease, {"left": drag_info.left});
				}
			}
			
		}
		var getLeft = function(elem) {
			return parseInt(VMM.Lib.css(elem, 'left').substring(0, VMM.Lib.css(elem, 'left').length - 2), 10);
		}
	}
}

/*********************************************** 
     Begin VMM.Slider.js 
***********************************************/ 

/* Slider
================================================== */
/*	* CodeKit Import
	* http://incident57.com/codekit/
================================================== */
// @codekit-append "VMM.Slider.Slide.js";

if(typeof VMM != 'undefined' && typeof VMM.Slider == 'undefined') {
	
	VMM.Slider = function(parent, parent_config) {
		
		var config,
			timer,
			$slider,
			$slider_mask,
			$slider_container,
			$slides_items,
			events				= {},
			data				= [],
			slides				= [],
			slide_positions		= [],
			slides_content		= "",
			current_slide		= 0,
			current_width		= 960,
			touch = {
				move:			false,
				x:				10,
				y:				0,
				off:			0,
				dampen:			48
			},
			content				= "",
			_active				= false,
			layout				= parent,
			navigation = {
				nextBtn:		"",
				prevBtn:		"",
				nextDate:		"",
				prevDate:		"",
				nextTitle:		"",
				prevTitle:		""
			};
		
		// CONFIG
		if(typeof parent_config != 'undefined') {
			config	= parent_config;
		} else {
			config	= {
				preload:			4,
				current_slide:		0,
				interval:			10, 
				something:			0, 
				width:				720, 
				height:				400, 
				ease:				"easeInOutExpo", 
				duration:			1000, 
				timeline:			false, 
				spacing:			15,
				slider: {
					width:			720, 
					height:			400, 
					content: {
						width:		720, 
						height:		400, 
						padding:	130
					}, 
					nav: {
						width:		100, 
						height:		200
					} 
				} 
			};
		}
		
		/* PUBLIC VARS
		================================================== */
		this.ver = "0.6";
		
		config.slider.width		= config.width;
		config.slider.height	= config.height;
		
		/* PUBLIC FUNCTIONS
		================================================== */
		this.init = function(d) {
			slides			= [];
			slide_positions	= [];
			
			if(typeof d != 'undefined') {
				this.setData(d);
			} else {
				trace("WAITING ON DATA");
			}
		};
		
		this.width = function(w) {
			if (w != null && w != "") {
				config.slider.width = w;
				reSize();
			} else {
				return config.slider.width;
			}
		}
		
		this.height = function(h) {
			if (h != null && h != "") {
				config.slider.height = h;
				reSize();
			} else {
				return config.slider.height;
			}
		}
		
		/* GETTERS AND SETTERS
		================================================== */
		this.setData = function(d) {
			if(typeof d != 'undefined') {
				data = d;
				build();
			} else{
				trace("NO DATA");
			}
		};
		
		this.getData = function() {
			return data;
		};
		
		this.setConfig = function(d) {
			if(typeof d != 'undefined') {
				config = d;
			} else{
				trace("NO CONFIG DATA");
			}
		}
		
		this.getConfig = function() {
			return config;
		};
		
		this.setSize = function(w, h) {
			if (w != null) {config.slider.width = w};
			if (h != null) {config.slider.height = h};
			if (_active) {
				reSize();
			}
			
		}
		
		this.active = function() {
			return _active;
		};
		
		this.getCurrentNumber = function() {
			return current_slide;
		};
		
		this.setSlide = function(n) {
			goToSlide(n);
		};
		
		/* ON EVENT
		================================================== */
		function onConfigSet() {
			trace("onConfigSet");
		};
		
		function reSize(go_to_slide, from_start) {
			var _go_to_slide	= true,
				_from_start		= false;
			
			if (go_to_slide != null) {_go_to_slide = go_to_slide};
			if (from_start != null) {_from_start = from_start};
			
			current_width = config.slider.width;
			
			config.slider.nav.height = VMM.Lib.height(navigation.prevBtnContainer);
			
			config.slider.content.width = current_width - (config.slider.content.padding *2);
			
			VMM.Lib.width($slides_items, (slides.length * config.slider.content.width));
			
			if (_from_start) {
				VMM.Lib.css($slider_container, "left", slides[current_slide].leftpos());
			}
			
			// RESIZE SLIDES
			sizeSlides();
			
			// POSITION SLIDES
			positionSlides();
			
			// POSITION NAV
			VMM.Lib.css(navigation.nextBtn, "left", (current_width - config.slider.nav.width));
			VMM.Lib.height(navigation.prevBtn, config.slider.height);
			VMM.Lib.height(navigation.nextBtn, config.slider.height);
			VMM.Lib.css(navigation.nextBtnContainer, "top", ( (config.slider.height/2) - (config.slider.nav.height/2) ) + 10 );
			VMM.Lib.css(navigation.prevBtnContainer, "top", ( (config.slider.height/2) - (config.slider.nav.height/2) ) + 10 );
			
			// Animate Changes
			VMM.Lib.height($slider_mask, config.slider.height);
			VMM.Lib.width($slider_mask, current_width);
			
			if (_go_to_slide) {
				goToSlide(current_slide, "linear", 1);
			};
			
			if (current_slide == 0) {
				VMM.Lib.visible(navigation.prevBtn, false);
			}
			
		}
		
		/* NAVIGATION
		================================================== */
		function onNextClick(e) {
			if (current_slide == slides.length - 1) {
				VMM.Lib.animate($slider_container, config.duration, config.ease, {"left": -(slides[current_slide].leftpos()) } );
			} else {
				goToSlide(current_slide+1);
				upDate();
			}
		}
		
		function onPrevClick(e) {
			if (current_slide == 0) {
				goToSlide(current_slide);
			} else {
				goToSlide(current_slide-1);
				upDate();
			}
		}

		function onKeypressNav(e) {
			switch(e.keyCode) {
				case 39:
					// RIGHT ARROW
					onNextClick(e);
					break;
				case 37:
					// LEFT ARROW
					onPrevClick(e);
					break;
			}
		}
		
		function onTouchUpdate(e, b) {
			if (slide_positions.length == 0) {
				for(var i = 0; i < slides.length; i++) {
					slide_positions.push( slides[i].leftpos() );
				}
			}
			if (typeof b.left == "number") {
				var _pos = b.left;
				var _slide_pos = -(slides[current_slide].leftpos());
				if (_pos < _slide_pos - (config.slider_width/3)) {
					onNextClick();
				} else if (_pos > _slide_pos + (config.slider_width/3)) {
					onPrevClick();
				} else {
					VMM.Lib.animate($slider_container, config.duration, config.ease, {"left": _slide_pos });
				}
			} else {
				VMM.Lib.animate($slider_container, config.duration, config.ease, {"left": _slide_pos });
			}
			
			if (typeof b.top == "number") {
				VMM.Lib.animate($slider_container, config.duration, config.ease, {"top": -b.top});
			} else {
				
			}
		};
		
		/* UPDATE
		================================================== */
		function upDate() {
			config.current_slide = current_slide;
			VMM.fireEvent(layout, "UPDATE");
		};
		
		/* GET DATA
		================================================== */
		var getData = function(d) {
			data = d;
		};
		
		/* BUILD SLIDES
		================================================== */
		var buildSlides = function(d) {
			var i	= 0;
			
			VMM.attachElement($slides_items, "");
			slides = [];
			
			for(i = 0; i < d.length; i++) {
				var _slide = new VMM.Slider.Slide(d[i], $slides_items);
				//_slide.show();
				slides.push(_slide);
			}
		}
		
		var preloadSlides = function(skip) {
			var i	= 0;
			
			if (skip) {
				preloadTimeOutSlides();
			} else {
				for(i = 0; i < slides.length; i++) {
					slides[i].clearTimers();
				}
				timer = setTimeout(preloadTimeOutSlides, config.duration);
				
			}
		}
		
		var preloadTimeOutSlides = function() {
			var i = 0;
			
			for(i = 0; i < slides.length; i++) {
				slides[i].enqueue = true;
			}
			
			for(i = 0; i < config.preload; i++) {
				if ( !((current_slide + i) > slides.length - 1)) {
					slides[current_slide + i].show();
					slides[current_slide + i].enqueue = false;
				}
				if ( !( (current_slide - i) < 0 ) ) {
					slides[current_slide - i].show();
					slides[current_slide - i].enqueue = false;
				}
			}
			
			if (slides.length > 50) {
				for(i = 0; i < slides.length; i++) {
					if (slides[i].enqueue) {
						slides[i].hide();
					}
				}
			}
			
			sizeSlides();
		}
		
		var sizeSlide = function(slide_id) {
			
		}
		/* SIZE SLIDES
		================================================== */
		var sizeSlides = function() {
			var i						= 0,
				layout_text_media		= ".slider-item .layout-text-media .media .media-container ",
				layout_media			= ".slider-item .layout-media .media .media-container ",
				layout_both				= ".slider-item .media .media-container",
				layout_caption			= ".slider-item .media .media-container .media-shadow .caption",
				mediasize = {
					text_media: {
						width: 			(config.slider.content.width/100) * 60,
						height: 		config.slider.height - 60,
						video: {
							width:		0,
							height:		0
						},
						text: {
							width:		((config.slider.content.width/100) * 40) - 30,
							height:		config.slider.height
						}
					},
					media: {
						width: 			config.slider.content.width,
						height: 		config.slider.height - 110,
						video: {
							width: 		0,
							height: 	0
						}
					}
				};
			
			VMM.master_config.sizes.api.width	= mediasize.media.width;
			VMM.master_config.sizes.api.height	= mediasize.media.height;
			
			mediasize.text_media.video			= VMM.Util.ratio.fit(mediasize.text_media.width, mediasize.text_media.height, 16, 9);
			mediasize.media.video				= VMM.Util.ratio.fit(mediasize.media.width, mediasize.media.height, 16, 9);
			
			VMM.Lib.css(".slider-item", "width", config.slider.content.width );
			VMM.Lib.height(".slider-item", config.slider.height);
			
			// HANDLE SMALLER SIZES
			var is_skinny = false;
			
			if (current_width <= 640) {
				is_skinny = true;
			} else if (VMM.Browser.device == "mobile" && VMM.Browser.orientation == "portrait") {
				is_skinny = true;
			} else if (VMM.Browser.device == "tablet" && VMM.Browser.orientation == "portrait") {
				//is_skinny = true;
			}
			
			if (is_skinny) {
				
				mediasize.text_media.width = 	config.slider.content.width;
				mediasize.text_media.height = 	((config.slider.height/100) * 50 ) - 50;
				mediasize.media.height = 		((config.slider.height/100) * 70 ) - 40;
				
				mediasize.text_media.video = 	VMM.Util.ratio.fit(mediasize.text_media.width, mediasize.text_media.height, 16, 9);
				mediasize.media.video = 		VMM.Util.ratio.fit(mediasize.media.width, mediasize.media.height, 16, 9);
				
				VMM.Lib.css(".slider-item .layout-text-media .text", "width", "100%" );
				VMM.Lib.css(".slider-item .layout-text-media .text", "display", "block" );
				VMM.Lib.css(".slider-item .layout-text-media .text .container", "display", "block" );
				VMM.Lib.css(".slider-item .layout-text-media .text .container", "width", config.slider.content.width );
				
				VMM.Lib.css(".slider-item .layout-text-media .media", "float", "none" );
				VMM.Lib.addClass(".slider-item .content-container", "pad-top");
				
				VMM.Lib.css(".slider-item .media blockquote p", "line-height", "18px" );
				VMM.Lib.css(".slider-item .media blockquote p", "font-size", "16px" );
				
				VMM.Lib.css(".slider-item", "overflow-y", "auto" );
				
				
			} else {
				
				VMM.Lib.css(".slider-item .layout-text-media .text", "width", "40%" );
				VMM.Lib.css(".slider-item .layout-text-media .text", "display", "table-cell" );
				VMM.Lib.css(".slider-item .layout-text-media .text .container", "display", "table-cell" );
				VMM.Lib.css(".slider-item .layout-text-media .text .container", "width", "auto" );
				VMM.Lib.css(".slider-item .layout-text-media .text .container .start", "width", mediasize.text_media.text.width );
				//VMM.Lib.addClass(".slider-item .content-container", "pad-left");
				VMM.Lib.removeClass(".slider-item .content-container", "pad-top");
				
				VMM.Lib.css(".slider-item .layout-text-media .media", "float", "left" );
				VMM.Lib.css(".slider-item .layout-text-media", "display", "table" );
				
				VMM.Lib.css(".slider-item .media blockquote p", "line-height", "36px" );
				VMM.Lib.css(".slider-item .media blockquote p", "font-size", "28px" );
				
				VMM.Lib.css(".slider-item", "display", "table" );
				VMM.Lib.css(".slider-item", "overflow-y", "auto" );
			}
			
			// MEDIA FRAME
			VMM.Lib.css(	layout_text_media + ".media-frame", 		"max-width", 	mediasize.text_media.width);
			VMM.Lib.height(	layout_text_media + ".media-frame", 						mediasize.text_media.height);
			VMM.Lib.width(	layout_text_media + ".media-frame", 						mediasize.text_media.width);
			
			// WEBSITES
			//VMM.Lib.css(	layout_both + 		".website", 			"max-width", 	300 );
			
			// IMAGES
			VMM.Lib.css(	layout_text_media + "img", 					"max-height", 	mediasize.text_media.height );
			VMM.Lib.css(	layout_media + 		"img", 					"max-height", 	mediasize.media.height );
			
			// FIX FOR NON-WEBKIT BROWSERS
			VMM.Lib.css(	layout_text_media + "img", 					"max-width", 	mediasize.text_media.width );
			VMM.Lib.css(	layout_text_media + ".avatar img", "max-width", 			32 );
			VMM.Lib.css(	layout_text_media + ".avatar img", "max-height", 			32 );
			VMM.Lib.css(	layout_media + 		".avatar img", "max-width", 			32 );
			VMM.Lib.css(	layout_media + 		".avatar img", "max-height", 			32 );
			
			VMM.Lib.css(	layout_text_media + ".article-thumb", "max-width", 			"50%" );
			//VMM.Lib.css(	layout_text_media + ".article-thumb", "max-height", 		100 );
			VMM.Lib.css(	layout_media + 		".article-thumb", "max-width", 			200 );
			//VMM.Lib.css(	layout_media + 		".article-thumb", "max-height", 		100 );
			
			
			// IFRAME FULL SIZE VIDEO
			VMM.Lib.width(	layout_text_media + ".media-frame", 						mediasize.text_media.video.width);
			VMM.Lib.height(	layout_text_media + ".media-frame", 						mediasize.text_media.video.height);
			VMM.Lib.width(	layout_media + 		".media-frame", 						mediasize.media.video.width);
			VMM.Lib.height(	layout_media + 		".media-frame", 						mediasize.media.video.height);
			VMM.Lib.css(	layout_media + 		".media-frame", 		"max-height", 	mediasize.media.video.height);
			VMM.Lib.css(	layout_media + 		".media-frame", 		"max-width", 	mediasize.media.video.width);
			
			// SOUNDCLOUD
			VMM.Lib.height(	layout_media + 		".soundcloud", 							168);
			VMM.Lib.height(	layout_text_media + ".soundcloud", 							168);
			VMM.Lib.width(	layout_media + 		".soundcloud", 							mediasize.media.width);
			VMM.Lib.width(	layout_text_media + ".soundcloud", 							mediasize.text_media.width);
			VMM.Lib.css(	layout_both + 		".soundcloud", 			"max-height", 	168 );
			
			// MAPS
			VMM.Lib.height(	layout_text_media + ".map", 								mediasize.text_media.height);
			VMM.Lib.css(	layout_media + 		".map", 				"max-height", 	mediasize.media.height);
			VMM.Lib.width(	layout_media + 		".map", 								mediasize.media.width);

			// DOCS
			VMM.Lib.height(	layout_text_media + ".doc", 								mediasize.text_media.height);
			VMM.Lib.height(	layout_media + 		".doc", 								mediasize.media.height);
			
			// IE8 NEEDS THIS
			VMM.Lib.width(	layout_media + 		".wikipedia", 							mediasize.media.width);
			VMM.Lib.width(	layout_media + 		".twitter", 							mediasize.media.width);
			VMM.Lib.width(	layout_media + 		".plain-text-quote", 					mediasize.media.width);
			VMM.Lib.width(	layout_media + 		".plain-text", 							mediasize.media.width);
			
			// CAPTION WIDTH
			VMM.Lib.css( layout_text_media + 	".caption",	"max-width",	mediasize.text_media.video.width);
			VMM.Lib.css( layout_media + 		".caption",	"max-width",	mediasize.media.video.width);
			
			// MAINTAINS VERTICAL CENTER IF IT CAN
			for(i = 0; i < slides.length; i++) {
				
				slides[i].layout(is_skinny);
				
				if (slides[i].content_height() > config.slider.height + 20) {
					slides[i].css("display", "block");
				} else {
					slides[i].css("display", "table");
				}
			}
			
		}
		
		/* POSITION SLIDES
		================================================== */
		var positionSlides = function() {
			var pos = 0,
				i	= 0;
				
			for(i = 0; i < slides.length; i++) {
				pos = i * (config.slider.width+config.spacing);
				slides[i].leftpos(pos);
			}
		}
		
		/* OPACITY SLIDES
		================================================== */
		var opacitySlides = function(n) {
			var _ease	= "linear",
				i		= 0;
				
			for(i = 0; i < slides.length; i++) {
				if (i == current_slide) {
					slides[i].animate(config.duration, _ease, {"opacity": 1});
				} else if (i == current_slide - 1 || i == current_slide + 1) {
					slides[i].animate(config.duration, _ease, {"opacity": 0.1});
				} else {
					slides[i].opacity(n);
				}
			}
		}
		
		/* GO TO SLIDE
			goToSlide(n, ease, duration);
		================================================== */
		var goToSlide = function(n, ease, duration, fast, firstrun) {
			var _ease		= config.ease,
				_duration	= config.duration,
				is_last		= false,
				is_first	= false,
				_title		= "",
				_pos;
			
			/* STOP ANY VIDEO PLAYERS ACTIVE
			================================================== */
			VMM.ExternalAPI.youtube.stopPlayers();
			
			// Set current slide
			current_slide	= n;
			_pos			= slides[current_slide].leftpos();
			
			
			if (current_slide == 0) {is_first = true};
			if (current_slide +1 >= slides.length) {is_last = true};
			if (ease != null && ease != "") {_ease = ease};
			if (duration != null && duration != "") {_duration = duration};
			
			/* set proper nav titles and dates etc.
			================================================== */
			if (is_first) {
				VMM.Lib.visible(navigation.prevBtn, false);
			} else {
				VMM.Lib.visible(navigation.prevBtn, true);
				_title = VMM.Util.unlinkify(data[current_slide - 1].title)
				if (config.type == "timeline") {
					if(typeof data[current_slide - 1].date === "undefined") {
						VMM.attachElement(navigation.prevDate, _title);
						VMM.attachElement(navigation.prevTitle, "");
					} else {
						VMM.attachElement(navigation.prevDate, VMM.Date.prettyDate(data[current_slide - 1].startdate));
						VMM.attachElement(navigation.prevTitle, _title);
					}
				} else {
					VMM.attachElement(navigation.prevTitle, _title);
				}
				
			}
			if (is_last) {
				VMM.Lib.visible(navigation.nextBtn, false);
			} else {
				VMM.Lib.visible(navigation.nextBtn, true);
				_title = VMM.Util.unlinkify(data[current_slide + 1].title);
				if (config.type == "timeline") {
					if(typeof data[current_slide + 1].date === "undefined") {
						VMM.attachElement(navigation.nextDate, _title);
						VMM.attachElement(navigation.nextTitle, "");
					} else {
						VMM.attachElement(navigation.nextDate, VMM.Date.prettyDate(data[current_slide + 1].startdate) );
						VMM.attachElement(navigation.nextTitle, _title);
					}
				} else {
					VMM.attachElement(navigation.nextTitle,  _title);
				}
				
			}
			
			/* ANIMATE SLIDE
			================================================== */
			if (fast) {
				VMM.Lib.css($slider_container, "left", -(_pos - config.slider.content.padding));	
			} else{
				VMM.Lib.stop($slider_container);
				VMM.Lib.animate($slider_container, _duration, _ease, {"left": -(_pos - config.slider.content.padding)});
			}
			
			if (firstrun) {
				VMM.fireEvent(layout, "LOADED");
			}
			
			/* SET Vertical Scoll
			================================================== */
			if (slides[current_slide].height() > config.slider_height) {
				VMM.Lib.css(".slider", "overflow-y", "scroll" );
			} else {
				VMM.Lib.css(layout, "overflow-y", "hidden" );
				var scroll_height = 0;
				try {
					scroll_height = VMM.Lib.prop(layout, "scrollHeight");
					VMM.Lib.animate(layout, _duration, _ease, {scrollTop: scroll_height - VMM.Lib.height(layout) });
				}
				catch(err) {
					scroll_height = VMM.Lib.height(layout);
				}
			}
			
			preloadSlides();
		}

		/* BUILD NAVIGATION
		================================================== */
		var buildNavigation = function() {
			
			var temp_icon = "<div class='icon'>&nbsp;</div>";
			
			navigation.nextBtn = VMM.appendAndGetElement($slider, "<div>", "nav-next");
			navigation.prevBtn = VMM.appendAndGetElement($slider, "<div>", "nav-previous");
			navigation.nextBtnContainer = VMM.appendAndGetElement(navigation.nextBtn, "<div>", "nav-container", temp_icon);
			navigation.prevBtnContainer = VMM.appendAndGetElement(navigation.prevBtn, "<div>", "nav-container", temp_icon);
			if (config.type == "timeline") {
				navigation.nextDate = VMM.appendAndGetElement(navigation.nextBtnContainer, "<div>", "date", "");
				navigation.prevDate = VMM.appendAndGetElement(navigation.prevBtnContainer, "<div>", "date", "");
			}
			navigation.nextTitle = VMM.appendAndGetElement(navigation.nextBtnContainer, "<div>", "title", "");
			navigation.prevTitle = VMM.appendAndGetElement(navigation.prevBtnContainer, "<div>", "title", "");
			
			VMM.bindEvent(".nav-next", onNextClick);
			VMM.bindEvent(".nav-previous", onPrevClick);
			VMM.bindEvent(window, onKeypressNav, 'keydown');
			
		}
		
		/* BUILD
		================================================== */
		var build = function() {
			var __duration = 3000;
			// Clear out existing content
			VMM.attachElement(layout, "");
			
			// Get DOM Objects to local objects
			$slider				= VMM.getElement(layout);
			$slider_mask		= VMM.appendAndGetElement($slider, "<div>", "slider-container-mask");
			$slider_container	= VMM.appendAndGetElement($slider_mask, "<div>", "slider-container");
			$slides_items		= VMM.appendAndGetElement($slider_container, "<div>", "slider-item-container");
			
			// BUILD NAVIGATION
			buildNavigation();

			// ATTACH SLIDES
			buildSlides(data);
			
			/* MAKE SLIDER TOUCHABLE
			================================================== */
			if (VMM.Browser.device == "tablet" || VMM.Browser.device == "mobile") {
				config.duration = 500;
				__duration = 1000;
				//VMM.TouchSlider.createPanel($slider_container, $slider_container, VMM.Lib.width(slides[0]), config.spacing, true);
				//VMM.TouchSlider.createPanel($slider_container, $slider_container, slides[0].width(), config.spacing, true);
				//VMM.bindEvent($slider_container, onTouchUpdate, "TOUCHUPDATE");
			} else if (VMM.Browser.device == "mobile") {
				
			} else {
				//VMM.DragSlider.createPanel($slider_container, $slider_container, VMM.Lib.width(slides[0]), config.spacing, true);
			}
			
			reSize(false, true);
			VMM.Lib.visible(navigation.prevBtn, false);
			goToSlide(config.current_slide, "easeOutExpo", __duration, true, true);
			
			_active = true;
		};
		
	};
	
}






/*********************************************** 
     Begin VMM.Slider.Slide.js 
***********************************************/ 

/* Slider Slide 
================================================== */

if (typeof VMM.Slider != 'undefined') {
	VMM.Slider.Slide = function(d, _parent) {
		
		var $media, $text, $slide, $wrap, element, c,
			data		= d,
			slide		= {},
			element		= "",
			media		= "",
			loaded		= false,
			preloaded	= false,
			is_skinny	= false,
			_enqueue	= true,
			_removeque	= false,
			_id			= "slide_",
			timer		= {pushque:"", render:"", relayout:"", remove:"", skinny:false},
			times		= {pushque:500, render:100, relayout:100, remove:30000};
		
		_id				= _id + data.uniqueid;
		this.enqueue	= _enqueue;
		this.id			= _id;
		
		element		=	VMM.appendAndGetElement(_parent, "<div>", "slider-item");
		c = {slide:"", text: "", media: "", media_element: "", layout: "content-container layout", has: { headline: false, text: false, media: false }};
		
		/* PUBLIC
		================================================== */
		this.show = function(skinny) {
			_enqueue = false;
			timer.skinny = skinny;
			_removeque = false;
			clearTimeout(timer.remove);
			
			if (!loaded) {
				if (preloaded) {
					clearTimeout(timer.relayout);
					timer.relayout = setTimeout(reloadLayout, times.relayout);
				} else {
					render(skinny);
				}
			}
		};
		
		this.hide = function() {
			if (loaded && !_removeque) {
				_removeque = true;
				clearTimeout(timer.remove);
				timer.remove = setTimeout(removeSlide, times.remove);
			}
		};
		
		this.clearTimers = function() {
			//clearTimeout(timer.remove);
			clearTimeout(timer.relayout);
			clearTimeout(timer.pushque);
			clearTimeout(timer.render);
		};
		
		this.layout = function(skinny) {
			if (loaded && preloaded) {
				reLayout(skinny);
			}
		};
		
		this.elem = function() {	
			return element;
		};
		
		this.position = function() {
			return VMM.Lib.position(element);
		};
		
		this.leftpos = function(p) {
			if(typeof p != 'undefined') {
				VMM.Lib.css(element, "left", p);
			} else {
				return VMM.Lib.position(element).left
			}
		};
		
		this.animate = function(d, e, p) {
			VMM.Lib.animate(element, d, e, p);
		};
		
		this.css = function(p, v) {
			VMM.Lib.css(element, p, v );
		}
		
		this.opacity = function(p) {
			VMM.Lib.css(element, "opacity", p);	
		}
		
		this.width = function() {
			return VMM.Lib.width(element);
		};
		
		this.height = function() {
			return VMM.Lib.height(element);
		};
		
		this.content_height = function () {
			var ch = VMM.Lib.find( element, ".content")[0];
			
			if (ch != 'undefined' && ch != null) {
				return VMM.Lib.height(ch);
			} else {
				return 0;
			}
		}
		
		/* PRIVATE
		================================================== */
		var render = function(skinny) {
			trace("RENDER " + _id);
			
			loaded = true;
			preloaded = true;
			timer.skinny = skinny;
			
			buildSlide();
			
			clearTimeout(timer.pushque);
			clearTimeout(timer.render);
			timer.pushque = setTimeout(VMM.ExternalAPI.pushQues, times.pushque);
			
		};
		
		var removeSlide = function() {
			//VMM.attachElement(element, "");
			trace("REMOVE SLIDE TIMER FINISHED");
			loaded = false;
			VMM.Lib.detach($text);
			VMM.Lib.detach($media);
			
		};
		
		var reloadLayout = function() {
			loaded = true;
			reLayout(timer.skinny, true);
		};
		
		var reLayout = function(skinny, reload) {
			if (c.has.text)	{
				if (skinny) {
					if (!is_skinny || reload) {
						VMM.Lib.removeClass($slide, "pad-left");
						VMM.Lib.detach($text);
						VMM.Lib.detach($media);
						VMM.Lib.append($slide, $text);
						VMM.Lib.append($slide, $media);
						is_skinny = true;
					} 
				} else {
					if (is_skinny || reload) {
						VMM.Lib.addClass($slide, "pad-left");
						VMM.Lib.detach($text);
						VMM.Lib.detach($media);
						VMM.Lib.append($slide, $media);
						VMM.Lib.append($slide, $text);
						is_skinny = false;
						
					} 
				}
			} else if (reload) {
				if (c.has.headline) {
					VMM.Lib.detach($text);
					VMM.Lib.append($slide, $text);
				}
				VMM.Lib.detach($media);
				VMM.Lib.append($slide, $media);
			}
		}
		
		var buildSlide = function() {
			trace("BUILDSLIDE");
			$wrap	= VMM.appendAndGetElement(element, "<div>", "content");
			$slide	= VMM.appendAndGetElement($wrap, "<div>");
			
			/* DATE
			================================================== */
			if (data.startdate != null && data.startdate != "") {
				if (type.of(data.startdate) == "date") {
					if (data.type != "start") {
						var st	= VMM.Date.prettyDate(data.startdate);
						var en	= VMM.Date.prettyDate(data.enddate);
						var tag	= "";
						/* TAG / CATEGORY
						================================================== */
						if (data.tag != null && data.tag != "") {
							tag		= VMM.createElement("span", data.tag, "slide-tag");
						}
						
						if (st != en) {
							c.text += VMM.createElement("h2", st + " &mdash; " + en + tag, "date");
						} else {
							c.text += VMM.createElement("h2", st + tag, "date");
						}
					}
				}
			}
			
			/* HEADLINE
			================================================== */
			if (data.headline != null && data.headline != "") {
				c.has.headline	=	true;
				if (data.type == "start") {
					c.text		+=	VMM.createElement("h2", VMM.Util.linkify_with_twitter(data.headline, "_blank"), "start");
				} else { 
					c.text		+=	VMM.createElement("h3", VMM.Util.linkify_with_twitter(data.headline, "_blank"));
				}
			}
			
			/* TEXT
			================================================== */
			if (data.text != null && data.text != "") {
				c.has.text		=  true;
				c.text			+= VMM.createElement("p", VMM.Util.linkify_with_twitter(data.text, "_blank"));
			}
			
			if (c.has.text || c.has.headline) {
				c.text		= VMM.createElement("div", c.text, "container");
				//$text		=	VMM.appendAndGetElement($slide, "<div>", "text", c.text);
				
				$text		= VMM.appendAndGetElement($slide, "<div>", "text", VMM.TextElement.create(c.text));
				
			}
			
			/* SLUG
			================================================== */
			if (data.needs_slug) {
				
			}
			
			/* MEDIA
			================================================== */
			if (data.asset != null && data.asset != "") {
				if (data.asset.media != null && data.asset.media != "") {
					c.has.media	= true;
					$media		= VMM.appendAndGetElement($slide, "<div>", "media", VMM.MediaElement.create(data.asset, data.uniqueid));
				}
			}
			
			/* COMBINE
			================================================== */
			if (c.has.text)	{ c.layout		+=	"-text"		};
			if (c.has.media){ c.layout		+=	"-media"	};

			if (c.has.text)	{
				if (timer.skinny) {
					VMM.Lib.addClass($slide, c.layout);
					is_skinny = true;
				} else {
					VMM.Lib.addClass($slide, c.layout);
					VMM.Lib.addClass($slide, "pad-left");
					VMM.Lib.detach($text);
					VMM.Lib.append($slide, $text);
				}
				
			} else {
				VMM.Lib.addClass($slide, c.layout);
			}
			
			
		};
		
	}
	
};


/*********************************************** 
     Begin AES.js 
***********************************************/ 

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  AES implementation in JavaScript (c) Chris Veness 2005-2011                                   */
/*   - see http://csrc.nist.gov/publications/PubsFIPS.html#197                                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

var Aes = {};  // Aes namespace

/**
 * AES Cipher function: encrypt 'input' state with Rijndael algorithm
 *   applies Nr rounds (10/12/14) using key schedule w for 'add round key' stage
 *
 * @param {Number[]} input 16-byte (128-bit) input state array
 * @param {Number[][]} w   Key schedule as 2D byte-array (Nr+1 x Nb bytes)
 * @returns {Number[]}     Encrypted output state array
 */
Aes.cipher = function(input, w) {    // main Cipher function [§5.1]
  var Nb = 4;               // block size (in words): no of columns in state (fixed at 4 for AES)
  var Nr = w.length/Nb - 1; // no of rounds: 10/12/14 for 128/192/256-bit keys

  var state = [[],[],[],[]];  // initialise 4xNb byte-array 'state' with input [§3.4]
  for (var i=0; i<4*Nb; i++) state[i%4][Math.floor(i/4)] = input[i];

  state = Aes.addRoundKey(state, w, 0, Nb);

  for (var round=1; round<Nr; round++) {
    state = Aes.subBytes(state, Nb);
    state = Aes.shiftRows(state, Nb);
    state = Aes.mixColumns(state, Nb);
    state = Aes.addRoundKey(state, w, round, Nb);
  }

  state = Aes.subBytes(state, Nb);
  state = Aes.shiftRows(state, Nb);
  state = Aes.addRoundKey(state, w, Nr, Nb);

  var output = new Array(4*Nb);  // convert state to 1-d array before returning [§3.4]
  for (var i=0; i<4*Nb; i++) output[i] = state[i%4][Math.floor(i/4)];
  return output;
}

/**
 * Perform Key Expansion to generate a Key Schedule
 *
 * @param {Number[]} key Key as 16/24/32-byte array
 * @returns {Number[][]} Expanded key schedule as 2D byte-array (Nr+1 x Nb bytes)
 */
Aes.keyExpansion = function(key) {  // generate Key Schedule (byte-array Nr+1 x Nb) from Key [§5.2]
  var Nb = 4;            // block size (in words): no of columns in state (fixed at 4 for AES)
  var Nk = key.length/4  // key length (in words): 4/6/8 for 128/192/256-bit keys
  var Nr = Nk + 6;       // no of rounds: 10/12/14 for 128/192/256-bit keys

  var w = new Array(Nb*(Nr+1));
  var temp = new Array(4);

  for (var i=0; i<Nk; i++) {
    var r = [key[4*i], key[4*i+1], key[4*i+2], key[4*i+3]];
    w[i] = r;
  }

  for (var i=Nk; i<(Nb*(Nr+1)); i++) {
    w[i] = new Array(4);
    for (var t=0; t<4; t++) temp[t] = w[i-1][t];
    if (i % Nk == 0) {
      temp = Aes.subWord(Aes.rotWord(temp));
      for (var t=0; t<4; t++) temp[t] ^= Aes.rCon[i/Nk][t];
    } else if (Nk > 6 && i%Nk == 4) {
      temp = Aes.subWord(temp);
    }
    for (var t=0; t<4; t++) w[i][t] = w[i-Nk][t] ^ temp[t];
  }

  return w;
}

/*
 * ---- remaining routines are private, not called externally ----
 */
 
Aes.subBytes = function(s, Nb) {    // apply SBox to state S [§5.1.1]
  for (var r=0; r<4; r++) {
    for (var c=0; c<Nb; c++) s[r][c] = Aes.sBox[s[r][c]];
  }
  return s;
}

Aes.shiftRows = function(s, Nb) {    // shift row r of state S left by r bytes [§5.1.2]
  var t = new Array(4);
  for (var r=1; r<4; r++) {
    for (var c=0; c<4; c++) t[c] = s[r][(c+r)%Nb];  // shift into temp copy
    for (var c=0; c<4; c++) s[r][c] = t[c];         // and copy back
  }          // note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
  return s;  // see asmaes.sourceforge.net/rijndael/rijndaelImplementation.pdf
}

Aes.mixColumns = function(s, Nb) {   // combine bytes of each col of state S [§5.1.3]
  for (var c=0; c<4; c++) {
    var a = new Array(4);  // 'a' is a copy of the current column from 's'
    var b = new Array(4);  // 'b' is a•{02} in GF(2^8)
    for (var i=0; i<4; i++) {
      a[i] = s[i][c];
      b[i] = s[i][c]&0x80 ? s[i][c]<<1 ^ 0x011b : s[i][c]<<1;

    }
    // a[n] ^ b[n] is a•{03} in GF(2^8)
    s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3]; // 2*a0 + 3*a1 + a2 + a3
    s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3]; // a0 * 2*a1 + 3*a2 + a3
    s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3]; // a0 + a1 + 2*a2 + 3*a3
    s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3]; // 3*a0 + a1 + a2 + 2*a3
  }
  return s;
}

Aes.addRoundKey = function(state, w, rnd, Nb) {  // xor Round Key into state S [§5.1.4]
  for (var r=0; r<4; r++) {
    for (var c=0; c<Nb; c++) state[r][c] ^= w[rnd*4+c][r];
  }
  return state;
}

Aes.subWord = function(w) {    // apply SBox to 4-byte word w
  for (var i=0; i<4; i++) w[i] = Aes.sBox[w[i]];
  return w;
}

Aes.rotWord = function(w) {    // rotate 4-byte word w left by one byte
  var tmp = w[0];
  for (var i=0; i<3; i++) w[i] = w[i+1];
  w[3] = tmp;
  return w;
}

// sBox is pre-computed multiplicative inverse in GF(2^8) used in subBytes and keyExpansion [§5.1.1]
Aes.sBox =  [0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
             0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
             0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
             0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
             0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
             0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
             0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
             0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
             0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
             0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
             0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
             0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
             0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
             0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
             0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
             0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16];

// rCon is Round Constant used for the Key Expansion [1st col is 2^(r-1) in GF(2^8)] [§5.2]
Aes.rCon = [ [0x00, 0x00, 0x00, 0x00],
             [0x01, 0x00, 0x00, 0x00],
             [0x02, 0x00, 0x00, 0x00],
             [0x04, 0x00, 0x00, 0x00],
             [0x08, 0x00, 0x00, 0x00],
             [0x10, 0x00, 0x00, 0x00],
             [0x20, 0x00, 0x00, 0x00],
             [0x40, 0x00, 0x00, 0x00],
             [0x80, 0x00, 0x00, 0x00],
             [0x1b, 0x00, 0x00, 0x00],
             [0x36, 0x00, 0x00, 0x00] ]; 


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  AES Counter-mode implementation in JavaScript (c) Chris Veness 2005-2011                      */
/*   - see http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

Aes.Ctr = {};  // Aes.Ctr namespace: a subclass or extension of Aes

/** 
 * Encrypt a text using AES encryption in Counter mode of operation
 *
 * Unicode multi-byte character safe
 *
 * @param {String} plaintext Source text to be encrypted
 * @param {String} password  The password to use to generate a key
 * @param {Number} nBits     Number of bits to be used in the key (128, 192, or 256)
 * @returns {string}         Encrypted text
 */
Aes.Ctr.encrypt = function(plaintext, password, nBits) {
  var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
  if (!(nBits==128 || nBits==192 || nBits==256)) return '';  // standard allows 128/192/256 bit keys
  plaintext = Utf8.encode(plaintext);
  password = Utf8.encode(password);
  //var t = new Date();  // timer
	
  // use AES itself to encrypt password to get cipher key (using plain password as source for key 
  // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)
  var nBytes = nBits/8;  // no bytes in key (16/24/32)
  var pwBytes = new Array(nBytes);
  for (var i=0; i<nBytes; i++) {  // use 1st 16/24/32 chars of password for key
    pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
  }
  var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes));  // gives us 16-byte key
  key = key.concat(key.slice(0, nBytes-16));  // expand key to 16/24/32 bytes long

  // initialise 1st 8 bytes of counter block with nonce (NIST SP800-38A §B.2): [0-1] = millisec, 
  // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106
  var counterBlock = new Array(blockSize);
  
  var nonce = (new Date()).getTime();  // timestamp: milliseconds since 1-Jan-1970
  var nonceMs = nonce%1000;
  var nonceSec = Math.floor(nonce/1000);
  var nonceRnd = Math.floor(Math.random()*0xffff);
  
  for (var i=0; i<2; i++) counterBlock[i]   = (nonceMs  >>> i*8) & 0xff;
  for (var i=0; i<2; i++) counterBlock[i+2] = (nonceRnd >>> i*8) & 0xff;
  for (var i=0; i<4; i++) counterBlock[i+4] = (nonceSec >>> i*8) & 0xff;
  
  // and convert it to a string to go on the front of the ciphertext
  var ctrTxt = '';
  for (var i=0; i<8; i++) ctrTxt += String.fromCharCode(counterBlock[i]);

  // generate key schedule - an expansion of the key into distinct Key Rounds for each round
  var keySchedule = Aes.keyExpansion(key);
  
  var blockCount = Math.ceil(plaintext.length/blockSize);
  var ciphertxt = new Array(blockCount);  // ciphertext as array of strings
  
  for (var b=0; b<blockCount; b++) {
    // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
    // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
    for (var c=0; c<4; c++) counterBlock[15-c] = (b >>> c*8) & 0xff;
    for (var c=0; c<4; c++) counterBlock[15-c-4] = (b/0x100000000 >>> c*8)

    var cipherCntr = Aes.cipher(counterBlock, keySchedule);  // -- encrypt counter block --
    
    // block size is reduced on final block
    var blockLength = b<blockCount-1 ? blockSize : (plaintext.length-1)%blockSize+1;
    var cipherChar = new Array(blockLength);
    
    for (var i=0; i<blockLength; i++) {  // -- xor plaintext with ciphered counter char-by-char --
      cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b*blockSize+i);
      cipherChar[i] = String.fromCharCode(cipherChar[i]);
    }
    ciphertxt[b] = cipherChar.join(''); 
  }

  // Array.join is more efficient than repeated string concatenation in IE
  var ciphertext = ctrTxt + ciphertxt.join('');
  ciphertext = Base64.encode(ciphertext);  // encode in base64
  
  //alert((new Date()) - t);
  return ciphertext;
}

/** 
 * Decrypt a text encrypted by AES in counter mode of operation
 *
 * @param {String} ciphertext Source text to be encrypted
 * @param {String} password   The password to use to generate a key
 * @param {Number} nBits      Number of bits to be used in the key (128, 192, or 256)
 * @returns {String}          Decrypted text
 */
Aes.Ctr.decrypt = function(ciphertext, password, nBits) {
  var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
  if (!(nBits==128 || nBits==192 || nBits==256)) return '';  // standard allows 128/192/256 bit keys
  ciphertext = Base64.decode(ciphertext);
  password = Utf8.encode(password);
  //var t = new Date();  // timer
  
  // use AES to encrypt password (mirroring encrypt routine)
  var nBytes = nBits/8;  // no bytes in key
  var pwBytes = new Array(nBytes);
  for (var i=0; i<nBytes; i++) {
    pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
  }
  var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes));
  key = key.concat(key.slice(0, nBytes-16));  // expand key to 16/24/32 bytes long

  // recover nonce from 1st 8 bytes of ciphertext
  var counterBlock = new Array(8);
  ctrTxt = ciphertext.slice(0, 8);
  for (var i=0; i<8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);
  
  // generate key schedule
  var keySchedule = Aes.keyExpansion(key);

  // separate ciphertext into blocks (skipping past initial 8 bytes)
  var nBlocks = Math.ceil((ciphertext.length-8) / blockSize);
  var ct = new Array(nBlocks);
  for (var b=0; b<nBlocks; b++) ct[b] = ciphertext.slice(8+b*blockSize, 8+b*blockSize+blockSize);
  ciphertext = ct;  // ciphertext is now array of block-length strings

  // plaintext will get generated block-by-block into array of block-length strings
  var plaintxt = new Array(ciphertext.length);

  for (var b=0; b<nBlocks; b++) {
    // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
    for (var c=0; c<4; c++) counterBlock[15-c] = ((b) >>> c*8) & 0xff;
    for (var c=0; c<4; c++) counterBlock[15-c-4] = (((b+1)/0x100000000-1) >>> c*8) & 0xff;

    var cipherCntr = Aes.cipher(counterBlock, keySchedule);  // encrypt counter block

    var plaintxtByte = new Array(ciphertext[b].length);
    for (var i=0; i<ciphertext[b].length; i++) {
      // -- xor plaintxt with ciphered counter byte-by-byte --
      plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b].charCodeAt(i);
      plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
    }
    plaintxt[b] = plaintxtByte.join('');
  }

  // join array of blocks into single plaintext string
  var plaintext = plaintxt.join('');
  plaintext = Utf8.decode(plaintext);  // decode from UTF8 back to Unicode multi-byte chars
  
  //alert((new Date()) - t);
  return plaintext;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Base64 class: Base 64 encoding / decoding (c) Chris Veness 2002-2011                          */
/*    note: depends on Utf8 class                                                                 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

var Base64 = {};  // Base64 namespace

Base64.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

/**
 * Encode string into Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
 * (instance method extending String object). As per RFC 4648, no newlines are added.
 *
 * @param {String} str The string to be encoded as base-64
 * @param {Boolean} [utf8encode=false] Flag to indicate whether str is Unicode string to be encoded 
 *   to UTF8 before conversion to base64; otherwise string is assumed to be 8-bit characters
 * @returns {String} Base64-encoded string
 */ 
Base64.encode = function(str, utf8encode) {  // http://tools.ietf.org/html/rfc4648
  utf8encode =  (typeof utf8encode == 'undefined') ? false : utf8encode;
  var o1, o2, o3, bits, h1, h2, h3, h4, e=[], pad = '', c, plain, coded;
  var b64 = Base64.code;
   
  plain = utf8encode ? str.encodeUTF8() : str;
  
  c = plain.length % 3;  // pad string to length of multiple of 3
  if (c > 0) { while (c++ < 3) { pad += '='; plain += '\0'; } }
  // note: doing padding here saves us doing special-case packing for trailing 1 or 2 chars
   
  for (c=0; c<plain.length; c+=3) {  // pack three octets into four hexets
    o1 = plain.charCodeAt(c);
    o2 = plain.charCodeAt(c+1);
    o3 = plain.charCodeAt(c+2);
      
    bits = o1<<16 | o2<<8 | o3;
      
    h1 = bits>>18 & 0x3f;
    h2 = bits>>12 & 0x3f;
    h3 = bits>>6 & 0x3f;
    h4 = bits & 0x3f;

    // use hextets to index into code string
    e[c/3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  }
  coded = e.join('');  // join() is far faster than repeated string concatenation in IE
  
  // replace 'A's from padded nulls with '='s
  coded = coded.slice(0, coded.length-pad.length) + pad;
   
  return coded;
}

/**
 * Decode string from Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
 * (instance method extending String object). As per RFC 4648, newlines are not catered for.
 *
 * @param {String} str The string to be decoded from base-64
 * @param {Boolean} [utf8decode=false] Flag to indicate whether str is Unicode string to be decoded 
 *   from UTF8 after conversion from base64
 * @returns {String} decoded string
 */ 
Base64.decode = function(str, utf8decode) {
  utf8decode =  (typeof utf8decode == 'undefined') ? false : utf8decode;
  var o1, o2, o3, h1, h2, h3, h4, bits, d=[], plain, coded;
  var b64 = Base64.code;

  coded = utf8decode ? str.decodeUTF8() : str;
  
  
  for (var c=0; c<coded.length; c+=4) {  // unpack four hexets into three octets
    h1 = b64.indexOf(coded.charAt(c));
    h2 = b64.indexOf(coded.charAt(c+1));
    h3 = b64.indexOf(coded.charAt(c+2));
    h4 = b64.indexOf(coded.charAt(c+3));
      
    bits = h1<<18 | h2<<12 | h3<<6 | h4;
      
    o1 = bits>>>16 & 0xff;
    o2 = bits>>>8 & 0xff;
    o3 = bits & 0xff;
    
    d[c/4] = String.fromCharCode(o1, o2, o3);
    // check for padding
    if (h4 == 0x40) d[c/4] = String.fromCharCode(o1, o2);
    if (h3 == 0x40) d[c/4] = String.fromCharCode(o1);
  }
  plain = d.join('');  // join() is far faster than repeated string concatenation in IE
   
  return utf8decode ? plain.decodeUTF8() : plain; 
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Utf8 class: encode / decode between multi-byte Unicode characters and UTF-8 multiple          */
/*              single-byte character encoding (c) Chris Veness 2002-2011                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

var Utf8 = {};  // Utf8 namespace

/**
 * Encode multi-byte Unicode string into utf-8 multiple single-byte characters 
 * (BMP / basic multilingual plane only)
 *
 * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
 *
 * @param {String} strUni Unicode string to be encoded as UTF-8
 * @returns {String} encoded string
 */
Utf8.encode = function(strUni) {
  // use regular expressions & String.replace callback function for better efficiency 
  // than procedural approaches
  var strUtf = strUni.replace(
      /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
      function(c) { 
        var cc = c.charCodeAt(0);
        return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f); }
    );
  strUtf = strUtf.replace(
      /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
      function(c) { 
        var cc = c.charCodeAt(0); 
        return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f); }
    );
  return strUtf;
}

/**
 * Decode utf-8 encoded string back into multi-byte Unicode characters
 *
 * @param {String} strUtf UTF-8 string to be decoded back to Unicode
 * @returns {String} decoded string
 */
Utf8.decode = function(strUtf) {
  // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
  var strUni = strUtf.replace(
      /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
      function(c) {  // (note parentheses for precence)
        var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f); 
        return String.fromCharCode(cc); }
    );
  strUni = strUni.replace(
      /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
      function(c) {  // (note parentheses for precence)
        var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
        return String.fromCharCode(cc); }
    );
  return strUni;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/*********************************************** 
     Begin bootstrap-tooltip.js 
***********************************************/ 

/* ===========================================================
 * bootstrap-tooltip.js v2.0.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function( $ ) {

  "use strict"

 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function ( element, options ) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function ( type, element, options ) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger != 'manual') {
        eventIn  = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function ( options ) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function ( e ) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) {
        self.show()
      } else {
        self.hoverState = 'in'
        setTimeout(function() {
          if (self.hoverState == 'in') {
            self.show()
          }
        }, self.options.delay.show)
      }
    }

  , leave: function ( e ) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.hide) {
        self.hide()
      } else {
        self.hoverState = 'out'
        setTimeout(function() {
          if (self.hoverState == 'out') {
            self.hide()
          }
        }, self.options.delay.hide)
      }
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
      $tip.find('.tooltip-inner').html(this.getTitle())
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      title = title.toString().replace(/(^\s*|\s*$)/, "")

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , delay: 0
  , selector: false
  , placement: 'top'
  , trigger: 'hover'
  , title: ''
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  }

}( window.jQuery );

/*********************************************** 
     Begin VMM.StoryJS.js 
***********************************************/ 

/* VeriteCo StoryJS
================================================== */

/*	* CodeKit Import
	* http://incident57.com/codekit/
================================================== */
// @codekit-prepend "VMM.StoryJS.License.js";
// @codekit-prepend "Core/VMM.Core.js";
// @codekit-prepend "Language/VMM.Language.js";
// @codekit-prepend "Media/VMM.Media.js";
// @codekit-prepend "Slider/VMM.DragSlider.js";
// @codekit-prepend "Slider/VMM.Slider.js";
// @codekit-prepend "Library/AES.js";
// @codekit-prepend "Library/bootstrap-tooltip.js";


if(typeof VMM != 'undefined' && typeof VMM.StoryJS == 'undefined') {
	
	VMM.StoryJS = function() {  
		
		/* PRIVATE VARS
		================================================== */
		
		/* PUBLIC FUNCTIONS
		================================================== */
		this.init = function(d) {
			
		};
		
	}
}


/*********************************************** 
     Begin VMM.SliderJS.js 
***********************************************/ 

/**
	* SliderJS
	* Designed and built by Zach Wise at VéritéCo

	* This Source Code Form is subject to the terms of the Mozilla Public
	* License, v. 2.0. If a copy of the MPL was not distributed with this
	* file, You can obtain one at http://mozilla.org/MPL/2.0/.

*/ 

/*	* CodeKit Import
	* http://incident57.com/codekit/
================================================== */
// @codekit-prepend "VMM.SliderJS.License.js";
// @codekit-prepend "Core/VMM.StoryJS.js";


/* SliderJS
================================================== */

if(typeof VMM != 'undefined' && typeof VMM.SliderJS == 'undefined') {
	
	VMM.SliderJS = function(_main_id, w, h) {
		
		var $main,
			$feedback,
			slider,
			timenav,
			version		= "0.11",
			main_id		= "#sliderjs",
			events		= {},
			data		= {},
			config		= {},
			has_width	= false,
			has_height	= false,
			ie7			= false,
			is_moving	= false;
		

		if (type.of(_main_id) == "string") {
			if (_main_id.match("#")) {
				main_id	= _main_id;
			} else {
				main_id	= "#" + _main_id;
			}
		}
		
		trace("VERSION " + version);
		
		/* CONFIG
		================================================== */
		config = {
			embed:					false,
			events: {
				data_ready:			"DATAREADY",
				messege:			"MESSEGE",
				headline:			"HEADLINE",
				slide_change:		"SLIDE_CHANGE",
				resize:				"resize"
			},
			id: 					main_id,
			type: 					"sliderjs",
			touch:					false,
			maptype: 				"toner",
			preload:				4,
			current_slide:			0,
			hash_bookmark:			false,
			start_at_end: 			false,
			start_at_slide:			0,
			start_page: 			false,
			api_keys: {
				google:				"",
				flickr:				"",
				twitter:			""
			},
			interval: 				10,
			width: 					960,
			height: 				540,
			spacing: 				15,
			loaded: {
				slider: 			false,
				navigation:			false,
				percentloaded: 		0
			},
			nav: {
				types:				["bullet", "thumb-small", "thumb-large", "none"],
				thumb: {
					width:			50,
					height:			50,
					padding:		2
				},
				spacing: 			10,
				constraint: {
					left:			0,
					right:			0,
					right_min:		0,
					right_max:		0
				},
				width: 				960,
				height: 			0
			},
			feature: {
				width: 				960,
				height: 			540
			},
			slider: {
				width: 				960,
				height: 			540,
				content: {
					width: 			720,
					height: 		400,
					padding: 		100
				},
				nav: {
					width: 			100,
					height: 		200
				}
			},
			ease: 					"easeInOutExpo",
			duration: 				1000,
			language: 				VMM.Language
		};
		
		if ( w != null && w != "") {
			config.width = w;
			has_width = true;
		} 

		if ( h != null && h != "") {
			config.height = h;
			has_height = true;
		}
		
		if(window.location.hash) {
			 var hash					=	window.location.hash.substring(1);
			 if (!isNaN(hash)) {
			 	 config.current_slide	=	parseInt(hash);
			 }
		}
		
		window.onhashchange = function () {
			var hash					=	window.location.hash.substring(1);
			if (config.hash_bookmark) {
				if (is_moving) {
					goToEvent(parseInt(hash));
				} else {
					is_moving = false;
				}
			} else {
				goToEvent(parseInt(hash));
			}
		}
		
		/* CREATE CONFIG
		================================================== */
		function createConfig(conf) {
			
			// APPLY SUPPLIED CONFIG TO TIMELINE CONFIG
			if (typeof embed_config == 'object') {
				config = embed_config;
			}
			if (typeof conf == 'object') {
				config = VMM.Util.mergeConfig(config, conf);
			}
			
			if (VMM.Browser.device == "mobile" || VMM.Browser.device == "tablet") {
				config.touch = true;
			}
			
			config.nav.width			= config.width;
			config.feature.width		= config.width;
			config.feature.height		= config.height - config.nav.height;
			VMM.master_config.StoryJS	= config;
			this.events					= config.events;
			
		}
		
		/* CREATE TIMELINE STRUCTURE
		================================================== */
		function createStructure() {
			
			// CREATE DOM STRUCTURE
			$main	= VMM.getElement(main_id);
			VMM.Lib.addClass($main, "vco-sliderjs");
			VMM.Lib.addClass($main, "vco-storyjs");
			
			$container	= VMM.appendAndGetElement($main, "<div>", "vco-container vco-main");
			$feature	= VMM.appendAndGetElement($container, "<div>", "vco-feature");
			$slider		= VMM.appendAndGetElement($feature, "<div>", "vco-slider");
			$navigation	= VMM.appendAndGetElement($container, "<div>", "vco-navigation");
			$feedback	= VMM.appendAndGetElement($main, "<div>", "vco-feedback", "");
			
			if (config.touch) {
				VMM.Lib.addClass($main, "vco-touch");
			} else {
				VMM.Lib.addClass($main, "vco-notouch");
			}
			
			if (typeof config.language.right_to_left != 'undefined') {
				VMM.Lib.addClass($main, "vco-right-to-left");
			}
			
			
			slider		= new VMM.Slider($slider, config);
			
			if (!has_width) {
				config.width = VMM.Lib.width($main);
			} else {
				VMM.Lib.width($main, config.width);
			}

			if (!has_height) {
				config.height = VMM.Lib.height($main);
			} else {
				VMM.Lib.height($main, config.height);
			}
			
		}
		
		/* ON EVENT
		================================================== */

		function onDataReady(e, d) {
			trace("onDataReady");
			trace(d);
			data = d;
			
			build();
			
		};
		
		function reSize() {
			updateSize();
			slider.setSize(config.feature.width, config.feature.height);
		};
		
		/* ON LOADED
		================================================== */
		function onSliderLoaded(e) {
			config.loaded.slider = true;
			onComponentLoaded();
		};
		
		function onNavLoaded(e) {
			config.loaded.navigation = true;
			onComponentLoaded();
		};
		
		function onComponentLoaded(e) {
			config.loaded.percentloaded = config.loaded.percentloaded + 25;
			config.loaded.navigation = true;
			if (config.loaded.slider && config.loaded.navigation) {
				hideMessege();
			}
		}
		
		/* ON UPDATE
		================================================== */
		function onSlideUpdate(e) {
			is_moving = true;
			config.current_slide = slider.getCurrentNumber();
			setHash(config.current_slide);
		};
		
		function onNavUpdate(e) {
			is_moving = true;
			config.current_slide = slider.getCurrentNumber();
			setHash(config.current_slide);
		};
		
		function setHash(n) {
			if (config.hash_bookmark) {
				window.location.hash = "#" + n.toString();
			}
		}
		
		/* PUBLIC FUNCTIONS
		================================================== */
		this.init = function(conf, _data, _main_id) {
			trace('INIT');
			
			if (type.of(_main_id) == "string") {
				if (_main_id.match("#")) {
					main_id = _main_id;
				} else {
					main_id = "#" + _main_id;
				}
			}
			
			createConfig(conf);
			createStructure();
			
			if (type.of(_data) == "string") {
				config.source	= _data;
			}
			
			// LANGUAGE
			VMM.Date.setLanguage(config.language);
			VMM.master_config.language = config.language;
			
			// EXTERNAL API
			VMM.ExternalAPI.setKeys(config.api_keys);
			VMM.ExternalAPI.googlemaps.setMapType(config.maptype);
			
			// EVENTS
			VMM.bindEvent($main, onDataReady, config.events.data_ready);
			VMM.bindEvent($main, showMessege, config.events.messege);
			
			VMM.fireEvent($main, config.events.messege, "LOADING");
			
			/* GET DATA
			================================================== */
			if (VMM.Browser.browser == "Explorer" || VMM.Browser.browser == "MSIE") {
				if ( parseInt(VMM.Browser.version, 10) <= 7 ) {
					ie7 = true;
				}
			}
			
			if (type.of(config.source) == "string" || type.of(config.source) == "object") {
				//VMM.DataObj.getData(config.source);
				getData(config.source);
			} else {
				//VMM.DataObj.getData(VMM.getElement(timeline_id));
			}
			
			
		};
		
		this.reload = function(_d) {
			trace("loadNewDates" + _d);
			VMM.fireEvent($main, config.events.messege, config.language.messages.loading_timeline);
			data = {};
			//VMM.DataObj.getData(_d);
		};
		
		/* DATA 
		================================================== */
		function getData(url) {
			VMM.getJSON(url, function(d) {
				//data = VMM.DataObj.getData(d);
				prepareData(d);
				
			});
		};
		
		function prepareData(d) {
			var i	= 0,
				pd	= d.sliderjs;
			
			for(i = 0; i < pd.slides.length; i++) {
				pd.slides[i].uniqueid = VMM.Util.unique_ID(7);
			}
			
			VMM.fireEvent($main, config.events.data_ready, pd);
		}
		/* MESSEGES 
		================================================== */
		function showMessege(e, msg) {
			trace("showMessege " + msg);
			//VMM.attachElement($messege, msg);
			VMM.attachElement($feedback, VMM.MediaElement.loadingmessage(msg)); 
		};
		
		function hideMessege() {
			VMM.Lib.animate($feedback, config.duration, config.ease*4, {"opacity": 0}, detachMessege);
		};
		
		function detachMessege() {
			VMM.Lib.detach($feedback);
		}
		
		/* BUILD DISPLAY
		================================================== */
		function build() {
			
			// START AT SLIDE
			if (parseInt(config.start_at_slide) > 0 && config.current_slide == 0) {
				config.current_slide = parseInt(config.start_at_slide); 
			}
			// START AT END
			if (config.start_at_end && config.current_slide == 0) {
				config.current_slide = _dates.length - 1;
			}
			
			
			// IE7
			if (ie7) {
				ie7 = true;
				VMM.fireEvent($main, config.events.messege, "Internet Explorer " + VMM.Browser.version + " is not supported. Please update your browser to version 8 or higher.");
			} else {
				detachMessege();
				reSize();
				
				// EVENT LISTENERS
				VMM.bindEvent($slider, onSliderLoaded, "LOADED");
				VMM.bindEvent($navigation, onNavLoaded, "LOADED");
				VMM.bindEvent($slider, onSlideUpdate, "UPDATE");
				VMM.bindEvent($navigation, onNavUpdate, "UPDATE");
			
				// RESIZE EVENT LISTENERS
				VMM.bindEvent(global, reSize, config.events.resize);
				
				// INITIALIZE COMPONENTS
				slider.init(data.slides);
			}
			
			
		};
		
		function ie7Build() {
			trace("IE7 or lower");

		};
		
		function updateSize() {
			trace("UPDATE SIZE");
			config.width			= VMM.Lib.width($main);
			config.height			= VMM.Lib.height($main);
			
			config.nav.width		= config.width;
			config.feature.width	= config.width;
			
			config.feature.height	= config.height - config.nav.height - 3;
		};
		
	};
	
};

/*********************************************** 
     Begin VMM.SliderJS.Min.js 
***********************************************/ 

/**
	* SliderJS Minified
	* Designed and built by Zach Wise at VéritéCo

	* This Source Code Form is subject to the terms of the Mozilla Public
	* License, v. 2.0. If a copy of the MPL was not distributed with this
	* file, You can obtain one at http://mozilla.org/MPL/2.0/.

*/  

/* 	CodeKit Import
	http://incident57.com/codekit/
================================================== */
// @codekit-prepend "VMM.SliderJS.js";

VMM.debug = false;