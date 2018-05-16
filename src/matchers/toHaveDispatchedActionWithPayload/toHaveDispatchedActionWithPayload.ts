import {
  equals,
} from 'ramda';
import { Action } from 'redux';
import { store } from 'redux-mock-store';

export function toHaveDispatchedActionWithPayload(store: store, expected: Action) {
  const actual: Action | undefined = (store.getActions() || [])
  .find(equals(expected));

  const pass = !!actual;

  const message = !pass ?
    () =>
      this.utils.matcherHint('.not.toBe') +
        '\n\n' +
        `Expected action with payload was not dispatched\n` +
        `  ${this.utils.printExpected(expected)}\n` +
        `dispatched actions are\n` +
        `  ${this.utils.printReceived(actual)}` :
    () =>
      this.utils.matcherHint('.toBe') +
        '\n\n' +
        `Action with payload should not be dispatched\n` +
        `  ${this.utils.printReceived(expected)}\n` +
        `dispatched actions are\n` +
        `  ${this.utils.printReceived(actual)}`;

  return {
    actual,
    message,
    pass
  };
}
