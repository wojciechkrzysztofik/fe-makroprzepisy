"use strict";

const recipesSetup = function(recipesList, recipeItem) {

    let init = function() {
        // init Masonry
        var $grid = $(recipesList).masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: recipeItem,
            // use element for option
            columnWidth: recipeItem,
            percentPosition: true
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry('layout');
        });
    }

    init();
}
