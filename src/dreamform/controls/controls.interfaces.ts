import { FC } from 'react';
import { IFieldProps } from '../types';

export interface IChoiceProps<Value extends string>
    extends IFieldProps<Value | undefined> {
    allowEmpty?: boolean;
    items?: ReadonlyArray<{
        label: string;
        value: Value | undefined;
    }>;
}

export type IChoiceControl<Value extends string> = FC<IChoiceProps<Value>>;

//-----------------------------------------------------------------------------

export interface ITextProps<Value extends string>
    extends IFieldProps<Value | undefined> {}

export type ITextControl<Value extends string> = FC<ITextProps<Value>>;
