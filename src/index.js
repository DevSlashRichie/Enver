"use strict";
exports.__esModule = true;
exports.Enver = void 0;
var Enver = /** @class */ (function () {
    function Enver() {
    }
    /**
     * Get an env var and check if exists otherwise throw.
     * @param key The env-var name.
     * @param def The default value in case is not there.
     * @return T The env-var value.
     */
    Enver.get = function (key, def) {
        var _a;
        var value = (_a = process.env[key]) !== null && _a !== void 0 ? _a : def;
        if (typeof value === 'undefined' || value === null)
            throw new Error("Environment variable " + key + " is not defined");
        return value;
    };
    /**
     * Get an env var and check if it's there otherwise throw and then return it as a number.
     * If it's not a number, it will throw.
     *
     * @param key The env-var name.
     * @param def The default value in case is not there.
     * @return string The env-var value as a number.
     */
    Enver.getString = function (key, def) {
        return this.get(key, def);
    };
    /**
     * Get an env var and check if it's there otherwise throw and then return it as a number.
     * If it's not a number, it will throw.
     *
     * @param key The env-var name.
     * @param def The default value in case is not there.
     * @return number The value of the env-var as a number.
     */
    Enver.getNumber = function (key, def) {
        var value = this.get(key, def);
        // @ts-ignore
        if (isNaN(value))
            throw new Error("Environment variable " + key + " is not a number");
        return Number(value);
    };
    /**
     * Get an env var and check if it's there otherwise throw and then return it as boolean.
     * If it's not a boolean, it will throw.
     *
     * @param key The env-var name.
     * @param def The default value in case is not there.
     * @return boolean The value of the env-var as a boolean.
     */
    Enver.getBoolean = function (key, def) {
        var value = this.get(key, def);
        if (typeof value === 'string') {
            var as = value.toLowerCase();
            if (as === 'true' || as === '1' || as === 'yes')
                return true;
            else if (as === 'false' || as === '0' || as === 'no')
                return false;
        }
        if (typeof value === 'boolean')
            return value;
        throw new Error("Environment variable " + key + " is not a boolean");
    };
    return Enver;
}());
exports.Enver = Enver;
