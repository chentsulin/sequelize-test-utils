import { expect } from 'chai';
import * as utils from '../';

describe('index', () => {
  it('exports correctly', () => {
    expect(utils.sequelize).to.exist();
    expect(utils.queryInterfaceMethods).to.exist();
    expect(utils.createQueryInterfaceMock).to.exist();
    expect(utils.field).to.exist();
  });
});

