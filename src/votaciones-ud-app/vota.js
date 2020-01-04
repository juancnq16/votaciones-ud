//import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-spinner/paper-spinner.js';
import { LitElement, html } from 'lit-element';
class Vota extends LitElement {
  static get properties() { return {
    //estilo: { type: String },
    //prop2: { type: Number },
    //prop3: { type: Boolean },
    //prop4: { type: Array },
    //prop5: { type: Object }
  };}

  constructor() {
    super();
    //this.estilo = '';
    //this.prop2 = 5;
    //this.prop3 = true;
    //this.prop4 = [1,2,3];
    //this.prop5 = { stuff: 'hi', otherStuff: 'wow' };
  }
  render() {
    return html`
    <paper-card>
      <div class="card-content">
        <iron-form id="voto">
        <form method="get" action="/form/handler">
            <paper-input type="text" name="nombre" required label="Nombre" value=""></paper-input>
            <br><br>
            <paper-input type="number" name="codigo" required label="Codigo" value="" char-counter maxlength="12" auto-validate pattern="[0-9]*" error-message="Codigo No Valido"></paper-input>
            <br>
            <paper-dropdown-menu label="Opciones" name="opciones" required>
              <paper-listbox class="dropdown-content" slot="dropdown-content">
                <paper-item value="opc1">Opción 1</paper-item>
                <paper-item value="opc2">Opción 2</paper-item>
                <paper-item value="opc3">Opción 3</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>      
            <br>
            <paper-button raised onclick="_delayedSubmit(event)" disabled id="form4Submit">
            <paper-spinner id="spinner" hidden></paper-spinner>Submit</paper-button>
            <paper-button raised onclick="borrarForm()">Borrar</paper-button>
            <br>
            <button on-click="borrarForm">Kick Me</button>
        </form>
        </iron-form>
      </div>
  </paper-card>
  <script>
      voto.addEventListener('iron-form-submit', function(event) {
        this.querySelector('.output').innerHTML = "Enviado";
        spinner.active = false;
        spinner.hidden = true;
        form4Submit.disabled = false;
      });
      form4.addEventListener('change', function(event) {
        // Validate the entire form to see if we should enable the \`Submit\` button.
        form4Submit.disabled = !form4.validate();
        console.log("su puta madre valida así cierto?");
      });
      function _delayedSubmit(event) {
        spinner.active = true;
        spinner.hidden = false;
        form4Submit.disabled = true;
    // Simulate a slow server response.
        setTimeout(function() {
          form4.submit()
          }, 1000);
        }
        function borrarForm(){
          this.querySelector('.voto').reset();
          this.querySelector('.output').innerHTML = "Enviado";
        }
    </script>
    `;
  }
}

customElements.define('vota-ud', Vota);
