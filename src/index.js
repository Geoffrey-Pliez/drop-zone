import { LitElement, html, css, customElement } from "lit-element";

@customElement('drop-zone')

export class DropZone extends LitElement {

  static styles = css`
   div {
     border: 2px dashed var(--primary-color, black);
     padding: 16px;
     color: lightgray;
   }
  `;

  render() {
    return html`
      <div @drop="${this.drop}" 
           @dragover="${this.dragover}">
          Déposez vos fichiers
      </div>
    `;
  }

  dragover(event) {
    event.preventDefault()
    event.dataTransfer.dropeffect = 'copy'
  }

  drop(event) {
    event.preventDefault()
    this.dispatchEvent(new CustomEvent('change', {detail: event.dataTransfer}))
  }
}
