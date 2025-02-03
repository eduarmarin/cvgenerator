
import { useState } from 'react'

const info = [
  { label: 'Name', type: 'text', name: 'name'},                                                       
  { label: 'Surname', type: 'text', name: 'surname'},
  { label: 'Phone', type: 'number', name: 'phone'},
  { label: 'Email', type: 'text', name: 'email'}
];
export function Info() { // function to display the info form in column on the left
  return (
    <div className="info common">
      {info.map((product0) => (
        <label key={product0.name}>{product0.label}
          <input type={product0.type} name={product0.name} />
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
export	function Experience() { // function to display the experience form in column on the left down info form
  const [textarea] = useState("The content of a textarea goes in the value attribute")
  const handleClick = () => {console.log('this is:')}
  return (
    <div className="experience common">
      {infoexper.map((product1) => (
        <label key={product1}>{product1.label}
          {product1.type == 'textarea'  ? (
            <textarea type={product1.type} name={product1.name} />
            ) : (
              <input type={product1.type} name={product1.name} />
            )}
        </label>
      ))}
      <button onClick={handleClick}>Add Experience</button>
    </div>
    
  )
}

//export {Info, Experience}