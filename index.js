import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import clientsRouter from "./api/clients.js";
import worksRouter from "./api/works.js";
import connectDb from "./utils/db.js";
import submitContactForm from "./api/submitContactForm.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/clients", clientsRouter);
app.use("/api/works", worksRouter);
app.use("/api/submitContactForm", submitContactForm);

app.get("/", (req, res) =>{
    res.send("Hello this is backend.");
});

connectDb();
app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`);
})

