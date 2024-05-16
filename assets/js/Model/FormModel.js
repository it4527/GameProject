export class FormModel {


    constructor() {
        this.game = "";
        this.genre = "";
        this.plan = "";
        this.init();
    }



    init() {
        let game = JSON.parse(localStorage.getItem('game')) || {};
        for (let property in game) {
            this[property] = game[property];
        }
    }



    getInputData() {
        // 1. stringify this object to get rid of this object methods
        let inputsString = JSON.stringify(this);
        // 2. return as plain JS data object
        return JSON.parse(inputsString);
    }


    store() {
        localStorage.setItem('game', JSON.stringify(this));
    }

    getInputOptions() {
        return {
            genre: "Please Enter genre",
            game: "Please Enter game",
            plan: "Please Enter plan"
        };
    }


}