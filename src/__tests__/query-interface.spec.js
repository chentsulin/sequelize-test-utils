import { expect } from 'chai';
import { spy } from 'sinon';
import ModuleMocker from 'jest-mock';
import { methods, createMockInstance } from '../query-interface';

describe('query-interface', () => {
  describe('methods', () => {
    it('is an array', () => {
      expect(methods).to.be.an('Array');
    });

    it('includes createSchema', () => {
      expect(methods).to.include('createSchema');
    });
  });

  describe('createMockInstance', () => {
    it('create a instance with sinon spy', () => {
      const instance = createMockInstance(spy);
      expect(instance).to.be.an('Object');
      expect(instance.createSchema.isSinonProxy).to.be.true();
    });

    it('mock instance returns a thenable when createSchema be called', () => {
      const instance = createMockInstance(spy);
      expect(instance.createSchema('users').then).to.be.a('function');
    });

    it('create a instance with jest.fn', () => {
      const moduleMocker = new ModuleMocker();
      const fn = () => moduleMocker.getMockFunction();
      const instance = createMockInstance(fn);
      expect(instance).to.be.an('Object');
      expect(moduleMocker.isMockFunction(instance.createSchema)).to.be.true();
    });
  });
});

