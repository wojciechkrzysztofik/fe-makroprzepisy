"use script";

const recipeSetup = function() {
    // elements
    let favoritesContainer = document.querySelector('.add-to-favorites__wrapper');
    let contentContainer = document.querySelector('.m-recipe__content');
    let macroContainer = document.querySelector('.m-recipe__macro-wrapper');
    let title = document.querySelector('.m-recipe__title');
    let firstPhotoInitialContainer = document.querySelector('.photos__item');
    let firstPhoto = document.querySelector('.photos__link');
    let titleBar = document.querySelector('.m-recipe__title-bar');

    let init = function() {

        window.addEventListener('resize', checkWindowSize);
        window.addEventListener('scroll', checkScrollPosition);

        checkWindowSize();
    }

    let checkWindowSize = function() {
        let screenWidth = window.innerWidth;

        console.log(screenWidth);
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
        let = scrollPos = window.scrollY;

        if(scrollPos > 200) {
            titleBar.classList.add('visible');
        } else {
            titleBar.classList.remove('visible');
        }
    }

    init();

}
