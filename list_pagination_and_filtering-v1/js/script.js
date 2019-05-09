/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//The list of variables (that store the DOM elements) needed to paginate.
 //Assigning ten students per page load.

const studentsPerPage = 10;
const pageList = document.querySelector('ul');
const eachStudent = pageList.children;

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

   let page = document.body.querySelector('.page');
   //Added variable "page" so that the buttons would be 
   //part of the div (container) with className "page".

   const pagination = document.createElement('div');
   
   pagination.className = "pagination";
   //Added the className of "pagination" to the div,
   //ensuring that the buttons recieve the css styling
   //connected to the div with the "pagination" classname.

   page.appendChild(pagination);
   // This appends the div to the page which
   //partly is what places the buttons in the 
   //correct place.

   const ul = document.createElement('ul'); 
   
   pagination.append(ul);
   //This adds the <ul> element to the div I created.

   for (let i = 1; i <= pages; i += 1) {
      let pageLink = document.createElement('a');
      const li = document.createElement('li');
      pageLink.className = 'active';
      pageLink.href = '#';
      pageLink.textContent = i;

      li.appendChild(pageLink)
      //This connects the li elements to the div as well. 

// Added an event listener to listen for a click on the buttons 
// to rerun functions with the output of the page and the list.

      ul.appendChild(li)      

      pageLink.addEventListener("click", () => {showPage(eachStudent, i)})
      
      pagination.appendChild(document.createTextNode (" ")); 
      
   } 
} 
// Function to display the search box dynamically.

let searchInput = document.createElement('input');
let searchButton = document.createElement('button');
let searchDiv = document.createElement('div')
function showSearch() {
   searchInput.placeholder = 'Search for students...';
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton);
   const Students = document.querySelector('.page-header');
Students.appendChild(searchDiv)
const noResultDiv = document.querySelector('.no-result');
} 
const searchResults = [];

 // Added an Event Listener for the search box to function properly so that the click of a button will send a signal to the computer to take you from one page to the next. 
      // Created an array to hold the number of hidden students.

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

//Function call to show the search box for searching for a particular student from the list of 54 students.
showSearch ()