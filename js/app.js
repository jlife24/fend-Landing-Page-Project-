/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const menu = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));

let listItems = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//Create new navbar
function createNavbarListItems() {
  for(section of sections) {
    nameOfSection = section.getAttribute('data-nav');
    linkForSection = section.getAttribute('id');

    // A list item get created for each list
    list_item = document.createElement('li');

    // to create list items elements
    list_item.innerHTML = `<a class='menu__link' href='#${linkForSection}'>${nameOfSection}</a>`;

    // list items gets added to the menu

    // list item gets added to the menu
    menu.appendChild(list_item);
  }

}

createNavbarListItems();

// function to indicate if the section is viewed

function sectionView(element) {
  const sectViewPosition = element.getBoundingClientRect();
  return (sectViewPosition.top >= 0);
  // if the top is >=0, section will start at the beginningof the page
}

// window.addEventListener('scroll', () =>{
//   let currentSection = '';
//
//   sections.forEach(section =>{
//     const mySectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if(pageYOffset >= sectionTop){
//       currentSection = section.getAttribute('id');
//     }
//   })
//   console.log(currentSection);
// })


//toggle function give the section a different apperance



  function toggle() {
    for (section of sections) {
      if(sectionView(section)){
        // this would check if the section has an active class
        if(!section.classList.contains('your-active-class')){
          section.classList.add('your-active-class');
          section.style.cssText = "background-color: black";
        }
      } else{
        section.classList.remove('your-active-class');
        section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
      }
    }
  }

document.addEventListener('scroll', toggle);




// Smooth scrolling feature

const scroll = () => {

    const myLinks = document.querySelectorAll('.navbar__menu a');
    myLinks.forEach(clickClick => {
        clickClick.addEventListener('click', () => {
            for(i = 0; i < sections; i++){
                sections[i].addEventListener("click", scrollIntoView(clickClick));
            }
        });
    });

};

scroll();
