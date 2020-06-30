(function (window) {
  var hellospeak = {};
  var speakword = "Hello ";
  hellospeak.hello = function (name) {
    console.log(speakword + name);
  };
  window.hellospeak = hellospeak;
})(window);
