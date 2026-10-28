import { inject } from '@angular/core';
import { Light } from '../receivers/light';
import { Logger } from '../services/logger';
import { Command } from './command';

export class TurnOnLightCommand implements Command {
  readonly label = 'Turn on';
  private readonly logger = inject(Logger);

  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOn();
    this.logger.log('Light turned on');
  }
}
