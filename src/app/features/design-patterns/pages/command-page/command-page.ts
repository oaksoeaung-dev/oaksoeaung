import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { TurnOffLightCommand } from '../../commands/turn-off-light-command';
import { TurnOnLightCommand } from '../../commands/turn-on-light-command';
import { RemoteControl } from '../../invokers/remote-control';
import { Light } from '../../receivers/light';

@Component({
  imports: [Button],
  selector: 'app-command-page',
  templateUrl: './command-page.html',
})
export class CommandPage {
  protected readonly light = new Light();
  protected readonly remote = new RemoteControl();

  protected turnOn(): void {
    this.remote.press(new TurnOnLightCommand(this.light));
  }

  protected turnOff(): void {
    this.remote.press(new TurnOffLightCommand(this.light));
  }
}
