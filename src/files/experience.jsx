
import { useState } from 'react'

const products = [
  { label: 'Name', type: 'text', name: 'name'},                                                       
  { label: 'Surname', type: 'text', name: 'surname'},
  { label: 'Phone', type: 'number', name: 'phone'},
  { label: 'Email', type: 'text', name: 'email'}
];

export function Info() {
  return (
    <div className="info common">
      {products.map((product) => (
        <label key={product.name}>{product.label}:
          <input type={product.type} name={product.name} />
        </label>
      ))}
    </div>
  )
}

/* export function Info() {
  return (
      <div className="info common">
        <label>Name:
          <input type="text" name="name" />
        </label>
        <label>Surname:
          <input type="text" name="surname" />
        </label>
        <label>Phone:
          <input type="number" name="phone" />
        </label>
        <label>Email:
          <input type="text" name="email" />
        </label>
      </div>
  )
} */

export function Experience() {
  const [textarea, setTextarea] = useState("The content of a textarea goes in the value attribute")
  const handleClick = () => {
    console.log('this is:', this)
  }
  return (
      <div className="experience common">
        <label>Company:
          <input type="text" name="name" />
        </label>
        <label>Functions:
          <textarea value= {textarea} />
        </label>
        <label>Date:
          <input type="number" name="phone" />
        </label>
        <button onClick={handleClick}>Add Experience</button>
      </div>
  )
}


//export {Info, Experience}