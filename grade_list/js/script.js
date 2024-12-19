let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let grade = document.getElementById("grade");
let insert = document.getElementById("submit");
let dataTable = document.getElementById("dataTable");

loadData();

function passFail(gradeValue) {
  if (gradeValue >= 90 && gradeValue <= 100) {
    return "Pass";
  } else if (gradeValue >= 80 && gradeValue < 90) {
    return "Pass";
  } else if (gradeValue >= 70 && gradeValue < 80) {
    return "Pass";
  } else if (gradeValue < 50) {
    return "Fail";
  } else {
    return "Invalid Grade";
  }
}



insert.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value === "" || lastName.value === "" || grade.value === "") {
    alert("Please fill in all fields");
  } else {
    let rowCell = document.createElement("tr");
    let indexCell = document.createElement("th");
    let firstCell = document.createElement("td");
    let lastCell = document.createElement("td");
    let gradeCell = document.createElement("td");
    let pfCell = document.createElement("td");

    // Calculate the row number dynamically
    indexCell.innerText = dataTable.querySelectorAll("tr").length + 1;
    firstCell.innerText = firstName.value;
    lastCell.innerText = lastName.value;
    gradeCell.innerText = grade.value;
    pfCell.innerText = passFail(Number(grade.value));

    // Append the cells to the row
    rowCell.appendChild(indexCell);
    rowCell.appendChild(firstCell);
    rowCell.appendChild(lastCell);
    rowCell.appendChild(gradeCell);
    rowCell.appendChild(pfCell);

    // Append the row to the table body
    dataTable.appendChild(rowCell);

    // Clear the input fields
    firstName.value = "";
    lastName.value = "";
    grade.value = "";
    saveData();
  }
});

function saveData() {
    // Save table data to localStorage
    localStorage.setItem("tableData", dataTable.innerHTML);
  }
  
  function loadData() {
    // Load data from localStorage if it exists
    if (localStorage.getItem("tableData")) {
      dataTable.innerHTML = localStorage.getItem("tableData");
    }
  }