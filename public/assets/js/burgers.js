
function newBurger() {
    var newBurger = {
        burger_name: $("#name").val().trim(),
    };
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
}

function eatBurger() {
    var id = $(this).data("id");
    $.ajax("/api/burger", {
        type: "PUT",
        data: {
            id: id
        }
    }).then(
        function () {
            location.reload();
        }
    );
}
$(document).on("click", "#new", newBurger);
$(document).on("click", ".eatBurger", eatBurger);  
