
const form = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Заполните все поля!")
        return;
  }

    const dataObject = {};
    dataObject.Email = `${email.value}`
    dataObject.Password = `${password.value}`
    console.log(dataObject)
    
    event.currentTarget.reset();

}

form.addEventListener('submit', onSubmit)
