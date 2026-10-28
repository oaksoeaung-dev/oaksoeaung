import { signal } from '@angular/core';

export class Light {
  readonly isOn = signal(false);

  turnOn(): void {
    this.isOn.set(true);
  }

  turnOff(): void {
    this.isOn.set(false);
  }
}
