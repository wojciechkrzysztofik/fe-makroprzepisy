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
