"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = require("path");
var fs = require("fs-plus");
var colors = require("colors");
var glob = require("glob");
var Svgo = require("svgo");
/**
 * build svg icon
 */
function build(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    // delete previous icons
                    fs.removeSync(options.targetPath);
                    // the template file which to generate icon files
                    var tplPath = options.tpl
                        ? path.join(process.cwd(), options.tpl)
                        : path.join(__dirname, "../../default/icon.tpl" + (options.es6 ? '.es6' : '') + ".txt");
                    var tpl = fs.readFileSync(tplPath, 'utf8');
                    var svgo = new Svgo({
                        plugins: [
                            {
                                removeAttrs: {}
                            },
                            {
                                removeTitle: true
                            },
                            {
                                removeStyleElement: true
                            },
                            {
                                removeComments: true
                            },
                            {
                                removeDesc: true
                            },
                            {
                                removeUselessDefs: true
                            },
                            {
                                cleanupIDs: {
                                    remove: true,
                                    prefix: 'svgicon-'
                                }
                            },
                            {
                                convertShapeToPath: true
                            }
                        ]
                    });
                    glob(path.join(options.sourcePath, '**/*.svg'), function (err, files) {
                        var _this = this;
                        if (err) {
                            reject(err);
                            return;
                        }
                        files = files.map(function (f) { return path.normalize(f); });
                        files.forEach(function (filename, ix) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var name, svgContent, filePath, result, data, viewBoxMatch, viewBox, shapeReg, id, styleShaeReg, styleReg, idReg, content;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = path.basename(filename).split('.')[0];
                                        svgContent = fs.readFileSync(filename, 'utf-8');
                                        filePath = getFilePath(options.sourcePath, filename);
                                        return [4 /*yield*/, svgo.optimize(svgContent)];
                                    case 1:
                                        result = (_a.sent());
                                        data = result.data
                                            .replace(/<svg[^>]+>/gi, '')
                                            .replace(/<\/svg>/gi, '');
                                        viewBoxMatch = result.data.match(/viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/);
                                        viewBox = '0 0 200 200';
                                        if (viewBoxMatch && viewBoxMatch.length > 1) {
                                            viewBox = viewBoxMatch[1];
                                        }
                                        else if (result.info.height && result.info.width) {
                                            viewBox = "0 0 " + result.info.width + " " + result.info.height;
                                        }
                                        shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi;
                                        id = 0;
                                        data = data.replace(shapeReg, function (match) {
                                            return match + ("pid=\"" + id++ + "\" ");
                                        });
                                        styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi;
                                        styleReg = /fill=\"|stroke="/gi;
                                        data = data.replace(styleShaeReg, function (shape) {
                                            return shape.replace(styleReg, function (styleName) {
                                                return '_' + styleName;
                                            });
                                        });
                                        idReg = /svgicon-(\w)/g;
                                        data = data.replace(idReg, function (match, elId) {
                                            return "svgicon-" + filePath.replace(/[\\\/]/g, '-') + name + "-" + elId;
                                        });
                                        // escape single quotes
                                        data = data.replace(/\'/g, "\\'");
                                        content = compile(tpl, {
                                            name: "" + filePath + name,
                                            width: parseFloat(result.info.width) || 16,
                                            height: parseFloat(result.info.height) || 16,
                                            viewBox: "'" + viewBox + "'",
                                            data: data
                                        });
                                        try {
                                            fs.writeFileSync(path.join(options.targetPath, filePath, name + ("." + options.ext)), content, 'utf-8');
                                            console.log(colors.yellow("Generated icon: " + filePath + name));
                                            if (ix === files.length - 1) {
                                                generateIndex(options, files);
                                                resolve();
                                            }
                                        }
                                        catch (err) {
                                            reject(err);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    });
                })];
        });
    });
}
exports.default = build;
// simple template compile
function compile(content, data) {
    return content.replace(/\${(\w+)}/gi, function (match, name) {
        return data[name] ? data[name] : '';
    });
}
// get file path by filename
function getFilePath(sourcePath, filename, subDir) {
    if (subDir === void 0) { subDir = ''; }
    var filePath = filename
        .replace(path.resolve(sourcePath), '')
        .replace(path.basename(filename), '');
    if (subDir) {
        filePath = filePath.replace(subDir + path.sep, '');
    }
    if (/^[\/\\]/.test(filePath)) {
        filePath = filePath.substr(1);
    }
    return filePath.replace(/\\/g, '/');
}
// generate index.js, which import all icons
function generateIndex(opts, files, subDir) {
    if (subDir === void 0) { subDir = ''; }
    var isES6 = opts.es6;
    var content = opts.ext === 'js' ? '/* eslint-disable */\n' : '';
    var dirMap = {};
    files.forEach(function (file) {
        var name = path.basename(file).split('.')[0];
        var filePath = getFilePath(opts.sourcePath, file, subDir);
        var dir = filePath.split('/')[0];
        if (dir) {
            if (!dirMap[dir]) {
                dirMap[dir] = [];
                content += isES6
                    ? "import './" + dir + "'\n"
                    : "require('./" + dir + "')\n";
            }
            dirMap[dir].push(file);
        }
        else {
            content += isES6
                ? "import './" + filePath + name + "'\n"
                : "require('./" + filePath + name + "')\n";
        }
    });
    fs.writeFileSync(path.join(opts.targetPath, subDir, "index." + opts.ext), content, 'utf-8');
    console.log(colors.green("Generated " + (subDir ? subDir + path.sep : '') + "index." + opts.ext));
    // generate subDir index.js
    for (var dir in dirMap) {
        generateIndex(opts, dirMap[dir], path.join(subDir, dir));
    }
}
//# sourceMappingURL=build.js.map