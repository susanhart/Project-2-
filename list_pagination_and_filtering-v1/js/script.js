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

 const pageList = document.querySelector('ul');
 const eachStudent = pageList.children;
 const buttonDiv = document.querySelector('.pagination');
 const buttonU1 = buttonDiv.querySelector('ul');
 const studentsPerPage = 10;
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

function numberOfPages() {
   let pages = Math.ceil(eachStudent.length / studentsPerPage);
   return pages; 
}  // Function to determine number of pages based on the number of students.

for (let i = 1; i <= numberOfPages(); i++) {
   let pageli = document.createElement("li");
   let pageLink = document.createElement('a');
   pageLink.className = 'active';
   pageLink.href = '#';
   pageLink.textContent = i;
   buttonU1.appendChild(pageli);
   pageli.appendChild(pageLink);
}  // Loop to create page buttons based on number of required pages.

function showFirstTen() {
   for (let i = 0; i < eachStudent.length; i++) {
      if (i < studentsPerPage) {
         eachStudent[i].style.display = '';   
      } else {
         eachStudent[i].style.display = 'none';
      }
   }
} // Function to automatically show first ten students when page loads.

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

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
   for (let i = 0; i < eachStudent.length; i++){
      if (eachStudent[i].innerHTML.indexOf(filter) > -1);
      eachStudent[i].style.display = '';
   } else { 
      eachStudent[i].style.display = 'none';
      searchResults.push(i);
   }
   } 
    // Added an Event Listener for the search box to function properly so that the click of a button will send a signal to the computer to take you from one page to the next. 
   // Created an array to hold the number of hidden students.

if (searchResults.length === eachStudent.length) {
   noResultDiv.innerHTML = '<h1>No Results</h1>';    
   }  else {
      noResultDiv.innerHTML = '';
   }
}); // If all students are hidden, a "no results" message is displayed.

buttonDiv.addEventListener('click', (event) => {
   noResultDiv.innerHTML = '';
   let buttonNumber = parseInt(event.target.textContent); 
   // The `event` object is something made available inside an event listener. For example, when an event listener is created on a text input field, the event refers to the type of event- be it a click, keyup, onSubmit - there are many; the target is the place the event is happening- which is the text input field, and the textContent part grabs the text from the field. So, in a nutshell, that's how you grab data from the form.
   let max = buttonNumber * 10;
   let min = max - 10;
   for (let i = 0; i < eachStudent.length; i++) {
      if (i>= min && i < max) {
         eachStudent[i].style.display = '';
      } else {
         eachStudent[i].style.display = 'none';
      }
   }
}); // Added an Event Listener to divide the students between pages, ten per page.

showFirstTen(); 
// Function call to display first ten students on the list.

showSearch();
// Function call to show search box if JavaScript is enabled.

// Remember to delete the comments that came with this file, and replace them with your own code comments.