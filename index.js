// $(document).ready(function(){
//     $("h1").css("color","red");
// });

// $("h1").css("color","green");
// console.log(
//     $("h1").css("font-size")
// );

// $("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");
// $("h1").addId("title");
// $("h1").hasClass("margin-50");

// $("button").text("dont click me")
// $("button").html("<em>hey</em>")


// console.log($("a").attr("href"));
// $("a").attr("href","https://www.facebook.com");


// $("h1").click(function(){
//     $("h1").css("color","purple");
// })


// $("button").click(function(){
//     $("h1").css("color","purple");
// })

// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color","red");
// })


$("button").click(function(){
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();

    // how to slide
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();

    // for custom css
    $("h1").animate({opacity:0.5});
})

// $("h1").show();