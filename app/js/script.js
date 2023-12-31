const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');
    
    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }
    else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }
});


// Get the menu element
var menu = document.getElementById("menu");

// Get all the nav links
var navLinks = document.querySelectorAll("a");

// Loop through the nav links and add an event listener
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    // Hide the menu
    menu.style.display = "none";
  });
}

// FAQ ANIMATION
document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('click!');
        let accCollapse = item.nextElementSibling;

        if (!item.classList.contains('collapsing')) {
            // Open accordion item
            if(!item.classList.contains('open')) {
                console.log('toggle accordion button')

                accCollapse.style.display = 'block';
                let accHeight = accCollapse.clientHeight;
                console.log(accHeight);

                setTimeout(() => {
                    accCollapse.style.height = accHeight + 'px';
                    accCollapse.style.display = '';
                }, 1);

                accCollapse.classList = 'accordion__collapse collapsing';

                setTimeout(() => {
                console.log('open accordion content')
                accCollapse.classList = 'accordion__collapse collapse open';
                }, 300);
            }
            // Close accordion item
            else {
                // Remove "collapse open" from .accordion__collapse, add "collapsing"
                accCollapse.classList = 'accordion__collapse collapsing';

                setTimeout(() => {
                    accCollapse.style.height = '0px';
                }, 1);
                // After X amount of time, remove "collapsing" class and add "collapse" class
                setTimeout(() => {
                    console.log('close accordion content')
                    accCollapse.classList = 'accordion__collapse collapse';
                    accCollapse.style.height = '';
                    }, 300);
        }
        }

        item.classList.toggle('open');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});
