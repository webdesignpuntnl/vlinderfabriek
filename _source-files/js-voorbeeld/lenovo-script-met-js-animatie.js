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
	
	if(!document.getElementById) return false; // check if js is enabled
	if(!document.getElementById('navigation')) return false; // check if there is an id navigation
	
	var links = document.getElementsByTagName('a'); // get all the links
	var allowClick; 

	// if js is working remove the standard message
	document.getElementById('jsDisabled').remove();

	// insert tags after other tags
	function insertAfter(element, referenceNode) { 
		referenceNode.parentNode.insertBefore(element, referenceNode.nextSibling);
	}
	
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
	}

	function removeOverlay() {
		hideOverlay.removeAttribute('overlay');
		hideOverlay.setAttribute('class', 'hide');
		allowClick = true;
	}
	
		
	// arrays and variables for the image preloading
	var imgPad = "../media/images/"; // set the path where the images are located
	var imageListInside = ["lenovo-inside-1.jpg","lenovo-inside-2.jpg", "lenovo-inside-3.jpg", "lenovo-inside-4.jpg", "lenovo-inside-5.jpg", "lenovo-inside-6.jpg", "lenovo-inside-7.jpg"];
	var imageListRear = ["lenovo-rear-1.jpg","lenovo-rear-2.jpg", "lenovo-rear-3.jpg", "lenovo-rear-4.jpg", "lenovo-rear-5.jpg", "lenovo-rear-6.jpg"];
	var imagePreloadList = [];
	
	if(document.getElementById('inside')) { // images for the inside page
		for(var i=0; i<imageListInside.length; i++ ){
			imagePreloadList[i] = new Image();
			imagePreloadList[i].src = imgPad + imageListInside[i];
		}
		} else if(document.getElementById('rear')) { // images for the rear page
			for(var i=0; i<imageListRear.length; i++ ){
				imagePreloadList[i] = new Image();
				imagePreloadList[i].src = imgPad + imageListRear[i];	
			}
	}
	
	function setImageSource(imageNo, number) { // get the right image
		var imageObject = document.getElementById('baseImage');
		var oldSource = imageObject.src;
		var newSource = oldSource.replace(imageNo, number);
		imageObject.src = newSource;
	}

	function updateImage(a, page) {
			var isItClicked = parseInt(a.getAttribute('id'));
			var inside = 'inside-'
			var rear = 'rear-';
			inside += isItClicked;
			rear += isItClicked;
		for(var i=0; i<=mapAreas.length; i++){
			isItClicked == i && document.getElementById(page) ? setImageSource('base', i) : setImageSource(/inside-\d/g, inside);
			isItClicked == i && document.getElementById(page) ? setImageSource('base', i) : setImageSource(/rear-\d/g, rear);
		}
	}

	// variables for creating a section with a h1
	var infoBox = document.createElement('section');
	infoBox.setAttribute('class','insideInfo hidden');

	var infoBoxHeading = document.createElement('h1');
	infoBoxHeading.setAttribute('id', 'heading');
	// infoBoxHeading.style.opacity = 0;

	infoBox.appendChild(infoBoxHeading);
	var positionSection = document.getElementsByTagName('section')[0];
	
	function showPartName(a, e) { // show the name of the part on hover
		infoBox.setAttribute('class','insideInfo');
		for(var i=0; i<mapAreas.length; i++){
			if(e.target == mapAreas[i]) {
				infoBoxHeading.textContent = a[i].part;
				insertAfter(infoBox, positionSection);
			}
		}
	}

	// var opacity = 0;
	// var imageMap = document.getElementById('baseImage');
	
	// function fadeSection(a) {
	// 	var heading =  document.getElementById('heading');
	// 	if(opacity<1) {
	// 		opacity += 0.05;
	// 		setTimeout(function(){fadeSection(a)},300);
	// 		a.style.opacity = opacity;
	// 	} else if(opacity >= 1) {
	// 		opacity = 0;
	// 	}
	// }
	// if(!document.getElementById('index')) {
	// 	fadeSection(imageMap);
	// }


	// var LeftMargin = -50;

	// function slideInSection() {
	// 	if(LeftMargin == -50) {
	// 		LeftMargin++;
	// 		LeftMargin += 'rem';
	// 		setTimeout(function(){slideInSection()},100);
	// 		imageMap.style.marginLeft = LeftMargin;
	// 	} else if(LeftMargin == 5) {
	// 		clearTimeout();
	// 	}
	// }
	// if(!document.getElementById('index')) {
	// 	slideInSection();
	// }
	

	function updateShowInfoContent(a, b) {
			infoBoxP.textContent = a[b].part;
			insertAfter(infoBox, positionSection);
	}
	
	
	function updateTabInfoContent(tabButtonId, whichPart) {
		for(var i=0; i<mapAreas.length; i++) {
			if(tabButtonId == 'specs' && numberClicked == i) {				
				infoBoxP.textContent = whichPart[i].specs;
				insertAfter(infoBox, positionSection);
				activeTab(tabButtonId);
			} else if(tabButtonId == 'brand' && numberClicked == i) {
				infoBoxP.textContent = whichPart[i].brand;
				insertAfter(infoBox, positionSection);
				activeTab(tabButtonId);
			} else if(tabButtonId == 'warranty' && numberClicked == i) {
				infoBoxP.textContent = whichPart[i].warranty;
				insertAfter(infoBox, positionSection);
				activeTab(tabButtonId);
			}
			 
		}	
	}

	function activeTab(a) {
		a == 'specs' ?  tabButtons[0].setAttribute('class', 'tabButton active') : tabButtons[0].setAttribute('class', 'tabButton');
		a == 'brand' ? tabButtons[1].setAttribute('class', 'tabButton active') : tabButtons[1].setAttribute('class', 'tabButton');
		a == 'warranty' ? tabButtons[2].setAttribute('class', 'tabButton active') : tabButtons[2].setAttribute('class', 'tabButton');
	 }


	if(!document.getElementById('index')) {
		var buttonDivTop = document.createElement('div');
		buttonDivTop.setAttribute('id', 'tabs');
		buttonDivTop.setAttribute('class', 'hidden');

		var buttonDiv02 = document.createElement('div');
		var textbutton02 = document.createTextNode('specs');
		buttonDiv02.appendChild(textbutton02);
		buttonDiv02.setAttribute('class', 'tabButton');
		buttonDiv02.setAttribute('id', 'specs');
		buttonDiv02.setAttribute('aria-role', 'button');

		var buttonDiv03 = document.createElement('div');
		var textbutton03 = document.createTextNode('brand');
		buttonDiv03.appendChild(textbutton03);
		buttonDiv03.setAttribute('class', 'tabButton');
		buttonDiv03.setAttribute('id', 'brand');
		buttonDiv03.setAttribute('aria-role', 'button');

		var buttonDiv04 = document.createElement('div');
		var textbutton04 = document.createTextNode('warranty');
		buttonDiv04.appendChild(textbutton04);
		buttonDiv04.setAttribute('class', 'tabButton');
		buttonDiv04.setAttribute('id', 'warranty');
		buttonDiv04.setAttribute('aria-role', 'button');

		buttonDivTop.appendChild(buttonDiv02);
		buttonDivTop.appendChild(buttonDiv03);
		buttonDivTop.appendChild(buttonDiv04);
		
		var infoBoxP = document.createElement('p');

		infoBox.appendChild(buttonDivTop);
		infoBox.appendChild(infoBoxP);
		insertAfter(infoBox, positionSection);

		var mapAreas = document.getElementsByClassName('numberBullets');
		var tabButtons = document.getElementsByClassName('tabButton');
		var numberClicked;
	}
	
	// set the hover state of the buttons
	var buttons = document.getElementsByClassName('button');
	
	var hoverP = document.createElement('p');
	hoverP.setAttribute('class', 'hoverPoppup');
	var hoverSpan = document.createElement('span');
	
	hoverP.appendChild(hoverSpan);

	function hoverTextButtons(a) {
		var titleText = a.title;
		hoverSpan.textContent = titleText;
		a.appendChild(hoverP);
	}

	// event listeners
	var events = ['mouseover', 'mouseout', 'click'];
	if(!document.getElementById('index')) {
		for(hetEvent of events){
			for(var i=0; i<mapAreas.length; i++) {
				mapAreas[i].addEventListener(hetEvent, function(e){
					if(e.type == 'mouseover' && document.getElementById('inside')) {
						// fadeSection(heading);
						showPartName(inside, e);
					} else if(e.type == 'mouseover' && document.getElementById('rear')) {
						// fadeSection(heading);
						showPartName(rear, e);
					} else if(e.type == 'click' && document.getElementById('inside')) {	
						infoBoxHeading.style.display = 'none';
						updateImage(this, 'inside');
						numberClicked = parseInt(this.getAttribute('data-clickedId'));
						updateShowInfoContent(inside, numberClicked); 
						buttonDivTop.removeAttribute('class', 'hidden');
					} else if(e.type == 'click' && document.getElementById('rear')) {
						infoBoxHeading.style.display = 'none';
						updateImage(this, 'rear');
						numberClicked = parseInt(this.getAttribute('data-clickedId'));
						buttonDivTop.removeAttribute('class', 'hidden');
						updateShowInfoContent(rear, numberClicked);
					}
				}, false); 
			}
		}
		 
		for(var i=0; i<tabButtons.length; i++) {
			tabButtons[i].addEventListener(hetEvent, function(e){
				if(e.type == 'click' && document.getElementById('inside')) {
					updateTabInfoContent(this.id, inside);
				} else if(e.type == 'click' && document.getElementById('rear')) {
					updateTabInfoContent(this.id, rear);
				}
			}, false);
		}
	}	
	
	for(hetEvent of events){
		for(var i=0; i<links.length; i++) {
			links[i].addEventListener(hetEvent, function(e){
				if(e.type == 'mouseover' && this != document.getElementById('active')) {
					hoverTextButtons(this);
				} else if(e.type == 'click' && document.getElementById('index')) {
					if(!allowClick) {
						e.preventDefault();
					} 
				}
			}, false);
		}
	}

	if(document.getElementById('index')) {
		for(hetEvent of events){
			hideSpan.addEventListener(hetEvent, function(e) {
				if(e.type == 'click') {
					removeOverlay();	
				} 
			}, false); 
		} 
	}

}; // end of window.onload




			

