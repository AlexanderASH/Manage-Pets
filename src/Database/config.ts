import { ConnectionOptions, createConnection } from "typeorm";

const options: ConnectionOptions = {
    type: 'sqlite',
    database: `${__dirname}/data/pets.sqlite`,
    entities: [`${__dirname}/entities/*.ts`],
    logging: false,
    synchronize: true
};

export const setupDB = async () => {
    try {
        await createConnection(options);
        console.log('Database running');
    } catch (error) {
        console.log(`Database ${error}`);
    }
}