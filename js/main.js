jQuery(document).ready(function($) {

  // PhotoStack Initi
  if( $('#photostack-1').length) {
    new Photostack(document.getElementById('photostack-1'), {
      callback: function(item) {
        //console.log(item)
      }
    });
  }

  // Full Page menu
  $(".sidemenu").fullpageMenu({
    animationSpeed: 200
  });

  //Portfolio
  var gridContainer = $('#grid-container'), filtersContainer = $('#filters-container');

  // init cubeportfolio
  gridContainer.cubeportfolio({
    defaultFilter: '*',
    animationType: 'rotateRoom',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    caption: 'overlayBottomAlong',
    displayType: 'bottomToTop',
    displayTypeSpeed: 100,

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxShowCounter: true,
  });

  // add listener for filters click
  filtersContainer.on('click', '.cbp-filter-item', function(e) {
    var me = $(this), wrap;

    // get cubeportfolio data and check if is still animating (reposition) the items.
    if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
      if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
        wrap = $('.cbp-l-filters-dropdownWrap');
        wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
        wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
        me.addClass('cbp-filter-item-active');
      } else {
        me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
      }
    }
    // filter the items
    gridContainer.cubeportfolio('filter', me.data('filter'), function() {});

  });

  // activate counter for filters
  gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));

  // activate all tooltips
  $('[data-toggle~="tooltip"]').tooltip({
    container: 'body'
  });

  // activate all popovers
  $('[data-toggle~="popover"]').popover({
    container: 'body'
  });

  //Superslides
	$('#slides').superslides({
	    slide_easing: 'easeInOutCubic',
	    slide_speed: 800,
	    pagination: true,
	    hashchange: false,
	    scrollable: true,
	    animation: 'fade'
	});
    getCountDown();


    setInterval(function () {
    }, 2000);


    //Get countdown every second
    setInterval(function() {
        getCountDown();
    }, 1000);



});

function getCountDown() {
    var puertoRicoTime = new Date("Mar 23, 2019 14:05:00").getTime();
    var now = new Date().getTime();
    var diff = puertoRicoTime - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / (1000));
    document.getElementById('timer').innerHTML = days + ' Days ' + hours + ' Hours '
        + minutes + ' Minutes ' + seconds + ' Seconds ';
}
