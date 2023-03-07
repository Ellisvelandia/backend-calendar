const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB conectado");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar db");
  }
};

module.exports = {
  dbConnection,
};
