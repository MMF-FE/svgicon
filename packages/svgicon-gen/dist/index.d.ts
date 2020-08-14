import { Icon } from '../typings';
import SVGO from 'svgo';
/**
 * generate svgicon object
 * @param source svg icon content
 * @param filename svg icon file absolute path
 * @param svgRootPath svg icon root path, to calc relative path
 * @param svgoConfig svgo config
 * @param idSeparator id attr separator
 */
export default function gen(source: string, filename: string, svgRootPath?: string, svgoConfig?: SVGO.Options, idSeparator?: string): Promise<Icon>;
