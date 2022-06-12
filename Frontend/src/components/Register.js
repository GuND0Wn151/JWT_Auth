import React from 'react'

function Register() {

      function handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            const user = {
                  name: data.get('name'),
                  email: data.get('email'),
                  password: data.get('password'),
            };
            if (user.name && user.email && user.password) {
                  fetch('/api/users', {
                        method: 'POST', 
                        body: JSON.stringify(user),
                        headers: {
                              'Content-Type': 'application/json'
                        }
                  }).then(response => response.json())
                  .then(data => {
                        console.log('Success:', data);
                  }
                  ).catch(error => {
                         console.error('Error:', error);
                  }
                  );
            }
      }
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit='handleSubmit'>
            <label>
                  Name:
                  <input type="text" name="name" />
            </label><br/><br/><br/>
            <label>
                  Email:
                  <input type="text" name="email" />
            </label><br/><br/><br/>
            <label>
                  Password:
                  <input type="password" name="password" />
            </label><br/><br/><br/>
            <label>
                  Confirm Password:
                  <input type="password" name="confirmPassword" />
            </label><br/><br/><br/>
            <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default Register