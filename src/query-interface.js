const { spy } = require('sinon');
const sequelize = require('./sequelize');
const QueryInterface = require('sequelize/lib/query-interface');


const qi = new QueryInterface(sequelize);

const methods = [];
const spyInstance = {};

for (const prop in qi) { // eslint-disable-line guard-for-in, no-restricted-syntax
  if (typeof qi[prop] === 'function') {
    methods.push(prop);
    spyInstance[prop] = spy();
  } else {
    spyInstance[prop] = qi[prop];
  }
}

export { methods, spyInstance };

