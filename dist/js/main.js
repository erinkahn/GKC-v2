'use strict';

console.log('Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you\'re working in the right files.');

// nav menu mobile

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.mobileNav').classList.toggle('openNav');
    document.querySelector('.donate').classList.toggle('hide');
    document.querySelector('.burger').classList.toggle('x');
});

// tabs
// http://www.entheosweb.com/tutorials/css/tabs.asp

$(".tab_content").hide(); // hide the rest of the tabs
$(".tab_content:first").show(); // show this tab first

/* if in tab mode */
$("ul.tabs li").click(function () {
    // click tab item/li

    $(".tab_content").hide(); //hide content
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active"); //remove active class from tab/li
    $(this).addClass("active"); //add class of active to tab/li

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});

/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active"); // tab heading remove active class
    $(this).addClass("d_active"); //add class of active 

    $("ul.tabs li").removeClass("active"); //remove active class 
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active"); //add active class
});

/* Extra class "tab_last" to add border to right side of last tab */
$('ul.tabs li').last().addClass("tab_last");
//# sourceMappingURL=main.js.map
