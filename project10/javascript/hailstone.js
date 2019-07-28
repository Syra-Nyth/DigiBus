$(document).ready(function() {
    $('#btnHailstone').click(function(){

      let rangeNum = prompt("Maximum Range Integer: ")
      for(i=1; i < rangeNum; i++) {
        let counter = 0
        let sequence = ''

        while(i != 1){

          if ( i % 2 === 0) {
            i = i / 2
            counter++
            sequence = sequence + '>' + i
          }

          else{
            i = i * 3 + 1
            counter++
            sequence = sequence + '>' + i
          }
          
        }

      }
      alert('Length: ' + counter, 'Hailstone Sequence: ' + sequence)
    });

    $('#countAllNums').click( function (){
      let i = 0
      
      while(i <= 10) {
        alert(i)
        i++
      }
    })
    
    $('#countEvenNums').click( function() {
      let i = 0
      
      while(i <= 10) {
        alert(i)
        i = i + 2
      }
    })
    
    $('#countOddNums').click( function() {
      let i = 1
      
      while(i <= 10) {
        alert(i)
        i = i + 2
      }
    })

});
