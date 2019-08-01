/*!
 * Vue SFC Parser
 * Copyright (c) Evan You
 * MIT License
 * Original code is from https://github.com/vuejs/vue
 */
export interface SFCDescriptorRaw {
    template: SFCBlockRaw | null;
    script: SFCBlockRaw | null;
    styles: SFCBlockRaw[];
    customBlocks: SFCBlockRaw[];
}
export interface SFCBlockRaw {
    type: string;
    content: string;
    attrs: Record<string, string | true>;
    start: number;
    end: number;
    lang?: string;
    src?: string;
    scoped?: true;
    module?: string | true;
}
/**
 * Parse a single-file component (*.vue) file into an SFC Descriptor Object.
 */
export declare function parseComponent(content: string, options?: Record<string, any>): SFCDescriptorRaw;
