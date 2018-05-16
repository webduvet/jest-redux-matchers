import * as configureStore from 'redux-mock-store';
import { toHaveDispatchedAction } from '../toHaveDispatchedAction';

/* tslint:disable:no-namespace interface-name */
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveDispatchedAction: (action: string) => {
        actual: any;
        message: string;
        pass: boolean;
      };
    }
  }
}

expect.extend({
  toHaveDispatchedAction
});

describe('ToHaveDispatchedAction', () => {
  const store = configureStore()({});

  beforeEach(() => {
    store.dispatch({
      type: 'ACTION'
    });
  });

  it('pass when action is dispatched', () => {
    expect(store)
      .toHaveDispatchedAction('ACTION');
  });

  it('pass when the action is not dispatched', () => {
    expect(store)
      .not.toHaveDispatchedAction('OTHER_ACTION');
  });
});
