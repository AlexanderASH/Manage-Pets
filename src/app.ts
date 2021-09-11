import { setupDB } from "./Database/config";
import Server from "./Server/app";

async function init() {
    try {
        await setupDB();
        new Server();
    } catch (error) {
        console.log(error);
    }
}

init();