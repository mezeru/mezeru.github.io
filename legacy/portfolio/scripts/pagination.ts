import $ from "jquery"

function pagination() {
  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var $body = $('#main');
  var padding = .75;
  var pages = Object.keys($('.child')).filter((section) => Number(section) + 1).map(section => Number(section) + 1)

  pages.map((page) => {
    if (offset > (windowHeight * (page - 2 + padding))) {
       $body.removeClass().addClass("page-" + page);
    }
  });
};

export default pagination;