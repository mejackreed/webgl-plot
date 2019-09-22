"use strict";
/**
 * Author Danial Chitnis 2019
 */
exports.__esModule = true;
var ndarray = require("ndarray");
var webGLplot_1 = require("./webGLplot");
var webGLplot_2 = require("./webGLplot");
var noUiSlider = require("nouislider");
var canv = document.getElementById("my_canvas");
//let num = 1000;
var devicePixelRatio = window.devicePixelRatio || 1;
var num = Math.round(canv.clientWidth * devicePixelRatio);
var vert = ndarray(new Float32Array(num * 2), [num, 2]);
var line_color = new webGLplot_2.color_rgba(1, 1, 0, 1);
var wglp = new webGLplot_1.webGLplot(canv, vert, line_color);
console.log(num);
//amplitude
var Samp = 1;
var Namp = 1;
var freq = 1;
var phi_delta = 1;
for (var i = 0; i < num; i++) {
    //set x to -num/2:1:+num/2
    vert.set(i, 0, 2 * i / num - 1);
}
var phi = 0;
//sliders
var slider_Samp = document.getElementById('slider_Samp');
noUiSlider.create(slider_Samp, {
    start: [0.5],
    connect: [true, false],
    //tooltips: [false, wNumb({decimals: 1}), true],
    range: {
        min: 0.0,
        max: 1
    }
});
slider_Samp.noUiSlider.on("update", function (values, handle) {
    Samp = parseFloat(values[handle]);
    document.getElementById("display_Samp").innerHTML = Samp.toString();
});
setInterval(function () {
    for (var i = 0; i < num; i++) {
        var y = Math.sin(i * freq * Math.PI / 100 + phi) + Math.random() * Namp / 1;
        vert.set(i, 1, 0.9 * Samp * y);
    }
    phi = phi + phi_delta * 0.1;
    wglp.update();
}, 16.67 * 3);