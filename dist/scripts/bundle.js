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

"use strict";

const navigationSetup = function(navigationElement, toggleBtn, desktopDropdown, desktopDropdownBtn) {
    let $navigation = document.querySelector(navigationElement);
    let $toggleBtn = document.querySelector(toggleBtn);
    let $desktopDropdown = document.querySelector(desktopDropdown);
    let $desktopDropdownBtn = document.querySelector(desktopDropdownBtn);

    let init = function() {
        $toggleBtn.addEventListener('click', toggleMenu);
        $desktopDropdownBtn.addEventListener('click', toggleDesktopDropdown);
        //$desktopDropdownBtn.addEventListener('mouseover', showDesktopDropdown);
        //$desktopDropdownBtn.addEventListener('mouseout', hideDesktopDropdown);
    }

    // let showDesktopDropdown = function() {
    //     $desktopDropdownBtn.classList.add('open');
    //     $desktopDropdown.classList.add('open');
    // }
    //
    // let hideDesktopDropdown = function() {
    //     $desktopDropdownBtn.classList.remove('open');
    //     $desktopDropdown.classList.remove('open');
    // }

    let toggleMenu = function() {
        if($navigation.classList.contains('open')) {
            $navigation.classList.remove('open');
            $toggleBtn.classList.add('collapsed');
        } else {
            $navigation.classList.add('open');
            $toggleBtn.classList.remove('collapsed');
        }
    }

    let toggleDesktopDropdown = function(e) {
        e.preventDefault();

        $desktopDropdownBtn.classList.toggle('open');
        $desktopDropdown.classList.toggle('open');
    }

    init();
}

"use strict";

const recipeSetup = function() {

    // main recipe container
    let recipe = document.querySelector('.m-recipe');
    // elements
    let favoritesContainer = document.querySelector('.add-to-favorites__wrapper');
    let contentContainer = document.querySelector('.m-recipe__content');
    let macroContainer = document.querySelector('.m-recipe__macro-wrapper');
    let title = document.querySelector('.m-recipe__title');
    let firstPhotoInitialContainer = document.querySelector('.photos__item');
    let firstPhoto = document.querySelector('.photos__link');
    let titleBar = document.querySelector('.m-recipe__title-bar');

    let init = function() {

        if(recipe != null) {
            window.addEventListener('resize', checkWindowSize);
            window.addEventListener('scroll', checkScrollPosition);

            checkWindowSize();
        }
    }

    let checkWindowSize = function() {
        let screenWidth = window.innerWidth;

        if(screenWidth >= 992) {
            contentContainer.insertBefore(title, contentContainer.firstChild);
        }
        if(screenWidth < 992) {
            favoritesContainer.appendChild(title);
        }
        if(screenWidth <= 480) {
            macroContainer.appendChild(firstPhoto);
        }
        if(screenWidth > 480) {
            firstPhotoInitialContainer.appendChild(firstPhoto);
        }
    }

    let checkScrollPosition = function() {
        let scrollPos = window.scrollY;

        if(scrollPos > 200) {
            titleBar.classList.add('visible');
        } else {
            titleBar.classList.remove('visible');
        }
    }

    init();

}

"use strict";

// init navigation
navigationSetup('.m-navbar', '.m-navbar__toggle-menu', '.menu__list--dropdown', '.menu__item--dropdown');


// init recipe responsive actions
recipeSetup();

//# sourceMappingURL=bundle.js.map
