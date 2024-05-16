export class FormModel {


    constructor() {
        this.name = "";
        this.email = "";
        this.address = "";
        this.init();
    }



    init() {
        let name = JSON.parse(localStorage.getItem('name')) || {};
        for (let property in name) {
            this[property] = name[property];
        }
    }



    getInputData() {
        // 1. stringify this object to get rid of this object methods
        let inputsString = JSON.stringify(this);
        // 2. return as plain JS data object
        return JSON.parse(inputsString);
    }


    store() {
        localStorage.setItem('order', JSON.stringify(this));
    }

    getInputOptions() {
        return {
            name: "Please Enter name",
            email: "Please Enter E-mail address",
            phone: "Please Enter phone number",
            address: "Please Enter Address"
        };
    }


}