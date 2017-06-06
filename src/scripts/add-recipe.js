"use strict";

let initLoadMoreBtns = function() {

    // SHOW - add to group - AND - remove - BUTTONS
    $('.ingridient__btn-more').on('click', function(e) {
        e.preventDefault();

        let id = $(this).data('rel');

        $('.js-extra-fields[data-id="' + id + '"]').fadeIn();
        $(this).fadeOut();
    });
}

initLoadMoreBtns();

let initOptionsBtns = function() {

    // SHOW DROPDOWN WITH OPTIONS (only mobile)
    $('.js-add-recipe-options').on('click', function(e) {
        e.preventDefault();

        $('.dropdown-menu').slideDown();
    });

    $('.dropdown-menu__btn-close').on('click', function(e) {
        e.preventDefault();

        $('.dropdown-menu').slideUp();
    })
}

initOptionsBtns();
