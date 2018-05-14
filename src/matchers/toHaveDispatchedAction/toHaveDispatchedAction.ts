export function toHaveDispatchedAction(store, expected) {
  const actual = store.getActions() || [];
  const pass = actual.includes(expected);

  const message = pass ?
    () =>
      this.utils.matcherHint('.not.toBe') +
        '\n\n' +
        `Expected action not be triggered\n` +
        `  ${this.utils.printExpected(expected)}` :
    () =>
      this.utils.matcherHint('.toBe') +
        '\n\n' +
        `Expected acion be triggered\n` +
        `  ${this.utils.printExpected(expected)}\n` +
        `but was not triggered\n`;

  return {
    actual,
    message,
    pass
  };
}
