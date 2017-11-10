"use strict";

// init navigation
navigationSetup('.m-navbar', '.m-navbar__toggle-menu', '.menu__list--dropdown', '.menu__item--dropdown');

// init recipes on home page (masonry grid)
recipesSetup('.m-recipes__list', '.m-recipes__item');

// init recipe responsive actions
recipeSetup();
