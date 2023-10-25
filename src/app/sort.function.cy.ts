import { sortFunction } from './sort.function';

const data = ['d', 'a', 'b', 'c'];
describe('SortFunction', () => {
    it('sorts ascending', () => {
    expect(sortFunction(data)[0]).to.equal('a');
    expect(sortFunction(data)[3]).to.equal('d');
  });
    it('sorts descending with flag', () => {
    expect(sortFunction(data, true)[0]).to.equal('d');
    expect(sortFunction(data, true)[3]).to.equal('a');
  });
});
