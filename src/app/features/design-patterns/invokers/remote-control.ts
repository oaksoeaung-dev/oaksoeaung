import { computed, signal } from '@angular/core';
import { Command } from '../commands/command';

export class RemoteControl {
  private readonly history = signal<Command[]>([]);

  readonly labels = computed(() => this.history().map((command) => command.label));

  press(command: Command): void {
    command.execute();
    this.history.update((history) => [...history, command]);
  }
}
