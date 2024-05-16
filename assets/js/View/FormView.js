export class FormView {
  constructor() {
    this.inputs = [];
    this.form = document.querySelector('#formGame'); // Corrected to 'formGame'
    this.selectsDiv = this.form.querySelector('fieldset');
  }

  createInputs(dataObject) {
    for (let property in dataObject) {
      this.selectsDiv.insertAdjacentHTML('beforeend',
        `<div class="form-group">
                  <label for="${property}">${property.charAt(0).toUpperCase() + property.slice(1)}:</label>
                  <input name="${property}" 
                         value="${dataObject[property]}" 
                         type="text" size="30" class="form-control"/>
              </div>`);
    }
    this.inputs = this.form.querySelectorAll('input[type=text]');
  }

  /**
   * Binds the change event to all input elements.
   * @param {Function} handler - The event handler function.
   */
  bindSelectionChange(handler) {
    this.inputs.forEach(input => {
      input.addEventListener('change', handler);
    });
  }
}
