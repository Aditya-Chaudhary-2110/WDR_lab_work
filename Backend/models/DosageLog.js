module.exports = (sequelize, DataTypes) => {
  const DosageLog = sequelize.define(
    "DosageLog",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dosage_schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      taken_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      status: {
        type: DataTypes.ENUM("taken", "missed"),
        defaultValue: "taken",
      },
    },
    {
      tableName: "dosage_log",
      timestamps: false,
    }
  );

  DosageLog.associate = (models) => {
    // DosageLog belongs to DosageSchedule
    DosageLog.belongsTo(models.DosageSchedule, {
      foreignKey: "dosage_schedule_id",
      as: "DosageSchedule",
    });
  };

  return DosageLog;
};
