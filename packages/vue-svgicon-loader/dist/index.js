"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = require("path");
var loaderUtils = require("loader-utils");
var Svgo = require("svgo");
var svgo_1 = require("./default/svgo");
var utils_1 = require("./utils");
// @ts-ignore
var svgo = new Svgo(svgo_1.default);
var SvgiconLoader = function (source) {
    var _this = this;
    this.cacheable(true);
    var callback = this.async();
    var options = loaderUtils.getOptions(this) || {};
    var name = path.basename(this.resourcePath).split('.')[0];
    var sourcePath = options.svgFilePath || process.cwd();
    if (!path.isAbsolute(sourcePath)) {
        sourcePath = path.join(process.cwd(), options.svgFilePath);
    }
    new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, filePath, data, viewBox;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, svgo.optimize(source)];
                case 1:
                    result = (_a.sent());
                    filePath = utils_1.default.getFilePath(sourcePath, this.resourcePath);
                    data = result.data
                        .replace(/<svg[^>]+>/gi, '')
                        .replace(/<\/svg>/gi, '');
                    viewBox = utils_1.default.getViewBox(result);
                    // add pid attr, for css
                    data = utils_1.default.addPid(data);
                    // rename fill and stroke. (It can restroe in vue-svgicon)
                    data = utils_1.default.renameStyle(data);
                    // replace element id, make sure ID is unique. fix #16
                    data = utils_1.default.changeId(data, filePath, name, options.idSeparator);
                    // escape single quotes
                    data = data.replace(/\'/g, "\\'");
                    if (callback) {
                        callback(null, "\n                    module.exports = " + JSON.stringify({
                            name: "" + filePath + name,
                            data: {
                                width: result.info.width,
                                height: result.info.height,
                                viewBox: viewBox,
                                data: data
                            }
                        }) + "\n            ");
                    }
                    return [2 /*return*/];
            }
        });
    }); });
};
module.exports = SvgiconLoader;
//# sourceMappingURL=index.js.map