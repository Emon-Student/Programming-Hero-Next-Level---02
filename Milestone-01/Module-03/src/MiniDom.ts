abstract class UIRender {
  constructor(protected id: string) {}

  abstract render(): void;
}

class Input extends UIRender {
  constructor(
    id: string,
    private type: string,
    private placeholder: string,
  ) {
    super(id);
  }

  render() {
    return `<input name="${this.id}" type="${this.type}" id="${this.id}" placeholder="${this.placeholder}">`;
  }
}

class Button extends UIRender {
  constructor(
    id: string,
    private label: string,
  ) {
    super(id);
  }
  render() {
    return `<button id="${this.id}">${this.label}</button>`;
  }
}

class FormElement extends UIRender {
  private childArray: UIRender[] = [];

  appendChild(child: UIRender) {
    this.childArray.push(child);
  }

  render() {
    const child = this.childArray.map((child) => child.render()).join("\n ");

    return `<form id="${this.id}" class="form-container">
            <h2>Welcome Back</h2>
            <p class="subtitle">Please enter your information</p>
            ${child}
        </form>`;
  }
}

const emailInput = new Input("email", "email", "Enter Your Email");
const passwordInput = new Input("pass", "password", "Enter Your Password");
const buttonInput = new Button("button", "Submit");
const formInput = new FormElement("form-element");

formInput.appendChild(emailInput);
formInput.appendChild(passwordInput);
formInput.appendChild(buttonInput);

// const EmailInput = emailInput.render();
// const PasswordInput = passwordInput.render();
// const ButtonInput = buttonInput.render();
// const FormInput = formInput.render();

// console.log(EmailInput);
// console.log(PasswordInput);
// console.log(ButtonInput);
// console.log(FormInput);

console.log(formInput.render());

const divElement = document.getElementById("root-element");

if (divElement) {
  divElement.innerHTML = formInput.render();
}
