export interface Options {
    sourcePath: string;
    targetPath: string;
    ext: string;
    es6: boolean;
    tpl: string;
}
/**
 * build svg icon
 */
export default function build(options: Options): Promise<{}>;
