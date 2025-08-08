<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFu2tKa7JszwPRE7dTrG9FEX3Giw-pavc",
    authDomain: "grocera-nithin.firebaseapp.com",
    projectId: "grocera-nithin",
    storageBucket: "grocera-nithin.appspot.com",
    messagingSenderId: "824896008507",
    appId: "1:824896008507:web:136d071d696f9ff190071e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Example function to send password reset email
  function sendResetEmail(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
        // Email sent successfully
      })
      .catch((error) => {
        console.error("Error sending reset email:", error);
        // Handle errors here
      });
  }
</script>
