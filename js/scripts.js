$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});
//showing modals
$("#loginBtn").click(function(){
  $("#loginModal").modal("show")
})
$("#reserveFormBtn").click(function(){
  $("#formReserve").modal("show")
})
//hidding modals
$(".close").click(function(){
  $(".modal").modal("hide")
})
