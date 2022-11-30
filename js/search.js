window.addEventListener('scroll' , function() {

    const srNav = document.getElementById('srNav');
    const srBody = document.getElementById('srBody');

    if(window.pageYOffset > 0) {
        srNav.classList.add('sr_activated');
        srBody.classList.add('sr_unload');
    } else {
        srNav.classList.remove('sr_activated');
        srBody.classList.remove('sr_unload');
    }

});