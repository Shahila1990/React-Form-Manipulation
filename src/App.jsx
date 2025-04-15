import React from 'react';
import ReactDOM from 'react-dom/client'

export default function App() {
  function signUp(formData){
    const data = Object.fromEntries(formData)
    const dietaryRestriction = formData.getAll('dietaryRestriction')
    const allData = {
      ...data,
      dietaryRestriction
    }
    console.log(allData);
    
  }

  return (
    <>
      <section>
        <h1>SignUp Form</h1>
        <form action={signUp}>
          <label htmlFor="email">Email:</label>
          <input id='email' type="email" name='email' placeholder='abc@gmail.com' defaultValue='abc@gmail.com' />

          <label htmlFor="password">PassWord:</label>
          <input id='password' type="password" name='password' defaultValue='abc123' />

          <label htmlFor="description"></label>
          <textarea name="description" id="description" defaultValue='This is description'></textarea>

          <fieldset>
            <legend>Employment Status</legend>
            <label>
              <input type="radio" name='employmentStatus' value='unEmployed' />
              UnEmployed
            </label>

            <label>
              <input type="radio" name='employmentStatus'  value='part-time'/>
              Part-Time
            </label>

            <label>
              <input type="radio" name='employmentStatus' defaultChecked={true} value='full-time'/>
             Full-Time
            </label>
          </fieldset>

          <fieldset>
            <legend>Dietary Restriction:</legend>
            <label>
              <input type="checkbox" name='dietaryRestriction' value='kosher'/>
              Kosher
            </label>

            <label>
              <input type="checkbox" name='dietaryRestriction' value='vegan'/>
              Vegan
            </label>

            <label>
              <input type="checkbox" name='dietaryRestriction' defaultChecked={true} value='gluten-free'/>
              Gluten Free
            </label>
          </fieldset>

          <label htmlFor="favColor">What is Your Favorite Color?</label>
          <select name="favColor" id="favColor" defaultValue='blue' required>
            <option value="" disabled>--Choose a color--</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="purple">Purple</option>
          </select>

          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)