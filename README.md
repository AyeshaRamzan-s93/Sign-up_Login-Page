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

1. index.html # Main login/signup UI
2. dashboard.html # Redirect page after successful login/signup
3. style.css # Modern responsive styling
4. script.js # All logic for form, toggle, login/signup
5. db.json # Local database used by json-server
   

### Features

Fully responsive layout

Toggle between Login & Sign Up dynamically

Form input validations

Prevents duplicate user registration

Redirects to a fun dashboard page

Reset fields after submission/toggle

Clean UI using Inter Google Font

## Live Demo

Fronend is hosted on Github Pages

https://ayesharamzan-s93.github.io/Sign-up_Login-Page/

## You can Run Backend Locally 

1. Clone this repository
   
   https://github.com/AyeshaRamzan-s93/Sign-up_Login-Page

2. Navigate into the projects

   cd Sign-up_Login-Page

3. Install json-server if you haven't

   npm install -g json-server

5. Start the server

   json-server --watch db.json --port 3000


##  Author

Created by **Ayesha Ramzan**  
Feel free to fork, contribute, or submit suggestions!
