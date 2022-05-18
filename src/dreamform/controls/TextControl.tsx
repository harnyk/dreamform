import React from 'react';
import { ITextControl } from './controls.interfaces';

export const TextControl: ITextControl<string> = ({
    label,
    value,
    onChange,
    name,
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                name={name}
                id={name}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </>
    );
};
