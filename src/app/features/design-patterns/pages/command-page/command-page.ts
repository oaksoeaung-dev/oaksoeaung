import { Component, inject } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { LightCommandFactory } from '../../commands/light-command-factory';
import { RemoteControl } from '../../invokers/remote-control';
import { Light } from '../../receivers/light';

@Component({
  imports: [ButtonDirective],
  selector: 'app-command-page',
  templateUrl: './command-page.html',
})
export class CommandPage {
  private readonly commands = inject(LightCommandFactory);
  protected readonly light = new Light();
  protected readonly remote = new RemoteControl();

  protected turnOn(): void {
    this.remote.press(this.commands.turnOn(this.light));
  }

  protected turnOff(): void {
    this.remote.press(this.commands.turnOff(this.light));
  }
}
