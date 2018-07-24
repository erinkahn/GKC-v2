"use strict";

console.log("Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");

// tabs------------------------------------------------------------------------------
// http://www.entheosweb.com/tutorials/css/tabs.asp

$(".tab_content").hide(); // hide the rest of the tabs
if ($(window).innerWidth() > 480) {
    $(".tab_content:first").show(); // show this tab first
}

/* if in tab mode */
$("ul.tabs li").click(function () {
    // click tab item/li

    var activeTab = $(this).attr("rel");

    if ($("#" + activeTab).is(":visible")) {
        // do nothing
        console.log("this tab is already visible");
    } else {
        $(".tab_content").hide(); //hide content
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active"); //remove active class from tab/li
        $(this).addClass("active"); //add class of active to tab/li
    }

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});

/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    var d_activeTab = $(this).attr("rel");

    if ($("#" + d_activeTab).is(":visible")) {
        // do nothing
        console.log("tab already open (mobile)");
        $(".tab_drawer_heading").removeClass("d_active"); // tab heading remove active class
        $(".tab_content").hide();
    } else {
        $(".tab_content").hide();
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active"); // tab heading remove active class
        $(this).addClass("d_active"); //add class of active 
    }

    $("ul.tabs li").removeClass("active"); //remove active class 
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active"); //add active class
});

/* Extra class "tab_last" to add border to right side of last tab */
$('ul.tabs li').last().addClass("tab_last");

// click option for dropdown instead of hover-----------------------------------------------------

// find all the dropdowns (the second level nav ULs)
var navDropdowns = document.querySelectorAll('nav > ul > li > ul');

// loop through them
navDropdowns.forEach(function (navDropdown) {
    // get the parent of the dropdown in question, which is the top level LI it's inside
    // add a click listener
    navDropdown.parentNode.addEventListener("click", function () {
        // when the parent LI is clicked, toggle a class on this dropdown UL
        navDropdown.classList.toggle("show"); // need to add CSS for this class to nav > ul > li > ul
        // OR
        // when the parent LI is clicked, toggle a class on the parent LI
        // this.classList.toggle("show"); // need to add CSS for this class to nav > ul > li > ul

        // two options here, pick the one that makes sense to you
    });
});

// ways to serve-----------------------------------------------------

var dot1 = document.querySelector('.one');
var dot2 = document.querySelector('.two');
var dot3 = document.querySelector('.three');

// when the user clicks the dot, show and hide the text

dot1.addEventListener('click', function () {
    document.querySelector('.expandText').classList.toggle('showText');
});

dot2.addEventListener('click', function () {
    document.querySelector('.expandText2').classList.toggle('showText2');
});

dot3.addEventListener('click', function () {
    document.querySelector('.expandText3').classList.toggle('showText3');
});
//# sourceMappingURL=main.js.map
