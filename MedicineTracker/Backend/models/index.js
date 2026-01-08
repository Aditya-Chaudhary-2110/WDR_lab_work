const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

// Import models
const User = require("./User")(sequelize, DataTypes);
const Medicine = require("./Medicine")(sequelize, DataTypes);
const Stock = require("./Stock")(sequelize, DataTypes);
const StockLog = require("./StockLog")(sequelize, DataTypes);
const DosageSchedule = require("./DosageSchedule")(sequelize, DataTypes);
const DosageLog = require("./DosageLog")(sequelize, DataTypes);
const Notification = require("./Notification")(sequelize, DataTypes);

const models = {
  User,
  Medicine,
  Stock,
  StockLog,
  DosageSchedule,
  DosageLog,
  Notification,
};

// Run associations
Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

module.exports = { ...models, sequelize };
