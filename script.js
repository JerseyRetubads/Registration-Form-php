document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let valid = true;
    let messages = [];

    const firstName = form.firstName.value.trim();
    const middleName = form.middleName.value.trim();
    const lastName = form.lastName.value.trim();
    const technology = form.querySelector("select").value;
    const batch = form.batch.value.trim();
    const idNumber = form.idNumber.value.trim();
    const contactNumber = form.contactNumber.value.trim();

    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
    const batchPattern = /^\d{2}$/;
    const idPattern = /^2023-\d{2}-\d{3}$/;
    const contactPattern = /^\d+$/;

    if (!namePattern.test(firstName)) {
      valid = false;
      messages.push("First name must contain only letters (up to 2 words).");
    }

    if (!namePattern.test(middleName)) {
      valid = false;
      messages.push("Middle name must contain only letters (up to 2 words).");
    }

    if (!namePattern.test(lastName)) {
      valid = false;
      messages.push("Last name must contain only letters (up to 2 words).");
    }

    if (!technology || technology === "Select Technology") {
      valid = false;
      messages.push("Please select a technology.");
    }

    if (!batchPattern.test(batch)) {
      valid = false;
      messages.push("Batch must be exactly 2 digits.");
    }

    if (!idPattern.test(idNumber)) {
      valid = false;
      messages.push("ID Number must follow the format 2023-XXX-XXX.");
    }

    if (!contactPattern.test(contactNumber)) {
      valid = false;
      messages.push("Contact Number must contain only digits.");
    }
    
    if (!valid) {
      event.preventDefault();
      alert(messages.join("\n"));
    }
  });
});
