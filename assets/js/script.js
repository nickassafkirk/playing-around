
function changeColor(){
    let redBox = document.getElementsByClassName("red-centered-box")[0];

    let status = window.getComputedStyle(redBox, null).visibility;

    if(status === "visible"){
        button.style.backgroundColor = "green";
        button.innerText = "Show";
        redBox.style.visibility = "hidden";
    } else if(status === "hidden"){
        button.style.backgroundColor = "orange";
        button.innerText = "Hide";
        redBox.style.visibility = "visible";
    } else {
        console.log("error");
    }
}


let button = document.getElementById("show-button");

button.addEventListener("click",changeColor);

//jquery test

$("#blue-button").click(function(){
    $(".blue-centered-box").fadeTo('slow', 0.1).fadeTo("slow", 1);
    //first fafe to mades to o.1, the second then fades back to original opacity
})

// importance of this excercise 

$("p").click(function(){
    $(this).slideToggle(1000); 
});

$("button").mouseenter(function(){
    $(this).removeClass('makeRed').addClass("makeBlue");
});

$("button").mouseleave(function(){
    $(this).removeClass('makeBlue').addClass("makeRed");
});

 /* $(document).ready(function(){
    $(".box").on("click", function(){
        let classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    });
}); */

$(document).ready(function(){
    $(".box").on("click", function(){
        // when we click on an element that has the "box" class this event will be fired 
        let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            //else turn all elements with a box class black
            //and then change the color of all elements with the same class
            //as the clicked element to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        };
    });
});








