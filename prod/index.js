"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MAXIMUM_COLOR_RANGE = parseInt('0xFFFFFF');
function randomHexColor() {
    return "#" + ('000000' + Math.floor(Math.random() * MAXIMUM_COLOR_RANGE)).slice(-6);
}
exports.default = randomHexColor;
