import Server from "./Server/app";

function init() {
    try {
        new Server();
    } catch (error) {
        console.log(error);
    }
}

init();