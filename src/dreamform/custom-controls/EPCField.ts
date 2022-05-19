import { IChoiceProps } from '../controls/controls.interfaces';
import {
    DescriptorResolver,
    DynamicFieldDescriptor,
    IFieldProps,
} from '../types';

enum EPCValue {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
}

type EpcDescriptor = DynamicFieldDescriptor<IFieldProps<EPCValue>>;
type ChoiceDescriptor = DynamicFieldDescriptor<IChoiceProps<EPCValue>>;

export const EPCField: DescriptorResolver<
    EpcDescriptor,
    [ChoiceDescriptor]
> = ({ $type, ...props }) => [
    {
        $type: 'choice',
        items: [
            { label: 'A', value: EPCValue.A },
            { label: 'B', value: EPCValue.B },
            { label: 'C', value: EPCValue.C },
            { label: 'D', value: EPCValue.D },
            { label: 'E', value: EPCValue.E },
            { label: 'F', value: EPCValue.F },
            { label: 'G', value: EPCValue.G },
        ],
        ...props,
    },
];
