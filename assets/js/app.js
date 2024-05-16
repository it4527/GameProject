import { GameModel } from "./Model/GameModel.js";
import { GameView } from "./View/GameView.js";
import { GameController } from "./Controller/GameController.js";
import { selectData } from "./store/selectData.js";
import { FormModel } from "./Model/FormModel.js"
import { FormController } from "./Controller/FormController.js";
import { FormView } from "./View/FormView.js";





class App {

    constructor() {
        const url = window.location.href;
        const page = url.match(/[a-z]+.html/)[0];
        switch (page) {

            case "index.html":
                new GameController(new GameModel(selectData), new GameView());
                break;
            case "form.html":
                new FormController(new FormModel(), new FormView)
                break;
        }

    }

}
const app = new App();
