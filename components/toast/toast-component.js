import {html, LitElement} from 'lit';
import componentStyles from './component-styles.css' with {type: "css"};

/**
 * @tagname toast-component
 * @extends LitElement
 * @summary An element that displays non-interactive, passive, 
 *          and asynchronous short messages for users.
 */
export class ToastComponent extends LitElement {
  /**
   * The CSS styles that will be scoped to the component.
   */
  static styles = [componentStyles];

  addToast(message) {
    this.shadowRoot.appendChild(this.#createToast(message));
  }

  #createToast(message) {
    const node = document.createElement('output');
  
    node.innerText = message;
    node.setAttribute('role', 'status');

    return node;
  }
}

// Add the custom element to the browsers custom elements registry
customElements.define('toast-component', ToastComponent);