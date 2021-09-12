jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function (event) {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
      return event;
    });
  });