"use strict";

const navigationSetup = function(navigationElement, toggleBtn) {
    let $navigation = document.querySelector(navigationElement);
    let $toggleBtn = document.querySelector(toggleBtn);

    let init = function() {
        $navigation.addEventListener('click', toggleMenu);
    }

    let toggleMenu = function() {
        if($navigation.classList.contains('open')) {
            $navigation.classList.remove('open');
            $toggleBtn.classList.add('collapsed');
        } else {
            $navigation.classList.add('open');
            $toggleBtn.classList.remove('collapsed');
        }
    }

    init();
}
