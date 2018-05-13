import matchers from './matchers';

if (global.expect) {
  global.expect.extend(matchers);
} else {
  console.error("Unbable to find Jest's global expect");
}
