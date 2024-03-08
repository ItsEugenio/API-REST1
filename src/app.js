import express from "express";
import morgan from "morgan"; //middleware
import cors from "cors"
import TasksRoutes from "./routes/tasks.routes";

const app = express();




app.set("port", process.env.PORT || 3000);

//middleware
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false})); //permite peticiones desde HTML



app.get("/",(req, res) => {
  res.json({ message: "esta es mi api" });
});

app.use("/api/tasks",TasksRoutes);


export default app;
