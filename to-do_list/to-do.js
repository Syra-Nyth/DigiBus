$(function() {
    let list = []

    $(`#btnAddTask`).click(function() {
        // get an item from the user
        let task = $(`#txtTask`).val()

        // add the item to the list
        list.push(task)

    }) // end button
    

    $(`#btnDelTask`).click(function() {
        // get an task number from the user
        let index = $(`#numDelTask`).val()
        // convert the task number to a number
        index = parseInt(index)

        // starting at index delete 1 task
        list.splice(index, 1)

    }) // end button


    $(`#btnPrintList`).click(function() {
        // start the list fresh
        $(`#lstTodoList`).empty()

        // for every list item add a <li>
        list.forEach(function(value, index) {
            $(`#lstTodoList`).append(`<li>Task Number ${index}: ${value}</li>`)

        })

    }) // end button

}) // end script
