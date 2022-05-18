import { interfaces } from 'inversify';
import { DescriptorResolver } from './types';

export const resolveDescriptor = (context: interfaces.Context) => {
    const doResolve: DescriptorResolver = function (descriptor) {
        const { $type } = descriptor;

        const srvId = `descriptor.${$type}`;
        const dynamicDescriptorExists = context.container.isBound(srvId);
        if (!dynamicDescriptorExists) {
            return [descriptor];
        }

        const factory = context.container.get<DescriptorResolver>(srvId);
        const newDescriptors = factory(descriptor);

        return newDescriptors.flatMap(doResolve);
    };

    return doResolve;
};
