function initPresentation(){
  remark.macros.scale = function (percentage) {
      var url = this;
      return '<img src="' + url + '" style="width: ' + percentage + '" />';
  };


  remark.create({
      sourceUrl: 'slides.md',
      countIncrementalSlides: false,
      ratio: '16:9',
      navigation: {
          scroll: false,
          touch: true,
          click: false
      }
  });
}

window.onload = initPresentation();
