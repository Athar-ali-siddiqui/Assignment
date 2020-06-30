var names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];
for (const name of names) {
  var firstletter = name.charAt(0);
  if (firstletter == "J") {
    goodbyespeak.goodbye(name);
  } else {
    hellospeak.hello(name);
  }
}
