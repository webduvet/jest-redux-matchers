import { store } from 'redux-mock-store';

export function toHaveDispatchedAction(store: store, expected: string[]) {
  const actual = (store.getActions() || []).map((action) => action.type);
  const pass = actual.includes(expected);

  const message = pass ?
    () =>
      this.utils.matcherHint('.not.toBe') +
        '\n\n' +
        `Expected action not be triggered\n` +
        `  ${this.utils.printReceived(expected)}` :
    () =>
      this.utils.matcherHint('.toBe') +
        '\n\n' +
        `Expected action be dispatched\n` +
        `  ${this.utils.printExpected(expected)}\n` +
        `but stored dispatched \n` +
        ` ${this.utils.printReceived(actual)}`;

  return {
    actual,
    message,
    pass
  };
}
