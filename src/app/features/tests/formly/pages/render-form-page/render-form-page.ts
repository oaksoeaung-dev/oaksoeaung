import { Component, computed, inject } from '@angular/core';
import { FormConfigApi } from '../../services/form-config-api';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ExpressionMap } from '../../models/expression-map';
import { ExpressionFn, ExpressionRule } from '../../models/expression-rule';
import { ButtonModule } from 'primeng/button';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-render-form-page',
  imports: [FormlyModule, ButtonModule],
  templateUrl: './render-form-page.html',
})
export class RenderFormPage {
  private readonly formConfigApi = inject(FormConfigApi);

  private readonly formConfigResource = this.formConfigApi.getFormConfigResource();

  form = new FormGroup({});

  fields = computed(() => {
    const configs = this.formConfigResource.value() ?? [];
    return configs.map((config: FormlyFieldConfig) => {
      if (config.props?.['rules']) {
        const rules = config.props?.['rules'] as ExpressionRule[];
        const expressions: Record<string, ExpressionFn> = {};
        rules.forEach((rule) => {
          const factory = ExpressionMap[rule.expression];
          if (!factory) {
            console.warn(`Unknown formly expression "${rule.expression}"`);
            return;
          }
          expressions[rule.target] = factory(rule);
        });
        return {
          ...config,
          expressions,
        };
      }
      return config;
    });
  });

  save() {
    console.log(this.form.value);
  }
}
