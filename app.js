$(window).scroll(function(){
    let value = window.scrollY
    $('.chamada1').css('position', 'relative')
    $('.chamada1').css('right', value * 1.2 + 'px')
    $('.chamada1').css('top', value * 0.2 + 'px')
})


$('nav.menu-mobile').click(function(){
    $('nav.menu-mobile ul').slideToggle()
})