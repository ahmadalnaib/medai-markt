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