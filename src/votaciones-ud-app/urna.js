
 import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
 class Urna extends PolymerElement{
     static get template(){
         return html `
         <style>
            .wave-fill {
                height: 150px;
                width: 145px;
                background: #ccc ;
                -webkit-mask-image: url("resources/logoUD.png");
                -webkit-mask-size: contain;
            }
            span {
                display: block;
                width: 100%;
            }
            
            .wave {
                background: url("resources/ola.png");
                height: 22px;
                background-size: contain;
                animation: wave 10s linear infinite;
            }
            .deep-water {
                background: rgb(4, 103, 246);
                height: 200px;
            }

            @keyframes wave {
            from {
                background-position: 0px 0px;
            }
            to {
                background-position: 1000px 0px;
            }
            }
            .water {
            animation: water 10s ease infinite;
            }
            @keyframes water {
                from {
                    transform: translateY(100%);
                }
                to {
                    transform: translateY(30%);
                }
            }

         </style>
         <div class="wave-fill">
            <div class="water">
                <span class="wave"></span>
                <span class="deep-water"></span>
            </div>
         </div>
         `;
    }
    static get properties(){
        return {
            per: {
                type: String,
                value: "50"
            }
        };
    }
}
window.customElements.define('urna-ud', Urna);