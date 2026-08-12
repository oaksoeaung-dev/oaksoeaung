import { FormlyFieldConfig } from '@ngx-formly/core';

export interface ExpressionRule {
  target: string;
  expression: string;
  arguments?: string[];
  separator?: string;
}

export type ExpressionFn = (field: FormlyFieldConfig) => unknown;

export type ExpressionFactory = (rule: ExpressionRule) => ExpressionFn;