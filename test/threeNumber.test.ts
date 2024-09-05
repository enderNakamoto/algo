import * as program from '../src/threeNumber';
import * as chai from 'chai';

it('Test Case #1', function () {
  chai
    .expect(program.findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
    .to.deep.equal([18, 141, 541]);
});