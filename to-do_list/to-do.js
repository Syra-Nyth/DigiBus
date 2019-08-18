$(function() {
    let list = []

    $(`#btnAddTask`).click(function() {
        // get an item from the user
        let task = {}
        task.description = $(`#txtTaskDescription`).val()
        task.priority = parseInt($(`#numTaskPriority`).val())
        task.dueDate = new Date($(`#datTaskDueDate`).val())
        // add the item to the list
        list.push(task)

        // update list when finished
        updateList()
    }) // end button
    

    $(`#btnDelTask`).click(function() {
        // get an task number from the user
        let index = $(`#numDelTask`).val()
        // convert the task number to a number
        index = parseInt(index)

        // starting at index delete 1 task
        list.splice(index, 1)

        // update list when finished
        updateList()
    }) // end button

    $(`#btnCompleteTask`).click(function() {
        let index = $(`#numCompleteTask`).val()
        index = parseInt(index)
        list[index].completed = true
        updateList()
    })

    $(`#btnRefresh`).click(function() {
        updateList()
    })

    // function for updating the list
    function updateList() {
        // start the list fresh
        $(`#lstTodoList`).empty()

        // for every list item add a <li>
        list.forEach(function(value, index) {
            // if the overdue button is checked
            if ($(`#radOverdue`).prop(`checked`)) {
                // if the due date has been passed and the item is not completed
                if (value.dueDate < 13/08/2019 && value.completed === false) {
                    // append the task to the 
                    $(`#lstTodoList`).append(`<li>Task Number ${index}: ${value.description} --> Due: ${value.dueDate.toDateString()} --> Complete: ${value.completed}</li>`)
                // end if
                }
            // else if the completed button is checked
            } else if ($(`#radCompleted`).prop(`checked`)) {
                // if the task is completed
                if (value.dueDate < 13/08/2019 && value.completed === true) {
                    // append the task to the list
                    $(`#lstTodoList`).append(`<li>Task Number ${index}: ${value.description} --> Due: ${value.dueDate.toDateString()} --> Complete: ${value.completed}</li>`)
            // else
            } else {
                // append the task to the list
                $(`#lstTodoList`).append(`<li>Task Number ${index}: ${value.description} --> Due: ${value.dueDate.toDateString()} --> Complete: ${value.completed}</li>`)
            // end else
            }
        // end forEach        
        }
    // end button
    })
// end script
}
})