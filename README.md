# sequelize-test-utils

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Test utils for sequelize


## Install

```
$ npm install --save-dev sequelize-test-utils
```

## Usage

user migration:

```js
export default {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
```


#### Mocha + Sinon (with dirty-chai, sinon-chai)

```js
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';

chai.use(dirtyChai);
chai.use(sinonChai);
```

```js
import { expect } from 'chai';
import { spy } from 'sinon';
import Sequelize from 'sequelize';
import { createQueryInterfaceMock, field } from 'sequelize-test-utils';
import { up, down } from '../20160827174306-create-user';

describe('#up', () => {
  it('creates users table', () => {
    const queryInterface = createQueryInterfaceMock(spy);
    up(queryInterface, Sequelize);
    expect(queryInterface.createTable).to.have.been.calledOnce();

    const call = queryInterface.createTable.getCall(0);
    expect(call.args[0]).to.equal('users');
  });

  it('table has auto increment id', () => {
    const queryInterface = createQueryInterfaceMock(spy);
    up(queryInterface, Sequelize);

    const call = queryInterface.createTable.getCall(0);
    const idField = field(call.args[1].id);
    expect(idField.allowNull()).to.be.false();
    expect(idField.isAutoIncrement()).to.be.true();
    expect(idField.isPrimaryKey()).to.be.true();
    expect(idField.isInteger()).to.be.true();
  });
});

describe('#down', () => {
    it('drops users table', () => {
    const queryInterface = createQueryInterfaceMock(spy);
    down(queryInterface, Sequelize);
    expect(queryInterface.dropTable).to.have.been.calledWith('users');
  });
});
```


#### Jest

```js
import Sequelize from 'sequelize';
import { createQueryInterfaceMock, field } from 'sequelize-test-utils';
import { up, down } from '../20160827174306-create-user';

describe('#up', () => {
  it('creates users table', () => {
    const queryInterface = createQueryInterfaceMock(jest.fn);
    up(queryInterface, Sequelize);
    expect(queryInterface.createTable).toBeCalled();

    const call = queryInterface.createTable.mock.calls[0];
    expect(call[0]).to.equal('users');
  });

  it('table has auto increment id', () => {
    const queryInterface = createQueryInterfaceMock(jest.fn);
    up(queryInterface, Sequelize);

    const call = queryInterface.createTable.mock.calls[0];
    const idField = field(call[1].id);
    expect(idField.allowNull()).toBe(false);
    expect(idField.isAutoIncrement()).toBe(true);
    expect(idField.isPrimaryKey()).toBe(true);
    expect(idField.isInteger()).toBe(true);
  });
});

describe('#down', () => {
    it('drops users table', () => {
    const queryInterface = createQueryInterfaceMock(jest.fn);
    down(queryInterface, Sequelize);
    expect(queryInterface.dropTable).toBeCalledWith('users');
  });
});
```

## License

MIT © [C.T. Lin](https://github.com/chentsulin/sequelize-test-utils)

[npm-image]: https://badge.fury.io/js/sequelize-test-utils.svg
[npm-url]: https://npmjs.org/package/sequelize-test-utils
[travis-image]: https://travis-ci.org/chentsulin/sequelize-test-utils.svg
[travis-url]: https://travis-ci.org/chentsulin/sequelize-test-utils
[coveralls-image]: https://coveralls.io/repos/chentsulin/sequelize-test-utils/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/sequelize-test-utils?branch=master
[david_img]: https://david-dm.org/chentsulin/sequelize-test-utils.svg
[david_site]: https://david-dm.org/chentsulin/sequelize-test-utils

