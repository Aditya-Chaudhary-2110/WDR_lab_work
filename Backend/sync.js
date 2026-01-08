const { sequelize } = require("./models"); // import sequelize instance

(async () => {
  try {
    // Sync all models with the database
    // { alter: true } updates tables to match models without dropping them
    // { force: true } drops & recreates tables — use only for testing
    await sequelize.sync({ alter: true });

    console.log("✅ All models synced successfully!");
    process.exit(0); // exit after syncing
  } catch (error) {
    console.error("❌ Error syncing models:", error);
    process.exit(1);
  }
})();
