import { Container } from 'inversify';
import { controlsModule } from './controls/controls.module';
import { customControlsModule } from './custom-controls/custom-controls.module';
import { resolveDescriptor } from './resolveDescriptor';

export const container = new Container();
container.bind('resolveDescriptor').toDynamicValue(resolveDescriptor);
container.load(controlsModule);
container.load(customControlsModule);
