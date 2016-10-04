const sequelize = require('./sequelize');
const QueryInterface = require('sequelize/lib/query-interface');


const qi = new QueryInterface(sequelize);

export const methods = [];

for (const prop in qi) { // eslint-disable-line guard-for-in, no-restricted-syntax
  if (typeof qi[prop] === 'function') {
    methods.push(prop);
  }
}

export const createSpyInstance = spyFn => {
  const instance = {};

  for (const prop in qi) { // eslint-disable-line guard-for-in, no-restricted-syntax
    if (typeof qi[prop] === 'function') {
      instance[prop] = spyFn(() => Promise.resolve());
    } else {
      instance[prop] = qi[prop];
    }
  }

  return instance;
};
