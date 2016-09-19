import Sequelize from 'sequelize';

class Field {
  constructor(schema) {
    if (this.isDataType(schema)) {
      this._schema = {
        allowNull: true,
        type: schema,
      };
    } else if (typeof schema === 'object') {
      this._schema = schema;
    } else {
      throw new TypeError('schema should be a object or dataType');
    }
  }

  isDataType(schema) {
    return schema && typeof schema.key === 'string' &&
      typeof schema.warn === 'function' &&
      typeof schema.types === 'object';
  }

  isPrimaryKey() {
    return !!this._schema.primaryKey;
  }

  isAutoIncrement() {
    return !!this._schema.autoIncrement;
  }

  allowNull() {
    return !!this._schema.allowNull;
  }

  hasName(name) {
    return this._schema.field === name;
  }

  references(ref) {
    return !!this._schema.references &&
      this._schema.references.model === ref.model &&
      this._schema.references.key === ref.key;
  }

  isType(type) {
    return type && this._schema.type === type;
  }

  isString() {
    return this.isType(Sequelize.STRING);
  }

  isChar() {
    return this.isType(Sequelize.CHAR);
  }

  isText() {
    return this.isType(Sequelize.TEXT);
  }

  isInteger() {
    return this.isType(Sequelize.INTEGER);
  }

  isBigInt() {
    return this.isType(Sequelize.BIGINT);
  }

  isFloat() {
    return this.isType(Sequelize.FLOAT);
  }

  isReal() {
    return this.isType(Sequelize.REAL);
  }

  isDouble() {
    return this.isType(Sequelize.DOUBLE);
  }

  isDecimal() {
    return this.isType(Sequelize.DECIMAL);
  }

  isBoolean() {
    return this.isType(Sequelize.BOOLEAN);
  }

  isTime() {
    return this.isType(Sequelize.TIME);
  }

  isDate() {
    return this.isType(Sequelize.DATE);
  }

  isJson() {
    return this.isType(Sequelize.JSON);
  }

  isBlob() {
    return this.isType(Sequelize.BLOB);
  }

  isEnum() {
    return this.isType(Sequelize.ENUM);
  }
}


const field = schema => new Field(schema);

export default field;
