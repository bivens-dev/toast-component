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

  /**
   * Renders the HTML to the screen
   * @return {html} The HTML to be rendered.
   */
  render() {
    return html`<p>Toast Component</p>`;
  }
}

// Add the custom element to the browsers custom elements registry
customElements.define('toast-component', ToastComponent);