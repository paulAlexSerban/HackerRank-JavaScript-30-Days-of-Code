class Solution {
    constructor() {
      this.stack = [],
      this.queue = [];
    }

  pushCharacter = ((a) => {
    return stack.push(a)
  });
  enqueueCharacter = ((b) => {
    return queue.unshift(b)
  });
  popCharacter = (() => {
    return stack.pop()
  });
  dequeueCharacter = (() => {
    return queue.pop()
  });
}