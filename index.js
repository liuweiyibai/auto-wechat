while (!click('通讯录'));
sleep(1000);

var v = id('f1c').findOne().bounds();
// var v = id('f1c').findOne().bounds();
click(v.centerX(), v.centerY());
// sleep(1000);
// var r = id("ipm").text("添加朋友").findOne().bounds();
// //log(r);
// click(r.centerX(), r.centerY());
// sleep(1000);
