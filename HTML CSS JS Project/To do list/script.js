
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#tasklist");
let total = document.querySelector("#total");
let complete = document.querySelector("#complete");
let count = 0;
let completed = 0;
let incomplete = 0;
let taskInput = document.querySelector("#taskInput");

 addButton.addEventListener("click", function() {
    
  let task = taskInput.value;
  let li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" id="checkbox"> ${task} <button id="deleteButton">X</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
  count++;
  total.innerHTML = count;  
  let checkbox = li.querySelector("#checkbox");
  checkbox.addEventListener("change", function() {

    if(checkbox.checked){
      completed++;
       complete.textContent = completed
       incomplete--
    }else{
      completed--;
      complete.textContent = completed
      incomplete++
      total.textContent = incomplete + count
    }

  })
 

 })

  taskList.addEventListener("click", function(e) {
    if(e.target.id === "deleteButton") {
      let li = e.target.parentNode;
      taskList.removeChild(li);
      count--;
      total.innerHTML = count;
      if (e.target.previousElementSibling.checked) {
        completed--;
        complete.textContent = completed;
      }
    }
  })