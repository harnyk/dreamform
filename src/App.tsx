import { useInjection } from 'inversify-react';
import React, { useMemo } from 'react';
import { DynamicControl } from './dreamform/DynamicControl';
import { DescriptorResolver } from './dreamform/types';

const fields = [{ $type: 'example-form' }];

export const App = () => {
    const resolveDescriptor =
        useInjection<DescriptorResolver>('resolveDescriptor');

    const resolvedFields = useMemo(
        () => fields.flatMap(resolveDescriptor),
        [resolveDescriptor]
    );

    return (
        <div>
            {resolvedFields.map((field, i) => (
                <div key={i}>
                    <DynamicControl key={i} {...field} />
                </div>
            ))}
            <div>
                <pre>{JSON.stringify(resolvedFields, null, 2)}</pre>
            </div>
        </div>
    );
};
