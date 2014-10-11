var TagModel = require('models/tag')


require("mongooseDb");


var t = new TagModel({
    tagName: "TEST12",
    userId: "5407a04ffb2feaac11c2126f"
});

t.save();