import { concat } from '../utils/expressions';
import { ExpressionFactory } from './expression-rule';

export const ExpressionMap: Record<string, ExpressionFactory> = {
  concat: concat,
};