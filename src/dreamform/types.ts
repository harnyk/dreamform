export interface IFieldProps<T> {
    label?: string;
    name?: string;
    value?: T;
    onChange?: (value?: T) => void;
}

export interface IFieldIdentifier {
    $type: string;
}

export type DynamicFieldDescriptor<
    T extends IFieldProps<any> = IFieldProps<any>
> = T & IFieldIdentifier & Record<string, any>;

export type DescriptorResolver<
    InputType extends DynamicFieldDescriptor<
        IFieldProps<any>
    > = DynamicFieldDescriptor<IFieldProps<any>>,
    OutputType extends DynamicFieldDescriptor<
        IFieldProps<any>
    >[] = DynamicFieldDescriptor<IFieldProps<any>>[]
> = (d: InputType) => OutputType;
