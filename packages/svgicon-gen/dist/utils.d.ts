import { OptimizedSvg } from '../typings';
declare const _default: {
    compile(content: string, data: {
        [key: string]: string;
    }): string;
    getViewBox(svgoResult: OptimizedSvg): string;
    addPid(content: string): string;
    renameStyle(content: string): string;
    changeId(content: string, filePath: string, name: string, idSep?: string): string;
    getFilePath(svgRootPath: string | string[], filename: string): string;
};
export default _default;
