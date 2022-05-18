import { DescriptorResolver } from '../types';

const languages = ['en', 'fr', 'nl'];

export const LocalizedTextField: DescriptorResolver = ({ $type, ...props }) =>
    languages.map((lang) => ({
        ...props,
        $type: 'text',
        label: `${props.label} (${lang})`,
        name: `${props.name}.${lang}`,
    }));
