import React, { FC } from 'react';
import { IFieldIdentifier, IFieldProps } from './types';
import { useControl } from './useControl';

export const DynamicControl: FC<
    IFieldProps<any> & IFieldIdentifier & Record<string, any>
> = ({ $type, ...props }) => {
    const Control = useControl<FC<IFieldProps<any>>>($type);
    return <Control {...props} />;
};
