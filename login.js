document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validate name
  if (name.length < 3) {
    alert("Please enter a valid name (minimum 3 characters).");
    return;
  }

  // Validate mobile number (10-digit only)
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number starting with 6-9.");
    return;
  }

  // Validate email using HTML5 regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all inputs are valid, store in localStorage or redirect
  localStorage.setItem("userName", name);
  localStorage.setItem("userMobile", mobile);
  localStorage.setItem("userEmail", email);

  alert("Login successful!");
  window.location.href = "dashboard.html";
});
