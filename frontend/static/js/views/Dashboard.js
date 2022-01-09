import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
      <h1>Welcome back, Dom</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <p>
        <a href='/posts'>View recent posts</a>.
      </p>
    `;
  }
}