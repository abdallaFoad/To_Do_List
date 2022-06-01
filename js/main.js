/*
Tasks : => [1] Add (sweet Alert) if input empty.
*/ 
//setting up variables
let theInput = document.querySelector('.add-task input'),
    theButton = document.querySelector('.add-task .plas'),
    tasksContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.task-count span'),
    tasksCompleted = document.querySelector('.task-completed span');

    // focus when load window
    window.onload = function () {
        theInput.focus();
    };

    //adding task
    theButton.onclick = function () {
        if (theInput.value === '') {

            console.log('this feild is empty');

        } else {
            
            let noTasksMas = document.querySelector('.no-tasks-message');

            if (document.body.contains(noTasksMas)) {

                noTasksMas.remove();
                
            }
            
        
            //create main span element
            let mainSpan = document.createElement('span');

            //create delete button 
            let deleteButton = document.createElement('span');

            //create text to main span
            let text = document.createTextNode(theInput.value);

            //create text to delete button
            let deleteText = document.createTextNode('Delete');

            //add text to main span
            mainSpan.appendChild(text);

            //add class to main span
            mainSpan.className  = 'tasks-box';

            //add delete text to button
            deleteButton.appendChild(deleteText);

            //add class to delete button 
            deleteButton.className = 'delete';

            //add delete button to main span
            mainSpan.appendChild(deleteButton);

            //add main span to tasks container
            tasksContainer.appendChild(mainSpan);

            theInput.value = '';

            theInput.focus();
            
            //function to clalulate tasks
            claclulateTasks();
        }        

    };

        document.addEventListener('click',  function (e) {

            if (e.target.className == 'delete'){

                e.target.parentNode.remove();

                //cheak number of tasks inside the container
                if (tasksContainer.childElementCount == 0) {

                    createNoTasks();
                }
            }
            
            if (e.target.classList.contains('tasks-box')){

                e.target.classList.toggle('finished');

            } 
            //function to clalulate tasks
            claclulateTasks();
    });


    function createNoTasks() {
        let mesSpan = document.createElement('span');
        let textSpan = document.createTextNode('No Tasks To Show');
        
        mesSpan.appendChild(textSpan);
        mesSpan.className = 'no-tasks-message';

        tasksContainer.appendChild(mesSpan);
    }

    //function to clalulate tasks
    function claclulateTasks() {

        tasksCount.innerHTML = document.querySelectorAll('.tasks-content .tasks-box').length;

        tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
    }