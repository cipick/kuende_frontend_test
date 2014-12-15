define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "  <p>do not show block</p>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "  <p>show block</p>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.undefinedVariable : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}); });