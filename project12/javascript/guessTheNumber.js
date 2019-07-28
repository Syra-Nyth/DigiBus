//Wait for the document to be ready
$(document).ready( function() {
  //Let the number be a random number
  let theNumber = Math.floor(Math.random() * 10)
  //Let the number of guesses be 3
  let numOfGuesses = 3
  
  //Wait for the button to be clicked
  $('#btnGuessNumber').click( function() {

    //Let the player's guess be taken from the value they inputted
    let playerGuess = $('#txtGuess').val()
    //Allow the guess to be either a number or a string
    playerGuess = parseInt(playerGuess)

    //If the player's guess is comparative to the number then
    if (playerGuess === theNumber){
      //Let the player know that they guessed right, and ask them for a new number
      $('#txtOutput').text("Well done! That's correct! Now I'm thinking of a different number. Can you guess it?")
      //Let the number be a random number
      theNumber = Math.floor(Math.random() * 10)
      //Restart the number of guesses
      numOfGuesses = 3
    //If the player's guess in not comparative to the number then  
    } else if (playerGuess === 'NaN') {
      $('#txtOutput').text("That's not a number. Please try again.")
    } else {
      //If the number of guesses is now 0 then
      if (numOfGuesses === 0) {
        //Let the player know that they have run out of guesses, and restart the game
        $('#txtOutput').text(`You've run out of guesses. The number was ${theNumber}. Let's start again!`)
        //Let the number be 3
        theNumber = Math.floor(Math.random() * 10)
        //Restart the number of guesses
        numOfGuesses = 3
      //If the player still has guesses left
      } else {
        //Let the player know that their guess was wrong, and tell them whether it was higher or lower
        if (playerGuess < theNumber) {
          $('#txtOutput').text("That's wrong. The number is bigger. Try again.")
        } else {
        //Let the player know that their guess was wrong, and tell them whether it was higher or lower
         (playerGuess > theNumber) 
          $('#txtOutput').text("That's wrong. The number is smaller. Try again.")
        }
        //Take away one guess
        numOfGuesses--
      } // end else
    } //end else
  }) //end button
}) //end script