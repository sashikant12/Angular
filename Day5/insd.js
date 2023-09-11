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
exports.Demo1 = void 0;
var ins_1 = require("./ins");
var Demo1 = /** @class */ (function (_super) {
    __extends(Demo1, _super);
    function Demo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo1.prototype.add = function () {
        console.log("BYE BYE");
    };
    return Demo1;
}(ins_1.Demo));
exports.Demo1 = Demo1;
