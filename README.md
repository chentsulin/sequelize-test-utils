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

tests for user migration (with sinon-chai, chai-subset):

```js
describe('#up', () => {
  it('creates users table', () => {
    const queryInterfaceSpy = createQueryInterfaceSpy();
    up(queryInterfaceSpy, Sequelize);
    expect(queryInterfaceSpy.createTable).to.have.been.calledOnce();

    const call = queryInterfaceSpy.createTable.getCall(0);
    expect(call.args[0]).to.equal('users');
  });

  it('table has auto increment id', () => {
    const queryInterfaceSpy = createQueryInterfaceSpy();
    up(queryInterfaceSpy, Sequelize);

    const call = queryInterfaceSpy.createTable.getCall(0);
    expect(call.args[1]).to.containSubset({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });
  });
});

describe('#down', () => {
	it('drops users table', () => {
  	const queryInterfaceSpy = createQueryInterfaceSpy();
  	down(queryInterfaceSpy, Sequelize);
  	expect(queryInterfaceSpy.dropTable).to.have.been.calledWith('users');
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

