# React Recap with token, login, logout and routing
The purpose of this repo is to recap the react topics we have learned so far. The repo is made for a workshop on 3rd semester of Datamatiker education at Cphbusiness.

The repo has 3 branches:
- main: The main branch is where we start from. It contains a basic react app with a login form and a logout button. The login form is connected to the backend server and the login button is connected to the backend server. The logout button is connected to the frontend only.
- final: The final branch is where we end up. after doing the work
- topnavigation: is a branch to show how the result could look like.

The backend server is the backend security server we have used in the previous exercises. The backend server is running on port 8080. This is set in the apiFacade.js file.

## Exercise 1
1. Start backend server: recap_sem3.
2. clone this repo: `git clone -b git topnavigation https://github.com/Hartmannsolution/frontend_secure.git`
3. cd into the folder: `cd frontend_secure` and run `npm install` and `npm run dev`
4. Open the browser and go to the application url to see the result
1. Together in class go through the content of apiFacade.js and see how it works
2. Together in class go through the content of the App.js and see how it works
3. Together in class go through the content of the components folder and see how it works

## Exercise 2
1. Checkout the main branch.
1. Setup routing with react-router-dom.
  - Create 2 new components called Home and About with some dummy content
  - Create a Header component with links to Home and About (Use NavLink from react-router-dom)
2. Add styling to get a horizontal navigation bar with links to Home and About
  - in index.css add the following code (if not already there)
```css
  /* For the router */
ul.header {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
 }
 
 ul.header li { float: left;}
 
 ul.header li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
 }
 ul.header li a:hover:not(.active) { background-color: #111;}
 .active { background-color: #62e4f8;}
```
  - in App.js add `<ul className="header">` around the navigation links and add `activeclassname="active"` to the navlinks.
4. Check in browser that the navigation works and is styled correctly with hover color and active color.

## Exercise 3
1. Put the login form in the Header component
  - Move the LoggedIn component to the Header component
  - The header component will need some props from the App component: `loggedIn`, `login`, `logout` and `user`
  - The header component will need to pass the `user` and `logout` props to the LoggedIn component
  - The header component will need to pass the `login` prop to the LoginForm component
2. Check in browser that the login form works and the LoggedIn component is shown when logged in and contains data from the protected endpoint `/api/info/user` or `/api/info/admin` depending on the role of the logged in user.
3. Move the LoggedIn component out of the Header and into the Home component instead.
  - Make sure data from server is shown in the Home component when logged in
  - Remove the data, when logged out. 
  - Hint: use the `useEffect` hook to fetch data from the server when the component is mounted and when the `loggedIn` prop changes or maybe when the `user` prop changes.
