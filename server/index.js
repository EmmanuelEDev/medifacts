import  express from "express";
import connectDB from "./config/db.js"
import patientRoutes from "./routes/patientRoutes.js"
import doctorRoutes from "./routes/doctorRoutes.js"
import cors from "cors"
const app = express()
connectDB()
app.get("/", (req, res) => {
    res.send("GoWaka Server works!")
})
app.use(cors({origin: ["http://localhost:5173"]}))

app.use(express.json());
app.use("/api/patient", patientRoutes)
app.use("/api/doctor", doctorRoutes)
app.listen("3000", () => {
    console.log("It works fine!")
})