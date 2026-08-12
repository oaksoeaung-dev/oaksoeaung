import { ExpressionFactory } from '../models/expression-rule';

const readPath = (model: any, path: string): unknown => [path].reduce((value, key) => value?.[key], model);

export const concat: ExpressionFactory = (rule) => (field) =>
  (rule.arguments ?? [])
    .map((path) => readPath(field.model, path))
    .filter((value) => !!value)
    .join(rule.separator ?? ' ');
