// Variables
var taskDiv = document.querySelector('.taskDiv');


// Enter key 
inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
});


// Function to create a new task
function createTask() {
    let inputBox = document.getElementById('inputBox').value
    if (inputBox.length == 0) {
        alert("Plase type something before submiting.")
    } else {
        taskDiv.innerHTML += `
        <div class="task" id="task1">
            <span class="span">${inputBox}</span>
            <i class="fas fa-trash" id="btnDel1"></i>
            <i class="fas fa-check-square" id="btnCom1"></i>
        </div>`
        
    }


    // Function to delete the current task
    var current_tasks = document.querySelectorAll(".fa-trash");
    for(var i=0; i<current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
            this.parentNode.remove()
        }
    }


// Function to comlete the current task
    var tasks = document.querySelectorAll(".fa-check-square");
    for(var i=0; i<tasks.length; i++) {
        tasks[i].onclick = function() {
            document.querySelector('.span').classList.toggle('complete')
        }
    }

// Function to clear the inputBox task
    let inputBox1 = document.getElementById('inputBox');
    inputBox1.value = ''
}

