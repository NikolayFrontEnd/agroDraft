// App.jsx
import { useEffect, useState } from 'react';
import fruits from '../lmr.json';
import './a.scss';

export const Header = () =>{
  return(
    <>
      <header className="app-header">
        <h1>🍎 Chemical & Fruit Limits Database</h1>
        <p>Select fruits to filter chemicals</p>
      </header>
    </>
  )
}

export const InputSearch = () =>{
  return(
    <>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search fruits..."
            />
          </div>
    </>
  )
}

export const CheckboxBlock = ({allFruits , checkboxesDisabled , setCheckboxesDisabled}) =>{
const [addedFruits, setAddedfruits] = useState([]);
                
const fn = (fruit, event) =>{
    if(addedFruits.includes(fruit)){
console.log("We have that fruit!");
setAddedfruits(prev=>prev.filter(f=>f!==fruit))
  }
  else{      
setAddedfruits([...addedFruits, fruit]);
  }
 }
useEffect(() => {
  if (addedFruits.length >= 5) {
    setCheckboxesDisabled(true);
  }
  if(addedFruits.length < 5){
        setCheckboxesDisabled(false);
  }
}, [addedFruits]);

console.log(addedFruits);

  return(
    <>
              <div className="checkboxes-container">
            {allFruits.map(fruit => (
              <label key={fruit} className="checkbox-label">
                <input onChange={(event)=>fn(fruit, event)} type="checkbox" className="checkbox-input" disabled={addedFruits.includes(fruit) ? false : checkboxesDisabled}/>
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">
                  {fruit.replace(/_/g, ' ')}
                </span>
              </label>
            ))}
          </div>
    </>
  )
}

export const FruitTable = () =>{
  
  return(
    <>
            <main className="results-section">
          <div className="chemicals-grid">
            {Object.entries(fruits).map(([chemical, fruitsMap]) => (
              <div key={chemical} className="chemical-card">
                <h2 className="chemical-title">{chemical}</h2>
                <ul className="fruits-list">
                  {Object.entries(fruitsMap)
  .map(([fruit, limit]) => (
                    <li key={fruit} className="fruit-item">
                      <span className="fruit-name">
                        {fruit.replace(/_/g, ' ')}
                      </span>
                      <span className="fruit-limit">
                        {limit ?? '—'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
    </>
  )
}

function App() {

const [checkboxesDisabled, setCheckboxesDisabled] = useState(false);

    const allFruits = [
    'almond', 'hazelnut', 'nuts', 'apple', 'pear', 'quince',
    'apricot', 'cherry', 'peach', 'plum', 'table_grapes',
    'technical_grapes', 'strawberry', 'blackberry', 'raspberry', 'blueberry'
  ];

  return (
    <div className="app-container">
      <Header/>
      <div className="app-content">
        {/* FILTER SECTION */}
        <aside className="filter-section">
          <div className="filter-header">
            <h2>Fruits Filter</h2>
            <button className="select-all-btn">Select All</button>
          </div>

          {/* Search Input */}
<InputSearch/>

          {/* Checkboxes */}
<CheckboxBlock allFruits = {allFruits} checkboxesDisabled ={checkboxesDisabled} setCheckboxesDisabled = {setCheckboxesDisabled}/>

          <div className="selected-count">
            Selected: 0 / 16
          </div>
        </aside>

        {/* RESULTS SECTION */}
<FruitTable/>

      </div>
    </div>
  );
}

export default App;