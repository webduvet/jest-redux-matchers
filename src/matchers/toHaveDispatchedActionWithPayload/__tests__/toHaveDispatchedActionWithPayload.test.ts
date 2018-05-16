import { Action } from 'redux';
import * as configureStore from 'redux-mock-store';
import { toHaveDispatchedActionWithPayload } from '../toHaveDispatchedActionWithPayload';

/* tslint:disable:no-namespace interface-name */
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveDispatchedActionWithPayload: (action: Action) => {
        actual: any;
        message: string;
        pass: boolean;
      };
    }
  }
}

expect.extend({
  toHaveDispatchedActionWithPayload
});

describe('ToHaveDispatchedActionWithPayload', () => {
  const store = configureStore()({});

  const testAction = {
    payload: { test: '' },
    type: 'ACTION'
  } as Action;

  const anotherTestAction = {
    payload: {
      test: 'different'
    },
    type: 'ACTION'
  } as Action;

  beforeEach(() => {
    store.dispatch(testAction);
  });

  it('pass when action is dispatched', () => {
    expect(store)
      .toHaveDispatchedActionWithPayload({ ...testAction });
  });

  it('pass when the action is not dispatched', () => {
    expect(store)
      .not.toHaveDispatchedActionWithPayload(anotherTestAction);
  });
});
