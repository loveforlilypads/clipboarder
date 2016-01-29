var cp = require('copy-paste');

cp.paste(function(err, content) {
    if(err)
        console.log("error while trying to access clipboard: " + err);
    console.log("success! clipboard content is: " + content);
    console.log("ctrl+c some string and run this again!");
});
