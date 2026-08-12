import { ConfigOption } from '@ngx-formly/core';
import { FInput } from '../../features/tests/formly/components/f-input/f-input';
import { AbstractControl } from '@angular/forms';

export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}

export const aliases: ConfigOption[] = [
  {
    types: [
      {
        name: 'f-input',
        component: FInput,
      },
    ],
    validators: [{ name: 'fieldMatch', validation: fieldMatchValidator }],
  },
];
