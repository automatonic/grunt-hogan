define(['hogan'], function (Hogan) {
  var name='two';
  var templates = {};
  /* jshint ignore:start */
  templates["simple"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("From: http://mustache.github.com/mustache.5.html");t.b("\n" + i);t.b("Hello ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("You have just won $");t.b(t.v(t.f("value",c,p,0)));t.b("!");t.b("\n" + i);if(t.s(t.f("in_ca",c,p,1),c,p,0,104,142,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("Well, $");t.b(t.v(t.f("taxed_value",c,p,0)));t.b(", after taxes.");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
  /* jshint ignore:end */
  return templates;
});