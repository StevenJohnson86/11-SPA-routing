'use strict';

(function(module) {
  const articleController = {};
  // FIXME: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // TODO: We have multiple instances added to the page. Track down which invokation should be used.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.init = function () {
    Article.fetchAll(articleView.initIndexPage);
    $('main section').hide();
    $('#articles').show();
  }
  module.articleController = articleController;
})(window);
