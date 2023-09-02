// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});


// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

// background start


window.onload = function () {
	Particles.init({
	  selector: ".background"
	});
  };
  const particles = Particles.init({
	selector: ".background",
	color: ["#03dac6", "#ff0266", "#000000"],
	connectParticles: true,
	responsive: [
	  {
		breakpoint: 768,
		options: {
		  color: ["#faebd7", "#03dac6", "#ff0266"],
		  maxParticles: 43,
		  connectParticles: false
		}
	  }
	]
  });
  
  class NavigationPage {
	constructor() {
	  this.currentId = null;
	  this.currentTab = null;
	  this.tabContainerHeight = 70;
	  this.lastScroll = 0;
	  let self = this;
	  $(".nav-tab").click(function () {
		self.onTabClick(event, $(this));
	  });
	  $(window).scroll(() => {
		this.onScroll();
	  });
	  $(window).resize(() => {
		this.onResize();
	  });
	}
  
	onTabClick(event, element) {
	  event.preventDefault();
	  let scrollTop =
		$(element.attr("href")).offset().top - this.tabContainerHeight + 1;
	  $("html, body").animate({ scrollTop: scrollTop }, 600);
	}
  
	onScroll() {
	  this.checkHeaderPosition();
	  this.findCurrentTabSelector();
	  this.lastScroll = $(window).scrollTop();
	}
  
	onResize() {
	  if (this.currentId) {
		this.setSliderCss();
	  }
	}
  
	checkHeaderPosition() {
	  const headerHeight = 75;
	  if ($(window).scrollTop() > headerHeight) {
		$(".nav-container").addClass("nav-container--scrolled");
	  } else {
		$(".nav-container").removeClass("nav-container--scrolled");
	  }
	  let offset =
		$(".nav").offset().top +
		$(".nav").height() -
		this.tabContainerHeight -
		headerHeight;
	  if (
		$(window).scrollTop() > this.lastScroll &&
		$(window).scrollTop() > offset
	  ) {
		$(".nav-container").addClass("nav-container--move-up");
		$(".nav-container").removeClass("nav-container--top-first");
		$(".nav-container").addClass("nav-container--top-second");
	  } else if (
		$(window).scrollTop() < this.lastScroll &&
		$(window).scrollTop() > offset
	  ) {
		$(".nav-container").removeClass("nav-container--move-up");
		$(".nav-container").removeClass("nav-container--top-second");
		$(".nav-container-container").addClass("nav-container--top-first");
	  } else {
		$(".nav-container").removeClass("nav-container--move-up");
		$(".nav-container").removeClass("nav-container--top-first");
		$(".nav-container").removeClass("nav-container--top-second");
	  }
	}
  
	findCurrentTabSelector(element) {
	  let newCurrentId;
	  let newCurrentTab;
	  let self = this;
	  $(".nav-tab").each(function () {
		let id = $(this).attr("href");
		let offsetTop = $(id).offset().top - self.tabContainerHeight;
		let offsetBottom =
		  $(id).offset().top + $(id).height() - self.tabContainerHeight;
		if (
		  $(window).scrollTop() > offsetTop &&
		  $(window).scrollTop() < offsetBottom
		) {
		  newCurrentId = id;
		  newCurrentTab = $(this);
		}
	  });
	  if (this.currentId != newCurrentId || this.currentId === null) {
		this.currentId = newCurrentId;
		this.currentTab = newCurrentTab;
		this.setSliderCss();
	  }
	}
  
	setSliderCss() {
	  let width = 0;
	  let left = 0;
	  if (this.currentTab) {
		width = this.currentTab.css("width");
		left = this.currentTab.offset().left;
	  }
	  $(".nav-tab-slider").css("width", width);
	  $(".nav-tab-slider").css("left", left);
	}
  }
  
  new NavigationPage();

// subscribe start
function forceLower(strInput) 
{
strInput.value=strInput.value.toLowerCase();
}

Splitting();

$('.signup').submit(function(event){
 event.preventDefault();
 
 var emailText = $('.email').val();
 $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
  Splitting();
  $("#wrap").addClass("flip");
  setTimeout(function(){	
    $(".char, .word").addClass("slide");
}, 1);
  setTimeout(function(){	
    $('.email').val('');
    $( ".field p" ).remove();
    $("#wrap").removeClass("flip");
}, 3000);
});
// Subscribe end

// Article start

// Article end
