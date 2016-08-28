import { expect } from 'chai';
import sequelize from '../sequelize';

describe('sequelize', () => {
  it('has dialect QueryGenerator', () => {
    expect(sequelize.dialect.QueryGenerator).to.exist();
  });
});

