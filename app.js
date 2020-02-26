// $('.owl-carousel').owlCarousel({
//     margin:10,
//     loop:true,
//     autoWidth:true,
//     items:4
// })


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true
});
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[5000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})