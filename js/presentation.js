function initPresentation(){
  remark.macros.scale = function (percentage) {
      var url = this;
      return '<img src="' + url + '" style="width: ' + percentage + '" />';
  };


  var slideshow = remark.create({
      sourceUrl: 'slides.md',
      countIncrementalSlides: false,
      ratio: '16:9',
      navigation: {
          scroll: false,
          touch: false,
          click: false
      }
  });
}

window.onload = initPresentation();
