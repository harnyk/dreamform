import React from 'react';
import { IChoiceControl } from './controls.interfaces';

export const ChoiceControl: IChoiceControl<string> = ({
    label,
    value,
    onChange,
    items,
    allowEmpty,
    name,
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                {allowEmpty && <option value={undefined}></option>}
                {items?.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    );
};
