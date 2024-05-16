import { GameModel } from "./Model/GameModel.js";
import { GameView } from "./View/GameView.js";
import { GameController } from "./Controller/GameController.js";
import { selectData } from "./store/selectData.js";

const app = new GameController(new GameModel(selectData), new GameView());



