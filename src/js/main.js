console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

// nav menu mobile

document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.mobileNav').classList.toggle('openNav');
    document.querySelector('.donate').classList.toggle('hide');
    document.querySelector('.burger').classList.toggle('x');
})
