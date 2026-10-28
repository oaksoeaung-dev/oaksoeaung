import { inject, Injector, runInInjectionContext, Service } from '@angular/core';
import { Light } from '../receivers/light';
import { Command } from './command';
import { TurnOffLightCommand } from './turn-off-light-command';
import { TurnOnLightCommand } from './turn-on-light-command';

@Service()
export class LightCommandFactory {
  private readonly injector = inject(Injector);

  turnOn(light: Light): Command {
    return runInInjectionContext(this.injector, () => new TurnOnLightCommand(light));
  }

  turnOff(light: Light): Command {
    return runInInjectionContext(this.injector, () => new TurnOffLightCommand(light));
  }
}
