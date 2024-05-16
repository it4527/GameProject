export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Initialize form inputs
        this.initializeForm();

        // Bind form submit handler
        this.view.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    initializeForm() {
        const inputOptions = this.model.getInputOptions();
        this.view.createInputs(inputOptions);
        this.view.bindSelectionChange(this.handleInputChange.bind(this));
    }

    handleInputChange(event) {
        let input = event.target;
        this.model[input.name] = input.value;
    }

    handleFormSubmit(event) {
        // Prevent the default action of a form (prevent submitting it)
        event.preventDefault();
        this.model.store();
        this.showThankYouModal();

    }

    showThankYouModal() {
        const modal = document.getElementById("thankYouModal");
        const closeButton = modal.querySelector(".close-button");

        modal.style.display = "block";

        // Close the modal when the user clicks on <span> (x)
        closeButton.onclick = () => {
            modal.style.display = "none";
        };

        // Close the modal when the user clicks anywhere outside of the modal
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }




}
