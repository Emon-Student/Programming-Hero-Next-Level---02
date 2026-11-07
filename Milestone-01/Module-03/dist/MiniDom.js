class UIRender {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIRender {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input name="${this.id}" type="${this.type}" id="${this.id}" placeholder="${this.placeholder}">`;
    }
}
class Button extends UIRender {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}</button>`;
    }
}
class FormElement extends UIRender {
    childArray = [];
    appendChild(child) {
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
export {};
