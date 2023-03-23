const express = require('express');
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = express();
const bodyParser = require('body-parser');
const errorHandler = require("./exceptions/handler.ts");
const notFoundHandler = require("./exceptions/handler.ts");
server.use(bodyParser.json());
// Utilisez les fichiers de routage

// Middleware pour gérer les erreurs
server.use(errorHandler);
server.use(notFoundHandler);
// Démarrez le serveur
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
