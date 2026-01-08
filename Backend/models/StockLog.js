module.exports = (sequelize, DataTypes) => {
  const StockLog = sequelize.define(
    "StockLog",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stock_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      changes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "stock_log",
      timestamps: false,
    }
  );

  StockLog.associate = (models) => {
    // Add alias 'Stock' for consistent includes
    StockLog.belongsTo(models.Stock, { foreignKey: "stock_id", as: "Stock" });
  };

  return StockLog;
};
