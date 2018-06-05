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
	
		
	if(!document.getElementById) return false; // check wheter js is enabled
	$('#jsDisabled').remove(); // remove the message to tell wheter js is off
	
	// show a text over the buttons on mousehover
	var $links = $('a');  // all the links
	var $buttonHome = $('<p class="hoverPoppup"><span>home</span></p>');
	var $buttonLeft = $('<p class="hoverPoppup"><span>binnenzijde</span></p>'); // put the content for the hover state in a variable
	var $buttonRight = $('<p class="hoverPoppup"><span>achterzijde</span></p>'); // put the content for the hover state in a variable

	function hoverButtons() {
		for(var i=0; i<$links.length; i++) {
			if(i == 0 && !document.getElementById("index")) {
				$($links[i]).hover(	// on hover show the hover state of the home button
			function(event) {
				$(this).append($buttonHome);
			}, function(event) {
				$(this).find($buttonHome).remove();
			}
		);
		} else if (i == 1) {
		$($links[i]).hover(	// on hover show the hover staat of the left button			
			function(event) {
				$(this).append($buttonLeft);
			}, function(event) {
				$(this).find($buttonLeft).remove();
			}
		);
		} else if (i == 2) {
			$($links[i]).hover(	// on hover show the hover staat of the right button			
				function(event) {
					$(this).append($buttonRight);
				}, function(event) {
					$(this).find($buttonRight).remove();
				}
			);
			};
		};
	};

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
	};
	
	/*  code for the index page */
	if(document.getElementById("index")) { // only run code if the is an id of index on the page

		var $header = $('header'); // header tag
		var $button = $('.button'); // button class
		var $allowClick = false; 
		
		$header.after('<div class="overlay" id="overlay"><p>Klik op de buttons om meer informatie te krijgen over de Lenovo Legion Y520 Tower</p><span class="showSpan" id="closeOverlay" aria-role="button">x</span></div>');
		$button.css('opacity', '0.3'); // change the opacity of the buttons
		
		$('#closeOverlay').on('click', function(e) { // click event to close the overlay
			$('#overlay').removeClass('overlay').addClass('hidden'); // hide the overlay 	
			$button.css('opacity', '1'); // change back the opacity of the buttons
			$links.off('click').click(); // make the buttons clickable again
			hoverButtons();
			$allowClick = true;

			if (!$allowClick) { // disable the click function of the buttons while the pop is visible
				$links.on('click', function(e) {
					e.preventDefault();
				});
			};
		});
	};

		
	

		/*  code for the inside page */
		if(typeof motherboard == "undefined") return false; // is there a object called motherboard
		
		if (document.getElementById('mapInside')) { // only run the code below if there is an element with the id Mapinside
			
			var $info = $('.insideInfo'); // section with class insideInfo
			var $content = $('<p>Test</p>');
			var $areas = $('area');
			var $areaId = [];

			console.log($areas[1]);
			
			$('#mapInside').find('area').each(function(){
				$areaId.push(this.id);
			});

			var $result = $areaId.map(function (x) { 
				return parseInt(x, 10); 
			});
		
			
			hoverButtons(); // hover state of the three top buttons
			preloadImages(); // call the function to preload the images
			 
			
			for(var i=0; i<$areas.length; i++) {
					$($areas[i]).on('click', function(event) {
						if($areas[i] == undefined) {
							$info.append('<p>' + motherboard[i].specs + '</p>');
							} else {
									$info.append('<p>' + motherboard[i].specs + '</p>');	
							}
						
					})
			}
		};

		/*  code for the rear page */
		if (document.getElementById('mapRear')) { // only run the code below if there is an element with the id Mapinside
			hoverButtons(); // hover state of the three top buttons
			
			preloadImages(); // call the function to preload the images
		
		};
});			

		

	


