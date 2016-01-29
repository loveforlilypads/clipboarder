var cp = require("copy-paste");

var str_to_copy = 'yank inside word: yiw!';

cp.copy(str_to_copy, function () {
  console.log("success! verify with ctrl+v that your clipboard string is: '" + str_to_copy + "'");
});
