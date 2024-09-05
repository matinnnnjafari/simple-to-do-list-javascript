function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        //create a new list of item for task
        const li = document.createElement('li');

        //create a checkbox for the task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', markCompleted);


        //create a span element to hold the text 
        const span = document.createElement('span');
        span.textContent = taskText;


        //remove a button 
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener('click', removeTask)


        //append checkbox , span , and remove button to the list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);

        //add the list item to the task list
        taskList.appendChild(li)

        //clear the input field
        taskInput.value = '';

    } else {
        alert('please enter your task');
    }
}
//function to mark a task as completed
function markCompleted(event) {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
        listItem.querySelector('span').classList.add('completed');
    } else {
        listItem.querySelector('span').classList.remove('completed');
    }
}

// function to remove a task from the list
function removeTask(event) {
    const listItem = event.target.parentElement;
    listItem.remove();
}