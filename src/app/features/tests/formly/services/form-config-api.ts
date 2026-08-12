import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Service()
export class FormConfigApi {
  getFormConfigResource() {
    return httpResource<FormlyFieldConfig[]>(() => '/json/formly-config.json');
  }
}
