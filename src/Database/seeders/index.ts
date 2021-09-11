  
import { seedPet } from './pet';
import { seedType } from './type';
import { setupDB } from '../config';

const execute = async () => {
    try {
        await setupDB();
        console.log("Init seeders");
        await seedType();
        await seedPet();
        console.log("Finished seeders");
    } catch (error) {
        console.log(`Seeders ${error}`);
    }
};

execute();