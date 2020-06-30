(function (window) {
  var goodbyespeak = {};
  var speakword = "Good Bye ";

  goodbyespeak.goodbye = function (name) {
    console.log(speakword + name);
  };
  window.goodbyespeak = goodbyespeak;
})(window);
