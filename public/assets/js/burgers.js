
$(document).ready( function() {
    console.log("ready");

    $(".devour").click((ev)=>{
        event.preventDefault;
        
        let id = ev.currentTarget.id;
        console.log(parseInt(ev.currentTarget.id));
        $.ajax("/index/burgers/"+id,{
            type: "PUT",
            data: false
        }).then(() => {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".addBurger").click(() => {
        event.preventDefault;
        let target = $("#someAlert");
        target.empty();
        let newBurger = $("#newBurg").val().trim();
        let newBurgOb = {
            burgername: newBurger,
            devour: 0
        };
        
        $("#newBurg").val("");
        if(newBurger) {
            $.ajax("/index/burgers",{
                type:"POST",
                data: newBurgOb
            }).then(()=>{
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            })
        }
        else {
            console.log("no tiene val");
            $("#alert").text("Please write a burger name Bitch!!");
            let alert = $('<div class="alert alert-primary" role="alert" id="alert">');
            alert.text("Please Write a burgern name!");
            target.append(alert);
        };
    });
});