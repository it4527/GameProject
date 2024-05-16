
/**
 * Class representing the Game Controller in the MVC architecture.
 */
export class GameController {
    /**
     * Creates an object representing the game controller.
     * 
     * @param {GameModel} model - The model the controller interacts with.
     * @param {GameView} view - The view the controller interacts with.
     * @returns {GameController} The object representing the game controller.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Initialize the selects based on the model's properties
        const properties = this.model.getProperties();
        properties.forEach((property) => {
            const options = this.model.getOptions(property);
            this.view.createSelect(property, options);
        });

        // Bind event handlers
        this.view.bindSelectionChange(this.handleSelectChange.bind(this));
        this.view.orderForm.addEventListener("submit", this.handleFormSubmit);
    }

    /**
     * Handles the change event for selects.
     * @param {Event} event - The change event.
     */
    handleSelectChange = (event) => {
        const select = event.target;
        this.model[select.id] = select.value;

        if (select.id === 'genre') {
            // Populate the game dropdown based on the selected genre
            const games = this.model.getOptions('game');
            this.view.createSelect('game', games);
            this.view.createSelect('plan', []); // Clear the plan dropdown when genre changes
        } else if (select.id === 'game') {
            // Populate the plan dropdown based on the selected game
            const plans = this.model.getOptions('plan');
            this.view.createSelect('plan', plans);
        }

        // Always render the dynamic image based on the current selections
        this.view.renderDynamicImage();
    }


    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        //event.preventDefault();
        this.model.store();
    }
}
