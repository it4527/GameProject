export class GameModel {
    #dataSource = null; // external resource

    /**
     * Creates an object representing the game model.
     * 
     * @param {Object} dataSource - The reference to the external resource with data.
     * @returns {GameModel} - The object representing the game model.
     */
    constructor(dataSource) {
        // Assign the dataSource to the private field #dataSource
        this.#dataSource = dataSource;

        // Define object properties dynamically based on the keys of #dataSource
        let properties = Object.keys(this.#dataSource);

        properties.forEach((property) => {
            this[property] = "undefined";
        });
    }

    /**
     * Returns an array of this class' properties.
     * @returns {string[]} The array of properties.
     */
    getProperties() {
        return Object.keys(this).filter(key => key !== '#dataSource');
    }

    /**
     * Gets options for a given selectID from the data source.
     * @param {string} selectID - The ID of the select element.
     * @returns {string[]} The options for the select element.
     */
    getOptions(selectID) {
        return this.#dataSource[selectID] || [];
    }
}
