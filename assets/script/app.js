
let nav=document.querySelector('#nav')
// ! this needs to be finneshed

//show social media

$('.smedia').on({
    click:(function () {
        $('.social-media').removeClass('d-none');
        // $('.social-media').fadeToggle('slow');
        // console.log($('.social-media'))
        // alert('hey')
})
})
window.addEventListener('scroll', s => {
    if  (document.documentElement.scrollTop > 350){
        $('#nav').addClass('stickyTop')
    }
    else if (document.documentElement.scrollTop < 350) {
        $('#nav').removeClass('stickyTop')
        
    }
})

//* ------- closing social media menu

$('.social-media .close').on({
    click: function (e) {
        e.preventDefault();
        $('.social-media').addClass('d-none');
    }
})

function hey() {
    $('nav').addClass('show');
}

//* -------  closing nav menu
$('nav .close').on({
    click: function (e) {
        e.preventDefault();
        $('nav').removeClass('show');
    }
})
window.addEventListener('click', c => {
    if (c.target.parentElement.tagName != 'LI') {
        $('nav').removeClass('show');
        // $('.social-media').addClass('d-none');
    } 
}, 'useCapture')


//* ---- hiding the social media icon
$('header').on({
    click: function (hideSocialMedia) {
        $('.social-media').addClass('d-none');
        
    }
})
$('.container').on({
    click: function (hideSocialMedia) {
        $('.social-media').addClass('d-none');
        
    }
})
$('footer').on({
    click: function (hideSocialMedia) {
        $('.social-media').addClass('d-none');
        
    }
})

//* --------------------------------------
$('.send-message').on({
    click: function () {
        $('#messageTeam').removeClass('d-none')
        $('#nothing').removeClass('d-none')
        $('.msg-wrap').removeClass('d-none')
    }
})

//* --- closing the message box------
$('#messageTeam .close').on({
    click: function (c) {
        c.preventDefault();
        $('#messageTeam').addClass('d-none')
        $('#nothing').addClass('d-none')
        $('.msg-wrap').addClass('d-none')
    }
})

//* ---- thru submiting the form
$('#messageTeam form').on({
    submit: function (s) {
        s.preventDefault();
        $('#messageTeam').addClass('d-none')
        $('#nothing').addClass('d-none')
        $('.msg-wrap').addClass('d-none')
    }
})


//* --- throught nav ul
$('nav ul li a').on({
    click: function () {
        $('#messageTeam').addClass('d-none')
        $('#nothing').addClass('d-none')
        $('.msg-wrap').addClass('d-none')
    }
})

//* ---- contactUs form-----
$('#contactUs form').on({
    submit: function (s) {
        s.preventDefault();
        $('.thanks').removeClass('d-none');
    }
})
