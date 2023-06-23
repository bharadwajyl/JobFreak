$(".tab_transition a").click(function(){
    let pos = $(this).index()+1;
    if ($(".tab_transition").children().hasClass("active")) {
       $(".tab_transition").children().removeClass("active")
    }
    $(this).addClass("active");
    $(".tabs").hide('slow');
    $(".tab_" + pos).show('slow');
});
