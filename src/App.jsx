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

export const FruitTable = ({selectedFruits}) =>{

  return(
    <>
            <main className="results-section">
          <div className="chemicals-grid">
            {Object.entries(fruits).map(([chemical, fruitsMap]) => (
              <div key={chemical} className="chemical-card">
                <h2 className="chemical-title">{chemical}</h2>
                <ul className="fruits-list">
                  {Object.entries(fruitsMap)
.filter(([fruit]) => selectedFruits.includes(fruit))
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

export const CheckboxBlock = ({
  allFruits,
  isDisabled,          
  onToggleFruit,    
  selectedFruits    
}) => {
  return (
    <>
      <div className="checkboxes-container">
        {allFruits.map(fruit => (
          <label key={fruit} className="checkbox-label">
            <input
              onChange={() => onToggleFruit(fruit)}
              type="checkbox"
              className="checkbox-input"
disabled={isDisabled && !selectedFruits.includes(fruit)}

            />
            <span className="checkbox-custom" />
            <span className="checkbox-text">
              {fruit.replace(/_/g, ' ')}
            </span>
          </label>
        ))}
      </div>
    </>
  );
};

function App() {
  const [selectedFruits, setSelectedFruits] = useState([]);     

  const handleToggleFruit = fruit => {                       
    if (selectedFruits.includes(fruit)) {
      console.log('We have that fruit!');
      setSelectedFruits(prev => prev.filter(f => f !== fruit));
    } else {
      setSelectedFruits([...selectedFruits, fruit]);
    }
  };

  const isDisabled = selectedFruits.length >= 5;


  const allFruits = [
    'almond', 'hazelnut', 'nuts', 'apple', 'pear', 'quince',
    'apricot', 'cherry', 'peach', 'plum', 'table_grapes',
    'technical_grapes', 'strawberry', 'blackberry', 'raspberry', 'blueberry'
  ];





  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <aside className="filter-section">
          <div className="filter-header">
            <h2>Fruits Filter</h2>
            <button className="select-all-btn">Select All</button>
          </div>

          <InputSearch />

          <CheckboxBlock
            allFruits={allFruits}
            isDisabled={isDisabled}
            onToggleFruit={handleToggleFruit}
            selectedFruits={selectedFruits}
          />

          <div className="selected-count">
            Selected: {selectedFruits.length} / {allFruits.length}
          </div>
        </aside>

        <FruitTable selectedFruits = {selectedFruits} />
      </div>
    </div>
  );
}

export default App;