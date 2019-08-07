$(function() {
    let todoList = []

    $(`#btnAddTask`).click(function() {
        // get an item from the user
        let task = $(`#txtTask`).val()

        // add the item to the list
        todoList.push(task)

    }) // end button
    
    $(`#btnPrintList`).click(function() {
        // start the list fresh
        $(`#lstTodoList`).empty()

        // for every list item add a <li>
        todoList.forEach(function(value, index) {
            $(`#lstTodoList`).append(`<li>Task Number ${index}: ${value}</li>`)

        })

    }) // end button

}) // end script
