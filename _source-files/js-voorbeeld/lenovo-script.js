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
    $('img[usemap]').rwdImageMaps(); // function to call the code above to make the map imagemaps responsive 

/* this script is not working properly with internet explorer 
	the e.preventdefault() is not working properly with the Edge browser */
	
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
	
	// show the overlay with information on the index page
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

	if(document.getElementById('index')) {
		insertAfter(overlay, positionOverlay); // put the section with the overlay behind the section tag
	}

	// arrays and variables for the image preloading
	var imgPad = "../media/images/"; // set the path where the images are located
	var imagePreloadList = [];
	
	if(document.getElementById('inside')) { // images for the inside page
		for(var i=0; i<inside.length; i++) {
			imagePreloadList[i] = new Image();
			imagePreloadList[i].src = imgPad + inside[i].image;
		}
		} else if(document.getElementById('rear')) { // images for the rear page
			for(var i=0; i<rear.length; i++) {
				imagePreloadList[i] = new Image();
				imagePreloadList[i].src = imgPad + rear[i].image;	
			}
	}
	
	// set the source of the image
	function setImageSource(imageNo, number) { 
		var imageObject = document.getElementById('baseImage');
		var oldSource = imageObject.src;
		var newSource = oldSource.replace(imageNo, number);
		imageObject.src = newSource;
	}

	// show the image corresponding the users choice
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
	infoBox.setAttribute('class','insideInfo');

	var infoBoxHeading = document.createElement('h1');
	infoBoxHeading.setAttribute('id', 'heading');

	var startInfoText = document.createTextNode('Klik op de nummers voor meer informatie over de verschillende onderdelen.');
	infoBoxHeading.appendChild(startInfoText);

	infoBox.appendChild(infoBoxHeading);
	var positionSection = document.getElementsByTagName('section')[0];
	
	// show the name of the part on hover
	function showPartName(a, e) { 
		animationPartName();
		for(var i=0; i<mapAreas.length; i++){
			if(e.target == mapAreas[i]) {
				infoBoxHeading.textContent = a[i].part;
				insertAfter(infoBox, positionSection);
			} 
		}
	}

	// put an x button in the right corner to reset the page
	var resetImageMap = document.createElement('span');
	var resetX = document.createTextNode('x');
	resetImageMap.appendChild(resetX);
	resetImageMap.setAttribute('id', 'reset');
	
	// show the info when the users clicks on a number
	function updateShowInfoContent(a, b) { 
			animationInfoText();
			resetTabButtons();
			infoBoxP.textContent = a[b].part;
			infoBox.appendChild(resetImageMap);
			insertAfter(infoBox, positionSection);
			infoBoxHeading.style.display = 'none';
			buttonDivTop.removeAttribute('class', 'hidden');
			document.getElementById('reset').appendChild(resetX);
	}
 
	// show the info when the users clicks on a tab button
	function updateTabInfoContent(tabButtonId, whichPart) {
		animationInfoText();
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

	// change the state of the tab to active of to inactive
	function activeTab(a) {
		a == 'specs' ?  tabButtons[0].setAttribute('class', 'tabButton active') : tabButtons[0].setAttribute('class', 'tabButton');
		a == 'brand' ? tabButtons[1].setAttribute('class', 'tabButton active') : tabButtons[1].setAttribute('class', 'tabButton');
		a == 'warranty' ? tabButtons[2].setAttribute('class', 'tabButton active') : tabButtons[2].setAttribute('class', 'tabButton');
	 }

	 function resetTabButtons() {
		 for(var i=0; i<tabButtons.length; i++) {
			 if(tabButtons[i].hasAttribute('class', 'active')) {
				 tabButtons[i].setAttribute('class', 'tabButton');
			 }
		 }
	 }

	 function resetPage(a) {
		buttonDivTop.setAttribute('class', 'hidden');
		infoBoxHeading.style.display = 'block';
		infoBoxHeading.innerText = '';
		infoBoxHeading.appendChild(startInfoText);
		infoBoxP.innerText = '';
		a.innerText = '';
	 }

	 // create the div with the tab buttons
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
		var textbutton03 = document.createTextNode('merk');
		buttonDiv03.appendChild(textbutton03);
		buttonDiv03.setAttribute('class', 'tabButton');
		buttonDiv03.setAttribute('id', 'brand');
		buttonDiv03.setAttribute('aria-role', 'button');

		var buttonDiv04 = document.createElement('div');
		var textbutton04 = document.createTextNode('garantie');
		buttonDiv04.appendChild(textbutton04);
		buttonDiv04.setAttribute('class', 'tabButton');
		buttonDiv04.setAttribute('id', 'warranty');
		buttonDiv04.setAttribute('aria-role', 'button');

		buttonDivTop.appendChild(buttonDiv02);
		buttonDivTop.appendChild(buttonDiv03);
		buttonDivTop.appendChild(buttonDiv04);
		
		var infoBoxP = document.createElement('p');
		infoBoxP.setAttribute('id', 'partInfo');
		
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

	var imageMapInside = document.getElementById('inside');
	var imageMapRear = document.getElementById('rear');

	// event listeners for the numer bullets
	var events = ['mouseover', 'mouseout', 'touchstart', 'touchend', 'click'];
	if(!document.getElementById('index')) {
		for(hetEvent of events){
			for(var i=0; i<mapAreas.length; i++) {
				mapAreas[i].addEventListener(hetEvent, function(e){
					if(e.type == 'mouseover' && imageMapInside) {
						showPartName(inside, e);
					} else if(e.type == 'touchstart' && imageMapInside) {
						showPartName(inside, e);
					} else if(e.type == 'mouseover' && imageMapRear) {
						showPartName(rear, e);
					} else if(e.type == 'touchstart' && imageMapRear) {
						showPartName(rear, e);
					} else if(e.type == 'click' && imageMapInside) {
						updateImage(this, 'inside');
						numberClicked = parseInt(this.getAttribute('data-clickedId'));
						updateShowInfoContent(inside, numberClicked);
					} else if(e.type == 'click' && imageMapRear) {
						updateImage(this, 'rear');
						numberClicked = parseInt(this.getAttribute('data-clickedId'));
						updateShowInfoContent(rear, numberClicked);
					}
				}, false); 
			}
		}
		
		// event listeners for the tab buttons
		for(var i=0; i<tabButtons.length; i++) {
			tabButtons[i].addEventListener(hetEvent, function(e){
				e.type == 'click' && document.getElementById('inside') ? updateTabInfoContent(this.id, inside): updateTabInfoContent(this.id, rear);
			}, false);
		}
	}	
	
	// event listeners for the menu buttons
	for(hetEvent of events){
		for(var i=0; i<links.length; i++) {
			links[i].addEventListener(hetEvent, function(e){
				if(e.type == 'mouseover' && this != document.getElementById('active')) {
					hoverTextButtons(this);
					$('.hoverPoppup span').animate({
						marginTop: '15%'
					}, 700);
				} else if(e.type == 'touchestart') {
					hoverTextButtons(this);
					$('.hoverPoppup span').animate({
						marginTop: '15%'
					}, 700);
				} else if(e.type == 'click' && document.getElementById('index')) {
					if(!allowClick) {
						e.preventDefault();
					} 
				} 
			}, false);
		}
	}

	// event listener to hide the overlay on the index page
	if(document.getElementById('index')) {
		var hideSpan = document.getElementById('closeOverlay');
		var hideOverlay = document.getElementById('overlay');

		for(hetEvent of events){
			hideSpan.addEventListener(hetEvent, function(e) {
				if(e.type == 'click') {
					$('#overlay').fadeOut(500);	
					allowClick = true;
				} 
			}, false); 
		} 
	}

	// event listener to reset the imagemap and content
	for(hetEvent of events){
		resetImageMap.addEventListener(hetEvent, function(e) {
			if(e.type == 'click' && imageMapInside) {
				setImageSource(/inside-\d/g, 'inside-base'); // reset inside image to initial state
				resetPage(this); // reset content and image to initial state
			} else if(e.type == 'click' && imageMapRear) {
				setImageSource(/rear-\d/g, 'rear-base'); // reset rear image to initial state
				resetPage(this); // reset content and image to initial state
			}
		}, false); 
	}
	
	// animations in Jquery
	if(!document.getElementById('index')) {
		$('#navigation').css({
			marginTop: -90,
			opacity: 0
		});

		$('.insideInfo').css({
			marginRight: -900
		});

		$('#navigation').animate({ // start animation of the top buttons and the slide in of the contentbox
			opacity: 1,
			marginTop: -5
		}, 1000, function(){
				$('#navigation').animate({
					marginTop: '-2%'
				}, 800, function(){
					$('.hoverPoppup span').animate({
						marginTop: '15%',
				}, 500, function(){
					$('.insideInfo').css({
						marginRight: -900
					});
					$('.insideInfo').animate({
						marginRight: '3rem'
					}, 700, function(){
						$('.insideInfo').removeAttr('style');
					});	
				});
			});
		});
	}

	$('#baseImage').animate({ // fade in the imagemap
		 opacity: 1
	}, 1000);
	
	function animationPartName() { // fadein te partname on mousever
		$('.insideInfo h1').css({opacity: 0});
		$('.insideInfo h1').animate({
			opacity: 1
	   }, 500);
	}

	function animationInfoText() { // fade in the content when the tab buttons are clicked
		$('.insideInfo p').css({opacity: 0});
		$('.insideInfo p').animate({
			opacity: 1
	   }, 500);
	}	
});	





			

