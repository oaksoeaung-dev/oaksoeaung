import { inject } from '@angular/core';
import { Light } from '../receivers/light';
import { Logger } from '../services/logger';
import { Command } from './command';

export class TurnOffLightCommand implements Command {
  readonly label = 'Turn off';
  private readonly logger = inject(Logger);

  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOff();
    this.logger.log('Light turned off');
  }
}
