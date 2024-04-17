import { sum } from '../sum';

describe('sum()', () => { // 通常第一引数は名詞
  it('should add 1 and 2 returning 3', () => { // // 通常第二引数は動詞
    expect(sum(1, 2)).toBe(3);
  });
});