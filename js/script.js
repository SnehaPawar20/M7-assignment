// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById("addForm");
let table = document.getElementById("employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let extension = document.getElementById("extension").value;
  let email = document.getElementById("email").value;
  let department = document.getElementById("department").value;
  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let row = table.insertRow();
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let cellID = row.insertCell();
  let cellname = row.insertCell();
  let cellextension = row.insertCell();
  let cellemail = row.insertCell();
  let celldepartment = row.insertCell();
  let textid = document.createTextNode(id);
  let textname = document.createTextNode(name);
  let textextension = document.createTextNode(extension);
  let textemail = document.createTextNode(email);
  let textdepartment = document.createTextNode(department);
  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cellID.appendChild(textid);
  cellname.appendChild(textname);
  cellextension.appendChild(textextension);
  cellemail.appendChild(textemail);
  celldepartment.appendChild(textdepartment);
  // CREATE THE DELETE BUTTON
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  //let celldeleteBtn = row.insertCell();
  let textDelete = document.createTextNode("X");
  deleteBtn.appendChild(textDelete);
  row.appendChild(deleteBtn);
  // RESET THE FORM
  form.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  function focusInput() {
    document.getElementById("id").focus();
  }
  focusInput();
  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  rowCount();
});

// DELETE EMPLOYEE
table.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this employee data?")) {
      table.deleteRow(e.target.parentNode.rowIndex);
    }
    rowCount();
  }
});
function rowCount() {
  count = table.rows.length;
  document.getElementById("empCount").innerHTML = count - 1 + " entries";
}
