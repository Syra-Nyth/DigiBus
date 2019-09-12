// when the webpage loads
$(function () {

    const menu = [
        `Strawberry($5)`,
        `Blueberry($5)`,
        `Raspberry($5)`,
        `Mango($5)`,
        `Banana($5)`,
        `Pineapple($5)`,
        `Coconut($7.50)`,
        `Goji($7.50)`,
        `Pomegranate($7.50)`
    ]
    updateMenu()

    function updateMenu() {
        // empty the menu list
        $(`#lstMenuList`).empty()
        
        // for each value in the menu...
        menu.forEach( function (value, index) {
            // append each item to the menu list as a list item
            $(`#lstMenuList`).append(`<li><input id="chk${index}" type="checkbox"><label for="chk${index}">${value}</label></li>`)
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

            // start the count of smoothies at 0
            let items = 0


            // ################ SMOOTHIES ################


            // if the strawberry checkbox is checked
            if ($(`#chk0`).prop(`checked`)) {
                // let straw be Strawberry
                let straw = (`Strawberry,5`)
                // push the smoothie flavour to the order
                order.items.push(straw)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 5
                // add one to the count of smoothies
                items++
            }
            // if the blueberry checkbox is checked
            if ($(`#chk1`).prop(`checked`)) {
                // let blue be Blueberry
                let blue = (`Blueberry,5`)
                // push the smoothie flavour to the order
                order.items.push(blue)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 5
                // add one to the count of smoothies
                items++
            }
            // if the raspberry checkbox is checked
            if ($(`#chk2`).prop(`checked`)) {
                // let rasp be Raspberry
                let rasp = (`Raspberry,5`)
                // puch the smoothie flavour to the order
                order.items.push(rasp)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 5
                // add one to the count of smoothies
                items++
            }
            // if the mango checkbox is checked
            if ($(`#chk3`).prop(`checked`)) {
                // let mango be Mango
                let mango = (`Mango,5`)
                // push the smoothie flavour to the order
                order.items.push(mango)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 5
                // add one to the count of smoothies
                items++
            }
            // if the banana checkbox is checked
            if ($(`#chk4`).prop(`checked`)) {
                // let bana be Banana
                let bana = (`Banana,5`)
                // push the smoothie flavour to the order
                order.items.push(bana)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 5
                // add one to the count of smoothies
                items++
            }
            // if the pineapple checkbox is checked
            if ($(`#chk5`).prop(`checked`)) {
                // let pine be Pineapple
                let pine = (`Pineapple,5`)
                // push the smoothie flavour to the order
                order.items.push(pine)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 5
                // add one to the count of smoothies
                items++
            }
            // if the coconut checkbox is checked
            if ($(`#chk6`).prop(`checked`)) {
                // let coco be Coconut
                let coco = (`Coconut,7.50`)
                // push the smoothie flavour to the order
                order.items.push(coco)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 7.5
                // add one to the count of smoothies
                items++
            }
            // if the goji checkbox is checked
            if ($(`#chk7`).prop(`checked`)) {
                // let goji be Goji
                let goji = (`Goji,7.50`)
                // push the smoothie flavour to the order
                order.items.push(goji)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 7.5
                // add one to the count of smoothies
                items++
            }
            // if the pomegranate checkbox is checked
            if ($(`#chk8`).prop(`checked`)) {
                // let pome be Pomegranate
                let pome = (`Pomegranate,7.50`)
                // push the smoothie flavour to the order
                order.items.push(pome)
                // add the smoothie cost to the total cost
                totalCost = totalCost + 7.5
                // add one to the count of smoothies
                items++
            }


            // ################ MILK ################


            // let almMilkPrice be the number of smoothies timesed by 0.5
            let almMilkPrice = items * .5

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
                totalCost = totalCost + almMilkPrice
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
            else if (items === 0) {
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