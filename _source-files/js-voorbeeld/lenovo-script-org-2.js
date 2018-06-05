/* code to make the image maps responsive */
;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;

		var rwdImageMap = function() {
			$img.each(function() {
				if (typeof($(this).attr('usemap')) == 'undefined')
					return;

				var that = this,
					$that = $(that);

				// Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
				$('<img />').on('load', function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);

					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w)
							w = temp.width;
						if (!h)
							h = temp.height;
					}

					var wPercent = $that.width()/100,
						hPercent = $that.height()/100,
						map = $that.attr('usemap').replace('#', ''),
						c = 'coords';

					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						if (!$this.data(c))
							$this.data(c, $this.attr(c));

						var coords = $this.data(c).split(','),
							coordsPercent = new Array(coords.length);

						for (var i = 0; i < coordsPercent.length; ++i) {
							if (i % 2 === 0)
								coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
							else
								coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
						}
						$this.attr(c, coordsPercent.toString());
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');

		return this;
	};
})(jQuery);

$(function() {
    $('img[usemap]').rwdImageMaps(); // function to call the code above to make the map images responsive 
});	

window.onload = function(){
	
	if(!document.getElementById) return false; // check wehter js is enabled
	if(!document.getElementById('navigation')) return false; // check if there is an id navigation
	
	// if js is working remove the standard message
	document.getElementById('jsDisabled').remove();

	// set the hover state of the buttons
	var buttons = document.getElementsByClassName('button');
	var images = document.getElementsByTagName('img');
	var links = document.querySelectorAll('nav a');
	
	var hoverP = document.createElement('p');
	hoverP.setAttribute('class', 'hoverPoppup');
	var hoverSpan = document.createElement('span');
	
	hoverP.appendChild(hoverSpan);

	function hoverButtons() {
		for(var i=0; i<3; i++) {
			images[i].addEventListener('mouseover', function(event) {
				for(var j=0; j<3; j++) {
					if(event.target == images[j]) {
						var titleText = images[j].title;
						hoverSpan.textContent = titleText;
						links[j].appendChild(hoverP);
						// buttonsDown();
					}
				} 
			}, false);
		}
	}

	// buttonsDown();

	function buttonsDown() {
		if(document.getElementById('navigation')) {
			var topButton = document.getElementById('navigation');
			var pos = -80; 
			var id = setInterval(down, 15);
			function down() { 
				if(pos == -5) {
					clearInterval(id);
					// buttonsUp();
					} else {
						pos++;
						topButton.style.marginTop = pos + 'px';
				}
			}
		}
	}
	
	function buttonsUp() {
		if(document.getElementById('navigation')) {
			var topButton = document.getElementById('navigation');
			var pos = -5; 
			var id = setInterval(up, 20);
			function up() { 
				if(pos == -80) {
					clearInterval(id);
					} else {
						pos--;
						topButton.style.marginTop = pos + 'px';
				}
			}
		}
	}

	

	var imgPad = "../media/images/"; // set the path where the images are located
	var imageListInside = ["lenovo-inside-1.jpg","lenovo-inside-2.jpg", "lenovo-inside-3.jpg", "lenovo-inside-4.jpg", "lenovo-inside-5.jpg", "lenovo-inside-6.jpg", "lenovo-inside-7.jpg"];
	var imageListRear = ["lenovo-rear-1.jpg","lenovo-rear-2.jpg", "lenovo-rear-3.jpg", "lenovo-rear-4.jpg", "lenovo-rear-5.jpg", "lenovo-rear-6.jpg"];
	var imagePreloadList = [];
	
	function preloadImages() { // function to preload the images used on a page
		if(document.getElementById("inside")) {
			for(var i=0; i<imageListInside.length; i++ ){
				imagePreloadList[i] = new Image();
				imagePreloadList[i].src = imgPad + imageListInside[i];
			}
			} else if(document.getElementById("rear")) {
				for(var i=0; i<imageListRear.length; i++ ){
					imagePreloadList[i] = new Image();
					imagePreloadList[i].src = imgPad + imageListRear[i];	
				}
		}
	}
	
	function updateImages(imageNo, number) {
		var imageObject = document.getElementById('baseImage');
		var oldSource = imageObject.src;
		var newSource = oldSource.replace(imageNo, number);
		imageObject.src = newSource;
	} 

	var infoBox = document.createElement('section');
	infoBox.setAttribute('class','insideInfo');

	var buttonDivTop = document.createElement('div');
	buttonDivTop.setAttribute('id', 'tabs');
	
	var buttonDiv02 = document.createElement('div');
	var textbutton02 = document.createTextNode('specs');
	buttonDiv02.appendChild(textbutton02);
	buttonDiv02.setAttribute('class', 'tabButton');
	buttonDiv02.setAttribute('aria-role', 'button');

	var buttonDiv03 = document.createElement('div');
	var textbutton03 = document.createTextNode('brand');
	buttonDiv03.appendChild(textbutton03);
	buttonDiv03.setAttribute('class', 'tabButton');
	buttonDiv03.setAttribute('aria-role', 'button');

	var buttonDiv04 = document.createElement('div');
	var textbutton04 = document.createTextNode('waranty');
	buttonDiv04.appendChild(textbutton04);
	buttonDiv04.setAttribute('class', 'tabButton');
	buttonDiv04.setAttribute('aria-role', 'button');

	buttonDivTop.appendChild(buttonDiv02);
	buttonDivTop.appendChild(buttonDiv03);
	buttonDivTop.appendChild(buttonDiv04);
	infoBox.appendChild(buttonDivTop);

	var infoBoxP = document.createElement('p');
	buttonDivTop.appendChild(infoBoxP);
	var positionSection = document.getElementsByTagName('section')[0];
	
	
	function showName() {
		var mapAreas = document.getElementsByTagName('area');
		for(var i=0; i<mapAreas.length; i++) {
			mapAreas[i].addEventListener('mouseover', function(event){
				for(var j=0; j<mapAreas.length; j++){
					if(event.target == mapAreas[j]) {
						infoBoxP.textContent = motherboard[j].part;
						insertAfter(infoBox, positionSection);

					}
				}
			});
		}
	}
	
	var imageTracker = false;
	function showInfo() {
		var mapAreas = document.getElementsByTagName('area');
		for(var i=0; i<mapAreas.length; i++) {
			mapAreas[i].addEventListener('click', function(event){
				for(var j=0; j<mapAreas.length; j++){
					if(event.target == mapAreas[j]) {
						infoBoxP.textContent = motherboard[j].part;
						insertAfter(infoBox, positionSection);
						
						if(imageTracker == false){
							updateImages('base', j+=1);
							imageTracker = true;
						} else {
							var circleNumber = j+1;
							circleNumber = parseInt(circleNumber);
							var circle = 'inside-';
							circle += circleNumber;
							updateImages(/inside-\d/g , circle);
						}
						
						var tabButtons = document.getElementsByClassName('tabButton');
						for(var i=0; i<tabButtons.length; i++) {
							tabButtons[i].addEventListener('click', function(event) {
								for(var j=0; j<tabButtons.length; j++){
									if(event.target == tabButtons[0]) {
										infoBoxP.textContent = motherboard[0].specs;
										insertAfter(infoBox, positionSection);
										
									} else if(event.target == tabButtons[1]) {
										infoBoxP.textContent = motherboard[0].brand;
										insertAfter(infoBox, positionSection);
									} else if(event.target == tabButtons[2]) {
										infoBoxP.textContent = motherboard[0].warranty;
										insertAfter(infoBox, positionSection);
									}
								}				
							});
						}
					}
				}
			});
		}
	}

	function insertAfter(element, referenceNode) { // insert tags after other tags
		referenceNode.parentNode.insertBefore(element, referenceNode.nextSibling);
	} // end of function insertAfter

	if(document.getElementById('index')) {
		
		// show the overlay with information
		var overlay = document.createElement('section');
		overlay.setAttribute('class', 'overlay');
		overlay.setAttribute('id', 'overlay');

		var overlayP = document.createElement('p');
		var overlayPContent = document.createTextNode('Klik op de buttons om meer informatie te krijgen over de Lenovo Legion Y520 Tower');
		overlayP.appendChild(overlayPContent);

		overlay.appendChild(overlayP);

		var overlaySpan = document.createElement('span');
		overlaySpan.setAttribute('class', 'showSpan');
		overlaySpan.setAttribute('id', 'closeOverlay');
		overlaySpan.setAttribute('aria-role', 'button');
		var overlaySpanContent = document.createTextNode('x');
		overlaySpan.appendChild(overlaySpanContent);

		overlayP.appendChild(overlaySpan);
		
		var positionOverlay = document.getElementsByTagName('header')[0]; // get the header tag

		insertAfter(overlay, positionOverlay); // put the section with the overlay behind the section tag
		
		
		var hideSpan = document.getElementById('closeOverlay');
		var hideOverlay = document.getElementById('overlay');
		var allowClick;

		hideSpan.addEventListener('click', function(event) { // if the users clicks the cross the overlay disappears
			if(event.type == 'click') {
				hideOverlay.removeAttribute('overlay');
				hideOverlay.setAttribute('class', 'hide');
				hoverButtons();
				allowClick = true;	
			} // end of if statement
		}, false);  // end of eventlistener

		for(var i=0; i<buttons.length; i++) { // disable the clickevent of the buttons if the overlay is visible
			buttons[i].addEventListener('click', function(event) {
				if(!allowClick) {
					event.preventDefault();
				} // end of if statement
			}); // end of eventlistener
		} // end of for loop
	} // end of code for the index page

	if(document.getElementById('inside')) {
		// hoverSpan.style.marginTop = '3rem';
		
		hoverButtons();
		preloadImages();
		showInfo();
		showName();
		
		
	
		
		
		
		
		
		

	}// end of code for the inside page

	if(document.getElementById('rear')) {
		
		hoverButtons();
		preloadImages();
		showInfo();
		showName();
	} // end of code for the rear page
}; // end of window.onload

/* oude imagemap info */

function showInfo(a) {
	infoBoxHeading.remove();

	infoBox.appendChild(buttonDivTop);
	infoBox.appendChild(infoBoxP);
	
	var isItClicked = parseInt(a.getAttribute('id')) - 1;
	
	for(var i=0; i<mapAreas.length; i++) {
		if(isItClicked == i) {
			infoBoxP.textContent = inside[i].part;
			insertAfter(infoBox, positionSection);
			numberClicked(isItClicked);
		}
	}
	
	function numberClicked(a) {
		for(var i=0; i<tabButtons.length; i++) {
			tabButtons[i].addEventListener('click', function(e) {
				if(e.target == document.getElementById('specs') && a == 0) {
					infoBoxP.textContent = inside[0].specs;
					insertAfter(infoBox, positionSection);
				} else if(e.target == document.getElementById('brand') && a == 0) {
					infoBoxP.textContent = inside[0].brand;
					insertAfter(infoBox, positionSection);
				} else if(e.target == document.getElementById('warranty') && a == 0) {
					infoBoxP.textContent = inside[0].warranty;
					insertAfter(infoBox, positionSection);
				}
			});
		}
	}
}
	


	
	


