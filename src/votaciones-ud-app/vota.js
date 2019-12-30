import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class Vota extends PolymerElement {
  static get template() {
    return html`
    <paper-card heading="Emmental" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
      <div class="card-content">
        <iron-form>
        <form method="get" action="/form/handler">
            <input type="text" name="name" value="Batman">
            <input type="checkbox" name="donuts" checked> I like donuts<br>
            <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
        </form>
        </iron-form>
      </div>
    </paper-card>
    `;
  }
}
customElements.define('vota-ud', Vota);