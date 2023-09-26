import React from 'react';
declare type HandleStepFn = (step: number) => void;
export interface SpinnerProps {
    onChange: HandleStepFn;
    onClick?(event: React.MouseEvent): void;
    onMouseDown(onChange: HandleStepFn): void;
    onMouseUp(): void;
}
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Spinner.d.ts.map