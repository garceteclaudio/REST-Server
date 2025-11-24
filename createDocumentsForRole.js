const mongoose = require("mongoose");

async function testMongo() {
  mongoose.set("strictQuery", false);

  await mongoose.connect("mongodb://localhost:27017/Clientes");

  const User = mongoose.model("Role", {
    rol: {
      type: String,
    },
  });

  try {
    await User.insertMany([
      { rol: "ADMIN_ROLE" },
      { rol: "USER_ROLE" },
      { rol: "VENTAS_ROLE" },
    ]);

    console.log("Data inserted");
  } catch (error) {
    console.log(error);
  }

  await mongoose.disconnect();
}

testMongo();
