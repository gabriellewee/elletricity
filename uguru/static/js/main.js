// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);

$(".dropdown-menu a").click(function() {
    $(this).siblings("div").toggleClass("show");
});
$(".dropdown-menu .guru-popup button").click(function() {
    $(this).parent().parent().parent().parent().removeClass("show");
});

$(".dropdown a").click(function() {
    $(this).parent().siblings("ul").toggleClass("active");
});

$(".color-picker a").click(function() {
    $('.color-picker a').removeClass("active");
    $(this).addClass("active");
    choices = $(this).parent().parent().parent().children("ul + ul");
    if ($(this).hasClass("bg-auburn")) {
        choices.attr("class", "bg-auburn");
    } else if ($(this).hasClass("bg-orange")) {
        choices.attr("class", "bg-orange");
    } else if ($(this).hasClass("bg-gold")) {
        choices.attr("class", "bg-gold");
    } else if ($(this).hasClass("bg-moola")) {
        choices.attr("class", "bg-moola");
    } else if ($(this).hasClass("bg-shamrock")) {
        choices.attr("class", "bg-shamrock");
    } else if ($(this).hasClass("bg-azure")) {
        choices.attr("class", "bg-azure");
    } else if ($(this).hasClass("bg-lake")) {
        choices.attr("class", "bg-lake");
    } else if ($(this).hasClass("bg-cobalt")) {
        choices.attr("class", "bg-cobalt");
    } else if ($(this).hasClass("bg-eggplant")) {
        choices.attr("class", "bg-eggplant");
    } else if ($(this).hasClass("bg-cerise")) {
        choices.attr("class", "bg-cerise");
    } else if ($(this).hasClass("bg-charcoal")) {
        choices.attr("class", "bg-charcoal");
    } else if ($(this).hasClass("bg-slate")) {
        choices.attr("class", "bg-slate");
    } else if ($(this).hasClass("bg-taupe")) {
        choices.attr("class", "bg-taupe");
    } else if ($(this).hasClass("bg-campus")) {
        choices.attr("class", "bg-campus");
    }
});

$(".color-picker").each(function() {
    choices = $(this).children("ul + ul");
    if ($(this).find("a.bg-auburn").hasClass("active")) {
        choices.attr("class", "bg-auburn");
    } else if ($(this).find("a.bg-orange").hasClass("active")) {
        choices.attr("class", "bg-orange");
    } else if ($(this).find("a.bg-gold").hasClass("active")) {
        choices.attr("class", "bg-gold");
    } else if ($(this).find("a.bg-moola").hasClass("active")) {
        choices.attr("class", "bg-moola");
    } else if ($(this).find("a.bg-shamrock").hasClass("active")) {
        choices.attr("class", "bg-shamrock");
    } else if ($(this).find("a.bg-azure").hasClass("active")) {
        choices.attr("class", "bg-azure");
    } else if ($(this).find("a.bg-lake").hasClass("active")) {
        choices.attr("class", "bg-lake");
    } else if ($(this).find("a.bg-cobalt").hasClass("active")) {
        choices.attr("class", "bg-cobalt");
    } else if ($(this).find("a.bg-eggplant").hasClass("active")) {
        choices.attr("class", "bg-eggplant");
    } else if ($(this).find("a.bg-cerise").hasClass("active")) {
        choices.attr("class", "bg-cerise");
    } else if ($(this).find("a.bg-charcoal").hasClass("active")) {
        choices.attr("class", "bg-charcoal");
    } else if ($(this).find("a.bg-slate").hasClass("active")) {
        choices.attr("class", "bg-slate");
    } else if ($(this).find("a.bg-taupe").hasClass("active")) {
        choices.attr("class", "bg-taupe");
    } else if ($(this).find("a.bg-campus").hasClass("active")) {
        choices.attr("class", "bg-campus");
    }
});

$("#sticker-sheet").isotope({
    itemSelector: "#sticker-sheet > article",
    percentPosition: true,
    masonry: {
        columnWidth: ".sticker-width"
    }
})