import { SFCBlockRaw } from './sfc-parser';
export declare class SFCBlock {
    type: string;
    content: string;
    attrs: Record<string, string | true>;
    start: number;
    end: number;
    lang?: string;
    src?: string;
    scoped?: true;
    module?: string | true;
    constructor(block: SFCBlockRaw);
    equals(block: SFCBlock): boolean;
    calcGlobalOffset(offset: number): number;
    calcGlobalRange(range: [number, number]): [number, number];
}
export interface SFCDescriptor {
    template: SFCBlock | null;
    script: SFCBlock | null;
    styles: SFCBlock[];
    customBlocks: SFCBlock[];
}
export declare function parseComponent(code: string): SFCDescriptor;
