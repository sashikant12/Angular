"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo2 = void 0;
var insd_1 = require("./insd");
var Demo2 = /** @class */ (function (_super) {
    __extends(Demo2, _super);
    function Demo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo2.prototype.add = function () {
        console.log("Lets go");
    };
    return Demo2;
}(insd_1.Demo1));
exports.Demo2 = Demo2;
