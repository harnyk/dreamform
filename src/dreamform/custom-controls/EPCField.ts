import { DescriptorResolver } from '../types';

export const EPCField: DescriptorResolver = ({ $type, ...props }) => [
    {
        $type: 'choice',
        items: [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
        ],
        ...props,
    },
];
