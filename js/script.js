$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut(200)
                                .next('a').fadeIn(200)
                                .end().appendTo('.imgslide');
},5000);