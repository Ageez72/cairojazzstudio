/*global $, console, alert */

$(function () {
    'use strict';
    //scroll to top
    
    var scrollToTop =  $(".scroll-to-top");
        
    $(window).scroll(function () {
           
        if ($(window).scrollTop() >= 1000) {
                
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);
        }
    });
        
        
    scrollToTop.click(function (e) {
           
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
            
    });
    
        // Add Nice Scroll
    
    $("body").niceScroll();  
    
    // Start Navbar 
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    
    // Scroll To Next Section
    
    $('.header .arrow i').click(function () {
       
        $('html, body').animate({
            
            scrollTop : $('.about-us').offset().top
            
        } , 500);
        
    });
    
    // Fade Out Loading Page
    $(window).on('load',function () {
    "use strict";
    $(".loading-overlay").fadeOut(1000);
    });
        
    // Scroll to the Elements 
    
    $(".navbar li a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top 
        },2000)
    });
    
    // Change background
    
    $('.navbar ul li').click(function () {
       
        $(this).addClass('back').siblings().removeClass('back');
        
    });
    
    // Form Contact

           
    $('#btnSend').click(function () {

              
        var toEmail = 'mohamed.ageez22@gmail.com',
            toName = 'Mohamed Ageez',
            name = $('#txtName').val(),
            email = $('#txtEmail').val(),
            subject = $('#txtsubject').val(),
            message = $('#txtmessage').val(),
            jsondata = {"email": email, "name": name, "subject": subject, "message": message};
         
        $.ajax({
                    
            async: true,
            "crossDomain": true,
            "url": "https://cairojazzdb-4e7b.restdb.io/rest/contacts",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "bf29ae7f98f1aa6bace7ca64611dfab34791b",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            complete: function (response) {
                console.log(response);
                alert("your message sent successfully!");
                $('#txtName').val('');
                $('#txtEmail').val('');
                $('#txtsubject').val('');
                $('#txtmessage').val('');

            }
        });
                
                
                
                
            
    });
    $('#showData').click(function () {
        
        $.support.cors = true;

        $.ajax({
            "url": "https://cairojazzdb-4e7b.restdb.io/rest/contacts",
            "type": 'GET',
            async: true,
            "crossDomain": true,
            "headers": {
                "x-apikey": "bf29ae7f98f1aa6bace7ca64611dfab34791b",
                "cache-control": "no-cache"
            },
            complete: function (response) {
                console.log(response);

            }
        });
        
    
    });
    
    $(window).load(function () {
        $('img [alt="www.000webhost.com"]').css('display', 'none');
    });
});