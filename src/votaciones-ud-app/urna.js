import { LitElement, html } from 'lit-element';
class Urna extends LitElement {
  static get properties() { return {
    estilo: { type: String },
    //prop2: { type: Number },
    //prop3: { type: Boolean },
    //prop4: { type: Array },
    //prop5: { type: Object }
  };}

  constructor() {
    super();
    this.estilo = '';
    //this.prop2 = 5;
    //this.prop3 = true;
    //this.prop4 = [1,2,3];
    //this.prop5 = { stuff: 'hi', otherStuff: 'wow' };
  }

  render() {
    return html`
        <link rel="stylesheet" href="${this.estilo}">
        
        <div class="wave-fill">
            <div class="water">
                <span class="wave"></span>
                <span class="deep-water"></span>
            </div>
        </div>
    `;
  }
}
customElements.define('urna-ud', Urna);