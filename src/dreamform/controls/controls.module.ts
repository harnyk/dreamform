import { ContainerModule } from 'inversify';
import { ChoiceControl } from './ChoiceControl';
import { TextControl } from './TextControl';

export const controlsModule = new ContainerModule((bind) => {
    bind('control.choice').toConstantValue(ChoiceControl);
    bind('control.text').toConstantValue(TextControl);
});
