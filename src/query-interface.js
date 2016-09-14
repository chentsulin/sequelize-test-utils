const { spy } = require('sinon');
const sequelize = require('./sequelize');
const QueryInterface = require('sequelize/lib/query-interface');


const qi = new QueryInterface(sequelize);

const methods = [];

for (const prop in qi) { // eslint-disable-line guard-for-in, no-restricted-syntax
  if (typeof qi[prop] === 'function') {
    methods.push(prop);
  }
}

export const createSpyInstance = () => {
  const instance = {};

  for (const prop in qi) { // eslint-disable-line guard-for-in, no-restricted-syntax
    if (typeof qi[prop] === 'function') {
      instance[prop] = spy(() => Promise.resolve());
    } else {
      instance[prop] = qi[prop];
    }
  }

  return instance;
};

const spyInstance = createSpyInstance();

export { methods, spyInstance };
