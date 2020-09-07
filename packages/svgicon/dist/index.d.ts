/** Global default options */
export interface Options {
    classPrefix?: string;
    isStroke?: boolean;
    isOriginalDefault?: boolean;
    /** 16px, defined in css */
    defaultWidth?: string;
    defaultHeight?: string;
}
export interface IconData {
    width?: number | string;
    height?: number | string;
    viewBox: string;
    data: string;
    [key: string]: unknown;
}
export interface Icon {
    name: string;
    data: IconData;
}
export interface Props {
    /** icon data */
    data?: Icon;
    width?: string | number;
    height?: string | number;
    scale?: string | number;
    /** icon direction */
    dir?: string;
    color?: string;
    title?: string;
    fill?: boolean;
    /** is use original color */
    original?: boolean;
}
/** SvgIcon function result type */
export interface SvgIconResult {
    /** SVG content */
    path: string;
    /** viewBox */
    box: string;
    className: string;
    style: Record<string, string | number>;
}
/** set default options */
export declare function setOptions(newOptions: Options): void;
export declare function getPropKeys(): (keyof Props)[];
/** get svgicon result by props */
export declare function svgIcon(props: Props): SvgIconResult;
