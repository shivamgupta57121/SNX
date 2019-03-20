(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 2000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
	var myDropdown = document.getElementById("myDropdown");
	  if (myDropdown.classList.contains('show')) {
		myDropdown.classList.remove('show');
	  }
	}
  }



////for networkx page

/* When the user clicks on the arrow down open the list */ 
function myClg() {
	document.getElementById("subnavclg").classList.toggle("show");
	document.getElementById("subnavyear").classList.remove("show");
	document.getElementById("subnavbat").classList.remove("show");
	document.getElementById("subnavspec").classList.remove("show");
	document.getElementById("subnavdept").classList.remove("show");
  }

function myDept() {
	document.getElementById("subnavdept").classList.toggle("show");
	document.getElementById("subnavbat").classList.remove("show");
	document.getElementById("subnavspec").classList.remove("show");
  }

function mySpec() {
	document.getElementById("subnavspec").classList.toggle("show");
	document.getElementById("subnavbat").classList.remove("show");
  }

function myBatch() {
	document.getElementById("subnavbat").classList.toggle("show");
	}
	
function myYear(){
	document.getElementById("subnavyear").classList.toggle("show");
	document.getElementById("subnavclg").classList.remove("show");
	document.getElementById("subnavbat").classList.remove("show");
	document.getElementById("subnavspec").classList.remove("show");
	document.getElementById("subnavdept").classList.remove("show");
  }
  
