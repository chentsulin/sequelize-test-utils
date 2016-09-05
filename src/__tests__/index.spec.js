import { expect } from 'chai';
import * as utils from '../';

describe('index', () => {
  it('exports correctly', () => {
    expect(utils.sequelize).to.exist();
    expect(utils.queryInterfaceMethods).to.exist();
    expect(utils.queryInterfaceSpy).to.exist();
    expect(utils.createQueryInterfaceSpy).to.exist();
  });
});

