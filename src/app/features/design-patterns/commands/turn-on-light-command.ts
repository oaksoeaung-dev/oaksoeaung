import { Light } from '../receivers/light';
import { Command } from './command';

export class TurnOnLightCommand implements Command {
  readonly label = 'Turn on';

  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}
