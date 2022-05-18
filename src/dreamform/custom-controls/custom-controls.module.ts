import { ContainerModule } from 'inversify';
import { EPCField } from './EPCField';
import { LocalizedTextField } from './LocalizedTextField';

export const customControlsModule = new ContainerModule((bind) => {
    bind('descriptor.epc').toConstantValue(EPCField);
    bind('descriptor.localized-text').toConstantValue(LocalizedTextField);
});
