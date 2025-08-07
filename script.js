
// ======================= Get references to DOM elements =================

const form = document.getElementById("auth-form");
const toggleBtn = document.getElementById("toggle-btn");
const nameGroup = document.getElementById("name-group");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let isLoginMode = false;

// ====================== Reset all input fields =======================

function resetFormFields() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

// ====================== Toggle between login and sign-up views ================


function toggleFormMode() {
  isLoginMode = !isLoginMode;

  if (isLoginMode) {
    nameGroup.style.display = "none";
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleBtn.textContent = "Don't have an account? Sign Up";
  } else {
    nameGroup.style.display = "flex";
    formTitle.textContent = "Create Account";
    submitBtn.textContent = "Sign Up";
    toggleBtn.textContent = "Already have an account? Sign In";
  }

  resetFormFields();
}

// ===================== Handle form submission (login or sign-up) ================


async function handleFormSubmit(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (!email || !password || (!isLoginMode && !name)) {
    alert("Please fill out all required fields.");
    return;
}

  if (isLoginMode) {
    // --- LOGIN MODE ---
    try {
      const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`); //Get Request
      const users = await res.json();         //json converts HTTP response to JS object... If login is valid-array will contain at least one user

      if (users.length > 0) {
        resetFormFields();
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please try again.");
    }
  } 
  else 
    {
    // --- SIGN-UP MODE ---
    try {
      const check = await fetch(`http://localhost:3000/users?email=${email}`);    //GET Request 
      const existingUsers = await check.json();            //parses the JSON response from server into JS array

      if (existingUsers.length > 0) {       //If array has one or more users it means the email has already taken
        alert("This email is already registered.");
        return;
      }

      const userData = { name, email, password };        //this object will be converted to JSON and send back to backend
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",                                          //POST request to create new user
        headers: { "Content-Type": "application/json" },         //tells server we are sending JSON
        body: JSON.stringify(userData),                       //converts userData to json string---object===> string
      });

      if (!res.ok) throw new Error("Failed to register user.");         //If response to add user throws error

      resetFormFields();
      window.location.href = "dashboard.html";
    } 
    catch (err) {
      console.error("Signup error:", err);
      alert("Sign up failed. Please try again.");
    }
  }
}


// ============  Attach event listeners after DOM is available ============

form.addEventListener("submit", handleFormSubmit);
toggleBtn.addEventListener("click", toggleFormMode);

// Ensure form starts clean every time
resetFormFields();



//json-server --watch db.json --port 3000