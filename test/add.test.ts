import { expect } from 'chai';
import { add } from '../src/index';

describe('add function', () => {
    it('should add two positive numbers correctly', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should handle negative numbers', () => {
        expect(add(-1, 1)).to.equal(0);
    });
});