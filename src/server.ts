import express, { Application, Request, Response, NextFunction } from 'express';
import {errorHandler, notFoundHandler} from "./exceptions/handler";
import xmlparser from 'express-xml-bodyparser';

const app: Application = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xmlparser());

// Importez et utilisez vos routes ici
// app.use('/route', yourRoute);


app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
