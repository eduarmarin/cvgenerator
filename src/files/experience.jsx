
import { useState } from 'react'

const info = [
  { label: 'Name', type: 'text', name: 'name'},                                                       
  { label: 'Surname', type: 'text', name: 'surname'},
  { label: 'Phone', type: 'number', name: 'phone'},
  { label: 'Email', type: 'text', name: 'email'}
];

export function Info() {
  return (
    <div className="info common">
      {info.map((product) => (
        <label key={product.name}>{product.label}:
          <input type={product.type} name={product.name} />
        </label>
      ))}
    </div>
  )
}
const infoexper = [
  { label: 'Company', type: 'text', name: 'company'},                                                       
  { label: 'Functions', type: 'textarea', name: 'functions'},
  { label: 'Date', type: 'number', name: 'date'}
];
export	function Experience() {
  const [textarea, setTextarea] = useState("The content of a textarea goes in the value attribute")
  const handleClick = () => {console.log('this is:', this)}
  return (
    <div className="experience common">
      {infoexper.map((product) => (
        <label key={product.name}>{product.label}:
          {product.type == 'textarea'  ? (
            <textarea type={product.type} name={product.name} />
            ) : (
              <input type={product.type} name={product.name} />
            )}
        </label>
      ))}
      <button onClick={handleClick}>Add Experience</button>
    </div>
  )
}
/* export function Experience() {
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
} */


//export {Info, Experience}