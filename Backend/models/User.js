const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  // Associations with aliases
  User.associate = (models) => {
    User.hasMany(models.Medicine, { foreignKey: "user_id", as: "Medicines" });
    User.hasMany(models.Notification, {
      foreignKey: "user_id",
      as: "Notifications",
    });
  };

  // Hash password before create
  User.beforeCreate(async (user) => {
    user.email = user.email.toLowerCase();
    user.password = await bcrypt.hash(user.password, 10);
  });

  // Hash password before update
  User.beforeUpdate(async (user) => {
    user.email = user.email.toLowerCase();
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

  return User;
};
