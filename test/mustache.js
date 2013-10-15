
require(__dirname).test({
  xml :
  "<root>   "+
    "{{testing}}"+
    "<haha /> "+
    "<haha/>  "+
    "<monkey> "+
      "=(|)     "+
    "</monkey>"+
  "</root>  ",
  expect : [
    ["opentag", {name:"ROOT", attributes:{}, isSelfClosing: false}],
    ["mustache", {name:"testing"}],
    ["opentag", {name:"HAHA", attributes:{}, isSelfClosing: true}],
    ["closetag", "HAHA"],
    ["opentag", {name:"HAHA", attributes:{}, isSelfClosing: true}],
    ["closetag", "HAHA"],
    // ["opentag", {name:"HAHA", attributes:{}}],
    // ["closetag", "HAHA"],
    ["opentag", {name:"MONKEY", attributes:{}, isSelfClosing: false}],
    ["text", "=(|)"],
    ["closetag", "MONKEY"],
    ["closetag", "ROOT"]
  ],
  opt : { trim : true }
});
