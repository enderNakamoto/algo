"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('add function', function () {
    it('should add two numbers correctly', function () {
        (0, chai_1.expect)((0, index_1.add)(2, 3)).to.equal(5);
    });
});
