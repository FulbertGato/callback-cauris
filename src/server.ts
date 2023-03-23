import express, {Application, Request, Response, NextFunction} from 'express';
import {errorHandler, notFoundHandler} from "./exceptions/handler";
import xmlparser from 'express-xml-bodyparser';
import plateforme_route from "./routes/plateforme_route";

const app: Application = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(xmlparser());


const baseurl = "/api";
app.use(`${baseurl}/plateforme`, plateforme_route);


app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
