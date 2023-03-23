import PlatformeRepositoryMongoDB from "../dao/repositories/platforme/platforme_repository_mongodb";
import PlatformeRepositoryMariaDB from "../dao/repositories/platforme/platforme_repository_mariadb";
import {Sequelize} from "sequelize";
import mysql2 from "mysql2";
type RepositoryType = string;
type DatabaseType = string;

interface DatabaseConfig {
    enabled: boolean;
    // Autres configurations de la base de données spécifiques
}

interface Config {
    // ...
    databases: {
        [key in DatabaseType]: DatabaseConfig;
    };
    // ...
}

const config: Config = {
    // ...
    databases: {
        mongodb: {
            enabled: true,
            // Autres configurations MongoDB spécifiques
        },
        postgres: {
            enabled: true,
            // Autres configurations PostgreSQL spécifiques
        },
        mariadb: {
            enabled: true,
            // Autres configurations MariaDB spécifiques
        },
    },
    // ...
};

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nodejs_api",
    dialectModule: mysql2, // utiliser mysql2 comme module de dialecte
});
const repositoryMapping: {
    [key in RepositoryType]: {
        [key in DatabaseType]: new () => any;
    };
} = {
    platforme: {
        mongodb: PlatformeRepositoryMongoDB,
        mariadb: PlatformeRepositoryMariaDB,
    }
};


function getRepository(repositoryType: RepositoryType, databaseType: DatabaseType): any {
    if (!config.databases[databaseType] || !config.databases[databaseType].enabled) {
        throw new Error(`Unknown or disabled database type: ${databaseType}`);
    }

    const RepositoryClass = repositoryMapping[repositoryType][databaseType];

    if (!RepositoryClass) {
        throw new Error('Unknown repository type');
    }

    return new RepositoryClass();
}

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });


export {
    config,
    getRepository,
    sequelize
};
