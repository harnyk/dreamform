import { DescriptorResolver } from '../types';

export const ExampleForm: DescriptorResolver = () => [
    {
        $type: 'epc',
        label: 'EPC',
        name: 'epc',
    },
    {
        $type: 'choice',
        label: 'Choice',
        name: 'choice',
        items: [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
        ],
    },
    {
        $type: 'localized-text',
        label: 'Description',
        name: 'description',
    },
];
