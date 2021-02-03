document.querySelector("#add-burger").addEventListener("click", function(e) {
    var burgerName = document.querySelector("#burger-input").value
    console.log('burgerName:', burgerName)

    fetch('/api/burger', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({burger_name: burgerName}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  
  
  document.querySelectorAll(".change-devoured").forEach(element => {
    console.log(element)
    
    element.addEventListener("click", function(e) {
      if (e.target.dataset.devoured === "false") {
        var devoured = true
      }else {
        var devoured = false
      }
    console.log('devoured:', devoured)
    var id = e.target.dataset.id    
    fetch('/api/burger/'+id, {
      method: 'PUT', // or 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({devoured: devoured}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })
  }); 