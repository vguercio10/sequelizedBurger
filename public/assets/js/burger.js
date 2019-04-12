$(document).ready(function (){
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_Name: $("#burgername").val().trim(),
          devoured: false
        };
        console.log("newBurger" + newBurger);

        // Send the POST request.
        $.ajax("./api/newBurger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    // console.log("hello");
    $("body").on("click", "button#switch", function(event) {
      event.preventDefault();
      console.log("line 27 clicked");
      var newDevoured = true;
      var id = $(this).data("burgerid");
      var newDevouredState = {
        devoured: newDevoured,

      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("burgerdevoured");
          location.reload();
        }
      );
    });
    
});
