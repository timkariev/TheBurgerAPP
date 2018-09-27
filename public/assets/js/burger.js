

//Click handler for devour it button
$(document).on('click', '.eat-burger', function(){
    console.log("button eat clicked");

    let id = parseInt($(this).data("id"));
    console.log("ID: "+ id);

    $.ajax(`/api/burger/${id}`, {
        type: 'PUT',
        data: {
            devoured: 1,
            id: id
        }
    }).then(function(){
        console.log("Ate the burger!")
        location.reload();
    })

})


//Button click to add a new burger 
$(document).on('click', '.new-burger', function(){
    console.log("new burger button clicked");
    console.log($('#new-burger').val());


    //Grab the text from the input field
    let newBurger = $('#new-burger').val().trim();
    console.log(newBurger);

    $.ajax("/api/burger",
        {
            type: 'POST',
            data: 
            {
                name: newBurger
            }
        }).then(
            function(){
                console.log("Created the new burger");
                location.reload();
            }
        )

    //Clear out the form
    $('#new-burger').empty();
})
