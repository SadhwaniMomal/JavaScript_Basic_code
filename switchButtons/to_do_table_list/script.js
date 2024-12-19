let inputName = document.getElementById("taskInput1");
let inputGrade = document.getElementById("taskInput2");
let insertBtn = document.getElementById("insertBtn");
let listTable = document.querySelector(".listBody");
let count = 1;

insertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputName.value === "" || inputGrade.value === "") {
    alert("Please Enter Both Name And Grade");
  } else {
    let indexCell = document.createElement("th");
    let newRow = document.createElement("tr");
    let nameCell = document.createElement("td");
    let gradeCell = document.createElement("td");
    let statusCell = document.createElement("td");

    indexCell.textContent = count++;
    nameCell.textContent = inputName.value;
    gradeCell.textContent = inputGrade.value;
    statusCell.innerHTML = `<button class="btn btn-sm btn-danger deleteBtn">Delete</button>`;

    newRow.appendChild(indexCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(gradeCell);
    newRow.appendChild(statusCell);

    listTable.appendChild(newRow);
  }
  inputName.value = "";
  inputGrade.value = "";
  saveTask();
});

function saveTask() {
  localStorage.setItem("tasks", listTable.innerHTML);
}

function loadTasks() {
  listTable.innerHTML = localStorage.getItem("tasks") || "";
  // Reattach delete events
  document.querySelectorAll(".deleteBtn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.closest("tr").remove();
      saveTask();
    })
  );
}

// Load tasks on page load
loadTasks();
