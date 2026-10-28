import { Light } from '../receivers/light';
import { Command } from './command';

export class TurnOffLightCommand implements Command {
  readonly label = 'Turn off';

  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}
