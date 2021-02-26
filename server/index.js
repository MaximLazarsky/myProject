const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const employeesRoutes = require("./routes/employees-routes");

const app = express();
const PORT = config.get("serverPort");

app.use(express.json());
app.use(cors());

app.use("/api", employeesRoutes);

async function start() {
  try {
    await mongoose.connect(
      config.get("uriDataBase"),
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) console.error(err);
        else console.log("Connected to the mongodb");
      }
    );
    app.listen(PORT, () => console.log("SERVER has started on port:", PORT));
  } catch (e) {
    console.log(e);
  }
}

start();
