interface DatabaseConfig {
    enabled: boolean;
    type: string;
    // Autres propriétés spécifiques à chaque base de données
}

interface Config {
    // ...
    databases: {
        mongodb: DatabaseConfig;
        postgres: DatabaseConfig;
        mariadb: DatabaseConfig;
    };
    // ...
}