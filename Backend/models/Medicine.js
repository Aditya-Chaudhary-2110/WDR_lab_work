module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define(
    "Medicine",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "medicines",
      timestamps: false,
    }
  );

  Medicine.associate = (models) => {
    // Medicine belongs to a user
    Medicine.belongsTo(models.User, { foreignKey: "user_id", as: "User" });

    // Medicine has one stock entry, alias added
    Medicine.hasOne(models.Stock, { foreignKey: "medicine_id", as: "Stock" });

    // Medicine has many dosage schedules
    Medicine.hasMany(models.DosageSchedule, {
      foreignKey: "medicine_id",
      as: "Schedules",
    });
  };

  return Medicine;
};
