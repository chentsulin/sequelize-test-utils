import { expect } from 'chai';
import { spy } from 'sinon';
import { methods, createSpyInstance } from '../query-interface';

describe('query-interface', () => {
  describe('methods', () => {
    it('is an array', () => {
      expect(methods).to.be.an('Array');
    });

    it('includes createSchema', () => {
      expect(methods).to.include('createSchema');
    });
  });

  describe('createSpyInstance', () => {
    it('create a spyInstance', () => {
      const instance = createSpyInstance(spy);
      expect(instance).to.be.an('Object');
      expect(instance.createSchema.isSinonProxy).to.be.true();
    });

    it('spyInstance with createSchema return a thenable', () => {
      const instance = createSpyInstance(spy);
      expect(instance.createSchema('users').then).to.be.a('function');
    });
  });
});

