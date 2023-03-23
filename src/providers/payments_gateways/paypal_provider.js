const express = require('express');
const app = express();
const bodyParser = require('body-parser');




// Middleware pour analyser les données JSON
app.use(bodyParser.json());

// Utilisez les fichiers de routage


// Middleware pour gérer les erreurs



// Démarrez le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
