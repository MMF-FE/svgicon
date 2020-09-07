"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// build icon data, utils
var path = __importStar(require("path"));
exports.default = {
    // Simple template compiler
    compile: function (content, data) {
        return content.replace(/\${(\w+)}/gi, function (match, name) {
            return data[name] ? data[name] : '';
        });
    },
    // get svg viewBox
    getViewBox: function (svgoResult) {
        var viewBoxMatch = svgoResult.data.match(/viewBox="([-\d.]\s[-\d.]+\s[-\d.]+\s[-\d.]+)"/);
        var viewBox = '0 0 200 200';
        if (viewBoxMatch && viewBoxMatch.length > 1) {
            viewBox = viewBoxMatch[1];
        }
        else if (svgoResult.info.height && svgoResult.info.width) {
            viewBox = "0 0 " + svgoResult.info.width + " " + svgoResult.info.height;
        }
        return viewBox;
    },
    // add pid attr, for css
    addPid: function (content) {
        var shapeReg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi;
        var id = 0;
        content = content.replace(shapeReg, function (match) {
            return match + ("pid=\"" + id++ + "\" ");
        });
        return content;
    },
    // rename fill and stroke. (It can restroe in vue-svgicon)
    renameStyle: function (content) {
        var styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi;
        var styleReg = /fill="|stroke="/gi;
        content = content.replace(styleShaeReg, function (shape) {
            return shape.replace(styleReg, function (styleName) {
                return '_' + styleName;
            });
        });
        return content;
    },
    // replace element id, make sure ID is unique. fix #16
    changeId: function (content, filePath, name, idSep) {
        if (idSep === void 0) { idSep = '_'; }
        var idReg = /svgiconid(\w+)/g;
        content = content.replace(idReg, function (match, elId) {
            return "svgiconid" + idSep + filePath.replace(/[\\/]/g, idSep) + name + idSep + elId;
        });
        return content;
    },
    // get file path by filename
    getFilePath: function (svgRootPath, filename) {
        // let filePath = filename
        //     .replace(path.resolve(sourcePath), '')
        //     .replace(path.basename(filename), '')
        var filePath = '';
        var rootPaths = Array.isArray(svgRootPath)
            ? svgRootPath
            : [svgRootPath];
        rootPaths.forEach(function (rp) {
            filename = filename.replace(rp, '');
        });
        filePath = filename.replace(path.basename(filename), '');
        if (/^[/\\]/.test(filePath)) {
            filePath = filePath.substr(1);
        }
        return filePath.replace(/\\/g, '/');
    },
};
