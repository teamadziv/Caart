import React from 'react';
interface SourceSet {
    source: string;
    descriptor?: string;
}
declare type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;
export interface ImageProps extends React.HTMLProps<HTMLImageElement> {
    alt: string;
    source: string;
    crossOrigin?: CrossOrigin;
    sourceSet?: SourceSet[];
    onLoad?(): void;
    onError?(): void;
}
export declare function Image({ alt, sourceSet, source, crossOrigin, onLoad, className, ...rest }: ImageProps): JSX.Element;
export {};
//# sourceMappingURL=Image.d.ts.map