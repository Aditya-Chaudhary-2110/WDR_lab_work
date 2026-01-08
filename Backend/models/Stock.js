module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "stock",
      timestamps: false,
    }
  );

  Stock.associate = (models) => {
    // Stock belongs to a medicine
    Stock.belongsTo(models.Medicine, {
      foreignKey: "medicine_id",
      as: "Medicine",
    });

    // Stock has many stock logs
    Stock.hasMany(models.StockLog, { foreignKey: "stock_id", as: "StockLogs" });
  };

  return Stock;
};
