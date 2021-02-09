import { LitElement, html, css, customElement } from "lit-element";

@customElement("drop-zone")
export class DropZone extends LitElement {
  static styles = css`
    div {
      border: 2px dashed var(--primary-color, black);
      padding: 16px;
    }

    p {
      margin: 0;
      padding: 0;
      color: gray;
      text-align: center;
    }
  `;

  render() {
    return html`
      <div
        @drop="${this.drop}"
        @dragover="${this.dragover}"
        @dragleave="${this.unfocus}"
      >
        <slot name="elements">
          <p>Déposez vos fichiers</p>
        </slot>
      </div>
    `;
  }

  dragover(event) {
    event.preventDefault();
    this.focus();
  }

  focus() {
    this.shadowRoot.querySelector("div").style.boxShadow = "var(--box-shadow)";
  }

  unfocus() {
    this.shadowRoot.querySelector("div").style.boxShadow = "none";
  }

  drop(event) {
    event.preventDefault();
    this.unfocus();
    this.dispatchEvent(
      new CustomEvent("change", { detail: event.dataTransfer })
    );
  }
}
