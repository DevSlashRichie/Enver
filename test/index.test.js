"use strict";
exports.__esModule = true;
var src_1 = require("../src");
var chai_1 = require("chai");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
describe('Testing Env', function () {
    before(function () {
        dotenv_1["default"].config({
            path: path_1["default"].join(__dirname, '.env')
        });
    });
    describe('#get', function () {
        it('should return a valid string', function () {
            (0, chai_1.expect)(src_1.Enver.get('STRING'))
                .to.equal('asd');
        });
        it('should not throw if the variable is defined but empty', function () {
            (0, chai_1.expect)(src_1.Enver.get('EMPTY'))
                .to.equal('');
        });
        it('should return the default value if the variable is not found', function () {
            (0, chai_1.expect)(src_1.Enver.get('VOID', 'default'))
                .to.equal('default');
        });
        it('should throw if the var is not defined', function () {
            (0, chai_1.expect)(function () { return src_1.Enver.get('VOID'); })
                .to["throw"]();
        });
    });
    describe('#getString', function () {
        it('should return the value of the environment variable', function () {
            (0, chai_1.expect)(src_1.Enver.getString('STRING'))
                .to.equal('asd');
        });
    });
    describe('#getNumber', function () {
        it('should return the int value of the environment variable', function () {
            (0, chai_1.expect)(src_1.Enver.getNumber('NUMBER'))
                .to.equal(123);
        });
        it('should return the decimal value of the environment variable', function () {
            (0, chai_1.expect)(src_1.Enver.getNumber('DECIMAL'))
                .to.equal(3.1416);
        });
        it('should throw if the value is not a number', function () {
            (0, chai_1.expect)(function () { return src_1.Enver.getNumber('STRING'); })
                .to["throw"]('Environment variable STRING is not a number');
        });
    });
    describe('#getBoolean', function () {
        it('should return true when var is true', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('BOOLEAN'))
                .to.equal(true);
        });
        it('should return true when var is yes', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('BOOLEAN_A'))
                .to.equal(true);
        });
        it('should return true when var is 1', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('BOOLEAN_B'))
                .to.equal(true);
        });
        it('should return false when var is false', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('BOOLEAN_FALSE'))
                .to.equal(false);
        });
        it('should return false when var is no', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('BOOLEAN_FALSE_A'))
                .to.equal(false);
        });
        it('should return false when var is 0', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('BOOLEAN_FALSE_B'))
                .to.equal(false);
        });
        it('should throw if the value is not a boolean', function () {
            (0, chai_1.expect)(function () { return src_1.Enver.getBoolean('STRING'); })
                .to["throw"]('Environment variable STRING is not a boolean');
        });
        it('should return the default value if not found', function () {
            (0, chai_1.expect)(src_1.Enver.getBoolean('VOID', true))
                .to.equal(true);
        });
    });
});
