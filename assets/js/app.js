import { GameModel } from "./Model/GameModel.js";
import { GameView } from "./View/GameView.js";
import { GameController } from "./Controller/GameController.js";
import { selectData } from "./store/selectData.js";
import { FormModel } from "./Model/FormModel.js";
import { FormController } from "./Controller/FormController.js";
import { FormView } from "./View/FormView.js";

class App {
  constructor() {
    const file = window.location.pathname.split("/").pop() || "index.html";

    switch (file) {
      case "index.html":
        new GameController(new GameModel(selectData), new GameView());
        break;

      case "form.html":
        new FormController(new FormModel(), new FormView()); // also fix: missing ()
        break;

      default:
        // optional fallback
        new GameController(new GameModel(selectData), new GameView());
        break;
    }
  }
}

new App();
