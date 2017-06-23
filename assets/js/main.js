(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".logo-carousel").owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 600,
            nav: false,
            addClassActive: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsiveClass: true,
            items : 6,
        });

        $(".case-studies-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loops: true,
            dots: true,
            nav: false,
        });  
        
        $(".testimonial-carousel").owlCarousel({
            items: 1, 
            loops: true,
            dots: true,
            nav: false,
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	