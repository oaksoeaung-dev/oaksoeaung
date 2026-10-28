import { Service } from '@angular/core';

@Service()
export class Logger {
  log(message: string): void {
    console.log(message);
  }
}
