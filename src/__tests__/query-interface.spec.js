import { expect } from 'chai';
import { methods, spyInstance } from '../query-interface';

describe('query-interface', () => {
  describe('methods', () => {
    it('is an array', () => {
      expect(methods).to.be.an('Array');
    });

    it('includes createSchema', () => {
      expect(methods).to.include('createSchema');
    });
  });

  describe('spyInstance', () => {
    it('is an object', () => {
      expect(spyInstance).to.be.an('Object');
    });

    it('createSchema is a sinon proxy', () => {
      expect(spyInstance.createSchema.isSinonProxy).to.be.true();
    });
  });
});

