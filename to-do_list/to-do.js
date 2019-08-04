$(function() {
    let list = []

    $(`#btnAddItem`).click(function() {
        let item = prompt(`Item: `)

        list.push(item)

    })
    
    $(`#btnPrintList`).click(function() {
        alert(list)

    })

})
