import { expect } from 'chai';
import { multiply } from '../src/multiply';

describe('multiply function', () => {
    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('should handle zero', () => {
        expect(multiply(5, 0)).to.equal(0);
    });
});