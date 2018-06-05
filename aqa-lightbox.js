import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './aqa-lightbox-img.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class aqaLightbox extends PolymerElement {
  static get template() {
    return html`
        <style></style>
        <slot on-click="_showImage"></slot>
`;
  }

  static get is() { return 'aqa-lightbox'; }
  static get properties() {
      return {
      }
  }
  constructor(){
      super()
      if(typeof  window.lightboxImg == "undefined"){
          window.lightboxImg = document.createElement('aqa-lightbox-img')
          lightboxImg.setAttribute('id',"lightboxImg")
          document.querySelector('body').appendChild(lightboxImg)
      }                
  }

  _showImage(e){
      // this.$.img.src = e.target.src;
      var element = document.getElementById('lightboxImg');
      element.open(e.target.src);
  }
}
window.customElements.define(aqaLightbox.is, aqaLightbox);
