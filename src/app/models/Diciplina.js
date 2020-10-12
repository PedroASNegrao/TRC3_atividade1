import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const DiciplinaSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true,
      unique: true,
    },    
    nome: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: false,
    },
    QtdCretidos: {
      type: Number,
      required: false,
    },    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

DiciplinaSchema.plugin(autoIncrement.plugin, {
  model: "Diciplina",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Diciplina", DiciplinaSchema);
