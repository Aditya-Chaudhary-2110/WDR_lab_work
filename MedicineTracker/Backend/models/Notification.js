module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
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
      dosage_schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      notified_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      status: {
        type: DataTypes.ENUM("sent", "pending", "failed"),
        defaultValue: "pending",
      },
      read: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
    },
    {
      tableName: "notifications",
      timestamps: false,
    }
  );

  Notification.associate = (models) => {
    // Notification belongs to a User
    Notification.belongsTo(models.User, { foreignKey: "user_id", as: "User" });

    // Notification belongs to a DosageSchedule
    Notification.belongsTo(models.DosageSchedule, {
      foreignKey: "dosage_schedule_id",
      as: "DosageSchedule",
    });
  };

  return Notification;
};
