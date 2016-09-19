import { expect } from 'chai';
import Sequelize from 'sequelize';

import field from '../field';

describe('field', () => {
  it('throw when schema is not a object or a type', () => {
    expect(() => field()).to.throw(TypeError);
    expect(() => field(1)).to.throw(TypeError);
  });

  it('also work when type as schema', () => {
    expect(field(Sequelize.STRING).isString()).to.be.true();
  });

  describe('#isPrimaryKey', () => {
    it('return true when is a primary key', () => {
      expect(field({
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      }).isPrimaryKey()).to.be.true();
    });

    it('return false when is not a primary key', () => {
      expect(field({
        allowNull: true,
        type: Sequelize.STRING,
      }).isPrimaryKey()).to.be.false();
    });
  });

  describe('#allowNull', () => {
    it('return true when allow null', () => {
      expect(field({
        allowNull: true,
        type: Sequelize.STRING,
      }).allowNull()).to.be.true();
    });

    it('return false when does not allow null', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).allowNull()).to.be.false();
    });
  });

  describe('#hasName', () => {
    it('return true when field has name assignment', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      }).hasName('created_at')).to.be.true();
    });

    it('return false when field does not have name assignment', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).hasName('created_at')).to.be.false();
    });
  });

  describe('#references', () => {
    it('return true when references match', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      }).references({
        model: 'users',
        key: 'id',
      })).to.be.true();
    });

    it('return false when references does not exist', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).references({
        model: 'users',
        key: 'id',
      })).to.be.false();
    });

    it('return false when references model not match', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'admins',
          key: 'id',
        },
      }).references({
        model: 'users',
        key: 'id',
      })).to.be.false();
    });

    it('return false when references key not match', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'uid',
        },
      }).references({
        model: 'users',
        key: 'id',
      })).to.be.false();
    });
  });

  describe('#isType', () => {
    it('return true when type match', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isType(Sequelize.STRING)).to.be.true();
    });

    it('return true when type not match', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isType(Sequelize.STRING)).to.be.false();
    });
  });

  describe('#isString', () => {
    it('return true when type is string', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isString()).to.be.true();
    });

    it('return true when type is not string', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isString()).to.be.false();
    });
  });

  describe('#isChar', () => {
    it('return true when type is char', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.CHAR,
      }).isChar()).to.be.true();
    });

    it('return true when type is not char', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isChar()).to.be.false();
    });
  });

  describe('#isText', () => {
    it('return true when type is text', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.TEXT,
      }).isText()).to.be.true();
    });

    it('return true when type is not text', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isText()).to.be.false();
    });
  });

  describe('#isInteger', () => {
    it('return true when type is integer', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.INTEGER,
      }).isInteger()).to.be.true();
    });

    it('return true when type is not integer', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isInteger()).to.be.false();
    });
  });

  describe('#isBigInt', () => {
    it('return true when type is big integer', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.BIGINT,
      }).isBigInt()).to.be.true();
    });

    it('return true when type is not big integer', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isBigInt()).to.be.false();
    });
  });

  describe('#isFloat', () => {
    it('return true when type is float', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.FLOAT,
      }).isFloat()).to.be.true();
    });

    it('return true when type is not float', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isFloat()).to.be.false();
    });
  });

  describe('#isReal', () => {
    it('return true when type is real', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.REAL,
      }).isReal()).to.be.true();
    });

    it('return true when type is not real', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isReal()).to.be.false();
    });
  });

  describe('#isDouble', () => {
    it('return true when type is double', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DOUBLE,
      }).isDouble()).to.be.true();
    });

    it('return true when type is not double', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isDouble()).to.be.false();
    });
  });

  describe('#isDecimal', () => {
    it('return true when type is decimal', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DECIMAL,
      }).isDecimal()).to.be.true();
    });

    it('return true when type is not decimal', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isDecimal()).to.be.false();
    });
  });

  describe('#isBoolean', () => {
    it('return true when type is boolean', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.BOOLEAN,
      }).isBoolean()).to.be.true();
    });

    it('return true when type is not boolean', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isBoolean()).to.be.false();
    });
  });

  describe('#isTime', () => {
    it('return true when type is time', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.TIME,
      }).isTime()).to.be.true();
    });

    it('return true when type is not time', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isTime()).to.be.false();
    });
  });

  describe('#isDate', () => {
    it('return true when type is date', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.DATE,
      }).isDate()).to.be.true();
    });

    it('return true when type is not date', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isDate()).to.be.false();
    });
  });

  describe('#isJson', () => {
    it('return true when type is json', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.JSON,
      }).isJson()).to.be.true();
    });

    it('return true when type is not json', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isJson()).to.be.false();
    });
  });

  describe('#isBlob', () => {
    it('return true when type is blob', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.BLOB,
      }).isBlob()).to.be.true();
    });

    it('return true when type is not blob', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isBlob()).to.be.false();
    });
  });

  describe('#isEnum', () => {
    it('return true when type is enum', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.ENUM,
      }).isEnum()).to.be.true();
    });

    it('return true when type is not enum', () => {
      expect(field({
        allowNull: false,
        type: Sequelize.STRING,
      }).isEnum()).to.be.false();
    });
  });
});
