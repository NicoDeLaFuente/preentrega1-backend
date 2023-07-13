import express from 'express';
import productRouter from "./routes/products.routes.js";
import cartRoutes from "./routes/carts.routes.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter)
app.use("/api/carts", cartRoutes)

app.listen(PORT, () => {
    console.log("Escuchando el puerto 8080")
})