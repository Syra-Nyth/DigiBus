// when the webpage loads
$(function () {

    const menu = [
        `Strawberry`,
        `Blueberry`,
        `Raspberry`,
        `Mango`,
        `Banana`,
        `Pineapple`,
        `Coconut`,
        `Goji`,
        `Pomegranate`
    ]

    const prices = [
        5,
        5,
        5,
        5,
        5,
        5,
        7.5,
        7.5,
        7.5
    ]

    updateMenu()

    function updateMenu() {
        // empty the menu list
        $(`#lstMenuList`).empty()
        
        // for each value in the menu...
        menu.forEach( function (value, index) {
            // append each item to the menu list as a list item
            $(`#lstMenuList`).append(`<li><input id="chk${index}" type="checkbox"><label for="chk${index}">${value} ($${prices[index]})</label></li>`)
        }) // end forEach 

    } // end function


    // create an array for the order list
    let orderList = []

    // when the create order button is clicked
    $(`#btnCreateOrder`).click(function () {
        // create an object for the order
        let order = {}
            // let 'custName' in the order be taken from the customer
            order.custName = $(`#txtCustName`).val(),
            order.milkType = ``,
            order.items = [],
            order.totalCost = ``

        // ################ NAME ################


        // if there's no input or if the name is over 35 characters long
        if (order.custName === `` || order.custName.length >= 35) {
            // alert wrong name
            alert(`You have not given a proper name. Please try again.`)
        } else {

            // start the total cost at 0
            let totalCost = 0


            // ################ SMOOTHIES ################


            menu.forEach( function (value, index) {
                // if the index check is checked
                if ($(`#chk${index}`).prop(`checked`)) {
                // push the smoothie flavour to the order
                order.items.push(` ${value},${prices[index]}`)
                // add the smoothie cost to the total cost
                totalCost += prices[index]
                }
            })


            // ################ MILK ################


            // let almMilkPrice be the number of smoothies timesed by 0.5
            let almMilkPrice = order.items.length * .5

            // if the regular milk rad is checked
            if ($(`#radMilkRegular`).prop(`checked`)) {
                // let milk be the customer's milk choice
                let milk = (`Regular Milk`)
                // let 'milkType' in the order be 'milk'
                order.milkType = milk
            }
            // if the almond milk rad is checked
            else if ($(`#radMilkAlmond`).prop(`checked`)) {
                // let milk be the customer's milk choice
                let milk = (`Almond Milk`)
                // let 'milkType' in the order be 'milk'
                order.milkType = milk
                // let the almMilkPrice be added to the total cost
                totalCost += almMilkPrice
            }


            // ################ COST ################


            // if the milk type is undefined
            if (order.milkType.length === 0) {
                // alert no milk
                alert(`You have not chosen a milk type. Please try again.`)
                // empty the order list
                emptyList()
            } 
            // else if no smoothie flavours are selected
            else if (order.items.length === 0) {
                // alert no items
                alert(`You have not chosen any smoothies flavours. Please try again.`)
                // empty the order list
                emptyList()
            } 
            // otherwise
            else {
                // let 'totalCost' in the order be the total cost
                order.totalCost = (`$${totalCost}`)

                // push the order to the order list
                orderList.push(order)
                // update the order list
                updateOrders()
            } // end else

        } // end else
    }) // end button

    // to empty the list
    function emptyList() {
        // clear the order list
        orderList.length = 0
    }


    // ################ UPDATE ORDERS ################


    // to update the order list
    function updateOrders() {
        // empty the orders list
        $(`#lstOrdersList`).empty()
        // for each item in the orders list
        orderList.forEach(function (value, index) {
            // append it to the webpage
            $(`#lstOrdersList`).append(
                `<li>Order Number: ${index} <br> 
            Customer Name: ${value.custName} <br>
            Milk Type: ${value.milkType} <br>
            Items: ${value.items} <br>
            Total Cost: ${value.totalCost}</li>`)
        }) // end forEach
    } // end function


    // ################ REMOVE ORDERS ################


    // when the remove order button is clicked
    $(`#btnRemoveOrder`).click(function () {
        // get an task number from the user
        let index = $(`#numOrderNum`).val()
        // convert the task number to a number
        index = parseInt(index)
        // if the number is below zero
        if (index < 0) {
            // alert that the number is too small.
            alert(`Order number is too small to remove. Please try again.`)
        } else{
        // starting at index delete 1 task
        orderList.splice(index, 1)
        // update list when finished
        updateOrders()
        } // end else
    }) // end button

})