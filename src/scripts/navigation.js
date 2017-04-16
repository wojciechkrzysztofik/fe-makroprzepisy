"use strict";

const navigationSetup = function(navigationElement, toggleBtn, desktopDropdown, desktopDropdownBtn) {
    let $navigation = document.querySelector(navigationElement);
    let $toggleBtn = document.querySelector(toggleBtn);
    let $desktopDropdown = document.querySelector(desktopDropdown);
    let $desktopDropdownBtn = document.querySelector(desktopDropdownBtn);

    let init = function() {
        $toggleBtn.addEventListener('click', toggleMenu);
        $desktopDropdownBtn.addEventListener('click', toggleDesktopDropdown);
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

    let toggleDesktopDropdown = function(e) {
        e.preventDefault();

        $desktopDropdownBtn.classList.toggle('open');
        $desktopDropdown.classList.toggle('open');
    }

    init();
}
