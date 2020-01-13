import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class VotacionesUdApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <urna-ud></urna-ud><urna-ud></urna-ud><urna-ud></urna-ud>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: Number,
        value: 15
      }
    };
  }

}

window.customElements.define('votaciones-ud-app', VotacionesUdApp);