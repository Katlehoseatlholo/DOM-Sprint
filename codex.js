const myTitle = document.querySelector(".Title");
console.log(myTitle);

const myHeading = document.querySelector(".Heading");
console.log(myHeading);

const AboutUs = document.querySelector(".About");
console.log(AboutUs);

// APPLY CHANGES TO DOM
setTimeout(function () {
  myTitle.innerText = "Welcome back Katleho Seatlholo";
}, 3000);

setTimeout(function () {
  myHeading.innerText =
    "Let's Go back and Grind, We have new Work for this sprint";
}, 3000);

setTimeout(function () {
  AboutUs.innerText = "This week we will work on the DOM and ALPIEJS";
}, 3000);

// Working with the button
const sprintContainer = document.querySelector("#sprint");
const theMessageButton = document.querySelector(".theMessageButton");
theMessageButton.addEventListener("click", function () {
  alert("GREAT!!! Let's get started with the work");

  // Create a heading element
  var heading = document.createElement("h2");
  heading.innerText = "Sprint";

  // Create a table element
  var table = document.createElement("table");

  // Create table rows
  var row1 = document.createElement("tr");
  var row2 = document.createElement("tr");

  // Create table cells (columns)
  var cell1 = document.createElement("td");
  cell1.innerText = "DOM";

  var cell2 = document.createElement("td");
  cell2.innerText = "AlPieJS";

  var cell3 = document.createElement("td");
  cell3.innerText = "REACT NATIVE";


  var cell4 = document.createElement("td");
  cell4.innerText = "Free Code Camp";

  var cell5 = document.createElement("td");
  cell5.innerText = "Academic Journal";

  // Append cells to the rows
  row1.appendChild(cell1);
  row1.appendChild(cell2);
  row1.appendChild(cell3);
  row2.appendChild(cell4);
  row2.appendChild(cell5);
  // Append rows to the table
  table.appendChild(row1);
  table.appendChild(row2);

  // Clear existing content
  sprintContainer.innerHTML = "";

  // Append heading and table to the sprint container
  sprintContainer.appendChild(heading);
  sprintContainer.appendChild(table);

  //Display Value Entered
  if (inputBox.value.trim().length > 0) {
    myMessage.innerText = inputBox.value;
 }
});

const clearButton = document.querySelector(".ClearButton");
clearButton.addEventListener("click", function () {
    
  alert("Congratulations! You have cleared your Sprint Work");
  setTimeout(function () {
    sprintContainer.innerText = "";
  }, 3000);

});
/////////////////////////////////////////////////
const inputBox = document.querySelector('.theInputValue');
const inputbutton = document.querySelector('.InputButton');
inputbutton.addEventListener('click', function() {
    alert("Congratulations You have successfully change your Theme")
    myMessage.classList.toggle('darkmode')
})