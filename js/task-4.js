const form = document.querySelector(".login-form");
console.log(form);

const pushData = (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("All form fields must be filled in");
  }

  console.log({
    email,
    password,
  }); // то по завданню

  form.reset();

  return {
    email,
    password,
  }; // то щоб функція щось повертала
};

form.addEventListener("submit", pushData);
