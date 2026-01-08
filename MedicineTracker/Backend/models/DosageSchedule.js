module.exports = (sequelize, DataTypes) => {
  const DosageSchedule = sequelize.define(
    "DosageSchedule",
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
      dosage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      schedule_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      frequency: {
        type: DataTypes.ENUM("once", "daily", "weekly"),
        defaultValue: "daily",
      },
      grace_period: {
        type: DataTypes.INTEGER,
        defaultValue: 15,
      },
      last_triggered: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "dosage_schedule",
      timestamps: false,
    }
  );

  DosageSchedule.associate = (models) => {
    // DosageSchedule belongs to a Medicine
    DosageSchedule.belongsTo(models.Medicine, {
      foreignKey: "medicine_id",
      as: "Medicine",
    });

    // DosageSchedule has many DosageLogs
    DosageSchedule.hasMany(models.DosageLog, {
      foreignKey: "dosage_schedule_id",
      as: "Logs",
    });

    // DosageSchedule has many Notifications
    DosageSchedule.hasMany(models.Notification, {
      foreignKey: "dosage_schedule_id",
      as: "Notifications",
    });
  };

  return DosageSchedule;
};
