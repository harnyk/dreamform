import { ContainerModule } from 'inversify';
import { ExampleForm } from './ExampleForm';

export const exampleFormModule = new ContainerModule((bind) => {
    bind('descriptor.example-form').toConstantValue(ExampleForm);
});
