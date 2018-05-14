import matchers from './matchers';

declare const global: { expect: { extend: any } };

if (global.expect) {
  global.expect.extend(matchers);
} else {
  console.error('Unbable to find Jest\'s global expect');
}
