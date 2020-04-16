import orderNews from '../helpers/orderNews';

describe('Function orderNews', () => {
  test('should concat two arrays in right order', () => {
    const input1 = [1, 2, 3];
    const input2 = [4, 3, 2, 5, 6];
    const output = [1, 2, 3, 4, 5, 6];
    expect(orderNews(input1, input2)).toEqual(output);
  });
  test('should concat two news arrays by field "name" in right order', () => {
    const input1 = [{ name: 'one' }, { name: 'two' }];
    const input2 = [{ name: 'three' }, { name: 'two' }, { name: 'four' }];
    const output = [
      { name: 'one' },
      { name: 'two' },
      { name: 'three' },
      { name: 'four' }
    ];
    expect(orderNews(input1, input2)).toEqual(output);
  });
});
