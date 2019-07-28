$(document).ready( function() {
    let students = ['Amelie', 'Emily', 'Gen', 'Katherine', 'Sam', 'Addison', 'Lilly', 'Molly', 'Tayla', 'Izzy']
    
    $('#btnShowStudents').click( function() {
      alert(students)
    })  
      
    $('#btnPrintStudents').click( function() {
      for(let i = 0; i < students.length; i++) {
        alert(students[i])
      }
    })
    
    $('#btnAddStudent').click( function() {
      let add = prompt('Add a student.')
      students.push(add)
    })
    
    $('btnFindStudent').click( function() {
      let name = prompt('Who would you like to find?')
      let found = 'No'

      for (let i = 0; i < students.length; i++) {
          if (name === student [i])
          found = 'Yes'
      }
    })
  })