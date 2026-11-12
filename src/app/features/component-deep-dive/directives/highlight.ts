import { computed, Directive, input, output, signal } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '[class]': '[bg(), "cursor-pointer"]',
    '(click)': 'toggleActive()',
  },
  exportAs: 'highlight',
})
export class Highlight {
  readonly color = input('', { alias: 'highlight' });

  readonly isActive = signal(false);

  readonly bg = computed(() => (this.isActive() ? 'bg-pink-100' : this.color() || 'bg-sky-100'));

  readonly activated = output<void>();

  readonly deactivated = output<number>();

  #activationTime = -1;

  toggleActive() {
    this.isActive.update((v) => !v);

    if (this.isActive()) {
      this.activated.emit();
      this.#activationTime = Date.now();
    } else {
      const timeSince = Date.now() - this.#activationTime;
      this.#activationTime = -1;
      this.deactivated.emit(timeSince);
    }
  }
}
