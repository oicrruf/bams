import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class propety extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    condominium_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'condominium',
        key: 'id'
      }
    },
    propety_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Date.now()
    }
  }, {
    sequelize,
    tableName: 'propety',
    schema: 'public',
    timestamps: true,
    updatedAt: 'due_date',
    createdAt: 'due_date',
    indexes: [
      {
        name: "propety_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
