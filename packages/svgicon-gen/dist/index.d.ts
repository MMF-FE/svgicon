import { Icon } from '@yzfe/svgicon';
import SVGO from 'svgo';
/**
 * generate svgicon object
 * @param source svg icon content
 * @param filename svg icon file absolute path
 * @param svgRootPath svg icon root path, to calc relative path
 * @param svgoConfig svgo config
 */
export default function gen(source: string, filename: string, svgRootPath?: string | string[], svgoConfig?: SVGO.Options): Promise<Icon>;
