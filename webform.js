function compareEmails() {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirm_email").value;
  if (email !== confirmEmail) {
    alert(
      "Please confirm your email has been entered correctly in both fields."
    );
  }
}
