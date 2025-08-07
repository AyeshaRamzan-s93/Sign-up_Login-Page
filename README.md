#  Modern Sign Up / Login UI with Fake Backend

This is a modern, responsive **Sign Up / Login** form built using **HTML**, **CSS**, and **JavaScript**, with backend data handling powered by [`json-server`](https://github.com/typicode/json-server).

The UI allows users to:
- Sign up with name, email, and password
- Log in with email and password
- Automatically redirect to a dashboard on successful login/signup
- Prevent duplicate registration
- Switch between sign-up and login modes dynamically
- Handle form field resets and validation_

---

## Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6+)**
- **json-server** (for mock backend)

---

##  Project Structure


-- index.html # Main login/signup UI
-- dashboard.html # Redirect page after successful login/signup
-- style.css # Modern responsive styling
-- script.js # All logic for form, toggle, login/signup
-- db.json # Local database used by json-server
-- README.md # You're here!

Step 1: Create db.json

Create a file called db.json in the root directory:

{
  "users": []
}

Step 2. Start the json-server

In the project directory, run:
json-server --watch db.json --port 3000
It will run at:
http://localhost:3000

Step 3: Open the Frontend
   
Just open index.html in your browser directly (or host it via VS Code Live Server or any static server).

### Features

Fully responsive layout
Toggle between Login & Sign Up dynamically
Form input validations
Prevents duplicate user registration
Redirects to a fun dashboard page
Reset fields after submission/toggle
Clean UI using Inter Google Font


##  Author

Created by **Ayesha Ramzan**  
Feel free to fork, contribute, or submit suggestions!
