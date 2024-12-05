/**
 * Represents a toast message.
 * 
 * This class encapsulates the data and functionality associated with a toast message,
 * including the message content and a unique identifier.
 */
export class Toast {
  #message;

  #id;

  /**
   * The length of the generated identifier for each toast.
   * 
   * @private
   * @readonly
   * @static
   * @type {number}
   */
  static #identifierLength = 4;

  /**
   * Creates a new Toast instance.
   *
   * @param {string} message - The message content of the toast.
   */
  constructor(message){
    this.#message = message;
    this.#id = this.#generateId();
  }

  /**
   * Gets the message content of the toast.
   *
   * @return {string} The message content of the toast.
   */
  get message(){
    return this.#message;
  }

  /**
   * Gets the unique identifier of the toast.
   *
   * @return {string} The unique identifier of the toast.
   */
  get id(){
    return this.#id;
  }

  /**
   * Generates a unique identifier for the toast.
   *
   * @private
   * @return {string} A randomly generated unique identifier.
   */
  #generateId(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < Toast.#identifierLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
