import { ITextProps } from '../controls/controls.interfaces';
import { DescriptorResolver, DynamicFieldDescriptor } from '../types';

const languages = ['en', 'fr', 'nl'];

type TextDescriptor = DynamicFieldDescriptor<ITextProps<string>>;

export const LocalizedTextField: DescriptorResolver<
    TextDescriptor,
    TextDescriptor[]
> = ({ $type, ...props }) =>
    languages.map((lang) => ({
        ...props,
        $type: 'text',
        label: `${props.label} (${lang})`,
        name: `${props.name}.${lang}`,
    }));
