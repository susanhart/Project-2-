/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//The list of variables (that store the DOM elements) needed to paginate.
 //Assigning ten students per page load.

const studentsPerPage = 10;
const pageList = document.querySelector('ul');
const eachStudent = pageList.children;

const searchDiv = document.querySelector('.student-search');
const noResultDiv = document.querySelector('.no-result');

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
// Function to determine the number of pages based on the number of students.

function numberOfPages() {
   let pages = Math.ceil(eachStudent.length / studentsPerPage);
   return pages;
} 
 // Function to assign an index of students.  
// Function to automatically show the first ten students when the page loads.
//Created the `showPage` function to hide all of the items in the list except the items you want to show.

 function showPage(list, page) { 
   var startIndex = (page * studentsPerPage) - studentsPerPage
   var endIndex = page * studentsPerPage

   // For Loop to create page buttons based on the number (6) of required pages.
// Show 10 students out of the entire index of students.  
      // Hide the rest.
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }

   }
}
  //Created the `appendPageLinks function` to generate, append, and add 
  // functionality to the pagination buttons.

// Creating the container for our pagination links, 
   // the "apendPageLinks function" in order to generate,
   // append, and add functionality to the pagination buttons.

function appendPageLinks() {
   let pages = Math.ceil(eachStudent.length / studentsPerPage);
   
   //Created separate buttons for the 6 pages.
   const pagination = document.createElement('div');
   for (let i = 1; i <= pages; i += 1) {
      let pageLink = document.createElement('a');
      pageLink.className = 'active';
      pageLink.href = '#';
      pageLink.textContent = i;

// Added an event listener to listen for a click on the buttons 
// to rerun functions with the output of the page and the list.

      pageLink.addEventListener("click", () => {showPage(eachStudent, i)})
      pagination.appendChild(pageLink)
      pagination.appendChild(document.createTextNode (" ")); 
   } 
   // Creates each button for the pagination.
   document.body.appendChild(pagination)
} 

let searchInput = document.createElement('input');
let searchButton = document.createElement('button');
function showSearch() {
   searchInput.placeholder = 'Search for students...';
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton);
} // Function to display the search box dynamically.

const searchResults = [];
searchButton.addEventListener('click', () => {
   let filter = searchInput.value.toLowerCase();
   searchResults.length = 0;
   for (let i = 0; i < eachStudent.length; i++) {
      {
         if (eachStudent[i].innerHTML.indexOf(filter) > -1)
            eachStudent[i].style.display = ''; {
            eachStudent[i].style.display = 'none';
            searchResults.push(i);
         }
      }
      // Added an Event Listener for the search box to function properly so that the click of a button will send a signal to the computer to take you from one page to the next. 
      // Created an array to hold the number of hidden students.

// If all students are hidden, a "no results" message is displayed.
      if (searchResults.length === eachStudent.length) {
         noResultDiv.innerHTML = '<h1>No Results</h1>';
      } else {
         noResultDiv.innerHTML = '';
      }
   }; 
});

// Function call to display first ten students on the list.
showPage(eachStudent, 1);
//Function call to show the six separate page links.
appendPageLinks ()

