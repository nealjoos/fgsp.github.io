!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(o){"use strict";function e(t,i){function e(t){void 0!==t.open&&(t.open=!t.open)}var n=function(t){for(var i=[],e=t.parentNode;(n=e)&&(0===n.offsetWidth||0===n.offsetHeight||!1===n.open);)i.push(e),e=e.parentNode;var n;return i}(t),s=n.length,o=[],r=t[i];if(s){for(var h=0;h<s;h++)o[h]=n[h].style.cssText,n[h].style.setProperty?n[h].style.setProperty("display","block","important"):n[h].style.cssText+=";display: block !important",n[h].style.height="0",n[h].style.overflow="hidden",n[h].style.visibility="hidden",e(n[h]);r=t[i];for(var a=0;a<s;a++)n[a].style.cssText=o[a],e(n[a])}return r}function n(t,i){var e=parseFloat(t);return Number.isNaN(e)?i:e}function s(t){return t.charAt(0).toUpperCase()+t.substr(1)}function r(t,i){if(this.$window=o(window),this.$document=o(document),this.$element=o(t),this.options=o.extend({},d,i),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=u.orientation[this.orientation].dimension,this.DIRECTION=u.orientation[this.orientation].direction,this.DIRECTION_STYLE=u.orientation[this.orientation].directionStyle,this.COORDINATE=u.orientation[this.orientation].coordinate,this.polyfill&&l)return!1;this.identifier="js-"+h+"-"+a++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=o('<div class="'+this.options.fillClass+'" />'),this.$handle=o('<div class="'+this.options.handleClass+'" />'),this.$range=o('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=o.proxy(this.handleDown,this),this.handleMove=o.proxy(this.handleMove,this),this.handleEnd=o.proxy(this.handleEnd,this),this.init();var e,n,s=this;this.$window.on("resize."+this.identifier,(e=function(){!function(t,i){var e=Array.prototype.slice.call(arguments,2);setTimeout(function(){return t.apply(null,e)},i)}(function(){s.update(!1,!1)},300)},n=(n=20)||100,function(){if(!e.debouncing){var t=Array.prototype.slice.apply(arguments);e.lastReturnVal=e.apply(window,t),e.debouncing=!0}return clearTimeout(e.debounceTimeout),e.debounceTimeout=setTimeout(function(){e.debouncing=!1},n),e.lastReturnVal})),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(t,i){if(!i||i.origin!==s.identifier){var e=t.target.value,n=s.getPositionFromValue(e);s.setPosition(n)}})}Number.isNaN=Number.isNaN||function(t){return"number"==typeof t&&t!=t};var t,h="rangeslider",a=0,l=((t=document.createElement("input")).setAttribute("type","range"),"text"!==t.type),d={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},u={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return r.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},r.prototype.update=function(t,i){(t=t||!1)&&(this.min=n(this.$element[0].getAttribute("min"),0),this.max=n(this.$element[0].getAttribute("max"),100),this.value=n(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=n(this.$element[0].getAttribute("step"),1)),this.handleDimension=e(this.$handle[0],"offset"+s(this.DIMENSION)),this.rangeDimension=e(this.$range[0],"offset"+s(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,i)},r.prototype.handleDown=function(t){if(t.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),!(-1<(" "+t.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass))){var i=this.getRelativePosition(t),e=this.$range[0].getBoundingClientRect()[this.DIRECTION],n=this.getPositionFromNode(this.$handle[0])-e,s="vertical"===this.orientation?this.maxHandlePos-(i-this.grabPos):i-this.grabPos;this.setPosition(s),n<=i&&i<n+this.handleDimension&&(this.grabPos=i-n)}},r.prototype.handleMove=function(t){t.preventDefault();var i=this.getRelativePosition(t),e="vertical"===this.orientation?this.maxHandlePos-(i-this.grabPos):i-this.grabPos;this.setPosition(e)},r.prototype.handleEnd=function(t){t.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},r.prototype.cap=function(t,i,e){return t<i?i:e<t?e:t},r.prototype.setPosition=function(t,i){var e,n;void 0===i&&(i=!0),e=this.getValueFromPosition(this.cap(t,0,this.maxHandlePos)),n=this.getPositionFromValue(e),this.$fill[0].style[this.DIMENSION]=n+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=n+"px",this.setValue(e),this.position=n,this.value=e,i&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(n,e)},r.prototype.getPositionFromNode=function(t){for(var i=0;null!==t;)i+=t.offsetLeft,t=t.offsetParent;return i},r.prototype.getRelativePosition=function(t){var i=s(this.COORDINATE),e=this.$range[0].getBoundingClientRect()[this.DIRECTION],n=0;return void 0!==t.originalEvent["client"+i]?n=t.originalEvent["client"+i]:t.originalEvent.touches&&t.originalEvent.touches[0]&&void 0!==t.originalEvent.touches[0]["client"+i]?n=t.originalEvent.touches[0]["client"+i]:t.currentPoint&&void 0!==t.currentPoint[this.COORDINATE]&&(n=t.currentPoint[this.COORDINATE]),n-e},r.prototype.getPositionFromValue=function(t){var i;return i=(t-this.min)/(this.max-this.min),Number.isNaN(i)?0:i*this.maxHandlePos},r.prototype.getValueFromPosition=function(t){var i,e;return i=t/(this.maxHandlePos||1),e=this.step*Math.round(i*(this.max-this.min)/this.step)+this.min,Number(e.toFixed(this.toFixed))},r.prototype.setValue=function(t){t===this.value&&""!==this.$element[0].value||this.$element.val(t).trigger("input",{origin:this.identifier})},r.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+h),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},o.fn[h]=function(e){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=o(this),i=t.data("plugin_"+h);i||t.data("plugin_"+h,i=new r(this,e)),"string"==typeof e&&i[e].apply(i,n)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});