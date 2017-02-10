function invoked(){
  console.log("in module, invoked but not exported?");
}

module.exports = {
  myStr : "works!",
  myFunc : function(){
    invoked();
  }
}
