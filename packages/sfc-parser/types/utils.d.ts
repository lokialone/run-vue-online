export declare const no: () => boolean;
export declare const identity: <T>(x: T) => T;
export declare function makeMap(str: string, expectsLowerCase?: boolean): (key: string) => true | void;
export declare function equalsRecord(a: Record<string, any>, b: Record<string, any>): boolean;
