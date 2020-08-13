// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {
  $(".change-chomp").on("click", function (event) {
    var id = $(this).data("id");
    var newChomp = $(this).attr("chomp");

    var newChompState = {
      chomp: newChomp
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newChompState
    }).then(
      function () {
        console.log("changed chomp to", newChomp);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#enterBurger").val().trim(),
      chomp: $("[name=chomp]:checked").val()
    };

    if (newBurger.burger_name) {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    } else {
      alert("Please enter a type of burger first!")
    }
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});