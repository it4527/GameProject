export class GameView {
    constructor() {
        /**
         * @type {HTMLDivElement} The div element containing the select elements.
         */
        this.selectsDiv = document.querySelector("#div-selects");

        /**
         * @type {HTMLImageElement} The HTML image element for dynamic image display.
         */
        this.dynamicImage = document.querySelector("#dynamic-image");

        /**
         * Array to store the select elements
         */
        this.selects = [];
    }

    /**
     * Creates or updates a select element.
     * @param {string} selectID - The ID of the select element.
     * @param {string[]} options - The options to populate the select element.
     */
    createSelect(selectID, options) {
        // Check if the select element already exists
        let select = this.selectsDiv.querySelector(`#${selectID}`);

        // If it doesn't exist, create it
        if (!select) {
            this.selectsDiv.insertAdjacentHTML("beforeend", `
            <div class="form-group">
                <label for="${selectID}">Select ${selectID.charAt(0).toUpperCase() + selectID.slice(1)}:</label>
                <select id="${selectID}" class="form-control">
                    <option value="undefined">-- Select a ${selectID} --</option>
                </select>
            </div>
            `);
            select = this.selectsDiv.querySelector(`#${selectID}`);
            this.selects.push(select);
        } else {
            // Clear existing options if the select element already exists
            select.innerHTML = `<option value="undefined">-- Select a ${selectID} --</option>`;
        }

        // Populate the select element with options
        options.forEach((option) => {
            select.insertAdjacentHTML("beforeend",
                `<option value="${option}">${option}</option>`);
        });
    }

    /**
     * Binds the change event to all select elements.
     * @param {Function} handler - The event handler function.
     */
    bindSelectionChange(handler) {
        this.selectsDiv.addEventListener('change', handler);
    }

    /**
     * Renders the dynamic image based on the current selections.
     */
    renderDynamicImage() {
        let imgSrc = "assets/media/";
        let hasUndefined = false;

        this.selects.forEach((select) => {
            if (select.value === "undefined") {
                hasUndefined = true;
            } else {
                imgSrc += `${select.value.trim()}-`;
            }
        });

        if (hasUndefined) {
            imgSrc = "assets/media/placeholder.png";
        } else {
            imgSrc = imgSrc.slice(0, -1) + '.jpg';
        }

        this.dynamicImage.src = imgSrc;
    }
}
