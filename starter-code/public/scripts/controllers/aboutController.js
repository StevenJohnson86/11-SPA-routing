'use strict';

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function(){
    $('main > section').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
