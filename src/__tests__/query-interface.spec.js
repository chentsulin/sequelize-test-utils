import { expect } from 'chai';
import { methods, spyInstance, createSpyInstance } from '../query-interface';

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

  describe('createSpyInstance', () => {
    it('create a spyInstance', () => {
      const instance = createSpyInstance();
      expect(instance).to.be.an('Object');
      expect(instance.createSchema.isSinonProxy).to.be.true();
    });
  });
});

