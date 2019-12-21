/*
 * Task:
 *    В задании дана форма обратной связи состоящая из трех полей: email, name и comment.
 *    Реализуйте логику отправки этой формы (без физической отправки куда-либо).
 *    Когда форма заполнена и "отправлена" (нажата кнопка send),
 *    то вместо формы появляется такой вывод:
 *
 *    <div>
 *        <p>Feedback has been sent</p>
 *        <div>Email: test@email.com</div>
 *        <div>Name: Matz</div>
 *        <div>Comment: My Comment</div>
 *    </div>
 *
 * Напишите и экспортируйте функцию по умолчанию, которая реализует необходимую логику.
 */

// Solution:

// rendering function
const render = (element, data) => {
  ["email", "name", "comment"].forEach(key => {
    if (data[key] === null) {
      throw new Error("Empty field");
    }
  });
  const div = document.createElement("div");
  div.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${data.email}</div>
      <div>Name: ${data.name}</div>
      <div>Comment: ${data.comment}</div>
    `;
  element.replaceWith(div);
};

export default () => {
  const form = document.querySelector(".feedback-form");
  const handler = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    render(form, data);
  };
  form.addEventListener("submit", handler);
};
