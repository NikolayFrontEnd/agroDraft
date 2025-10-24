// App.jsx
import { useState, useEffect } from 'react';
import fruits from '../lmr.json';
import './a.scss';

export const Header = () => {
  return (
    <>
      <header className="app-header">
        <h1>🍎 Chemical & Fruit Limits Database</h1>
        <p>Select fruits to filter chemicals</p>
      </header>
    </>
  );
};

export const InputSearch = ({ handleChemicalSearch }) => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search chemicals..."
          onChange={handleChemicalSearch}
        />
      </div>
    </>
  );
};

export const FruitTable = ({ selectedFruitsList, filteredChemicals }) => {
  return (
    <>
      <main className="results-section">
        <div className="chemicals-grid">
          {Object.entries(fruits)
            .filter(([chemical]) => filteredChemicals.includes(chemical))
            .map(([chemical, fruitsMap]) => (
              <div key={chemical} className="chemical-card">
                <h2 className="chemical-title">{chemical}</h2>
                <ul className="fruits-list">
                  {Object.entries(fruitsMap)
                    .filter(([fruit]) => selectedFruitsList.includes(fruit))
                    .map(([fruit, limit]) => (
                      <li key={fruit} className="fruit-item">
                        <span className="fruit-name">
                          {fruit.replace(/_/g, ' ')}
                        </span>
                        <span className="fruit-limit">{limit ?? '—'}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export const CheckboxBlock = ({
  allFruits,
  isFruitSelectionDisabled,
  onFruitToggle,
  selectedFruitsList,
}) => {
  return (
    <>
      <div className="checkboxes-container">
        {allFruits.map((fruit) => (
          <label key={fruit} className="checkbox-label">
            <input
              onChange={() => onFruitToggle(fruit)}
              type="checkbox"
              className="checkbox-input"
              disabled={
                isFruitSelectionDisabled &&
                !selectedFruitsList.includes(fruit)
              }
            />
            <span className="checkbox-custom" />
            <span className="checkbox-text">{fruit.replace(/_/g, ' ')}</span>
          </label>
        ))}
      </div>
    </>
  );
};

function App() {
  const [selectedFruitsList, setSelectedFruitsList] = useState([]);
  const [filteredChemicals, setFilteredChemicals] = useState([]);

  // при загрузке приложения показываем все химикаты
  useEffect(() => {
    setFilteredChemicals(Object.keys(fruits));
  }, []);

  const toggleFruitSelection = (fruit) => {
    if (selectedFruitsList.includes(fruit)) {
      console.log('We have that fruit!');
      setSelectedFruitsList((prev) => prev.filter((f) => f !== fruit));
    } else {
      setSelectedFruitsList([...selectedFruitsList, fruit]);
    }
  };

  const isFruitSelectionDisabled = selectedFruitsList.length >= 5;

  const allFruits = [
    'almond',
    'hazelnut',
    'nuts',
    'apple',
    'pear',
    'quince',
    'apricot',
    'cherry',
    'peach',
    'plum',
    'table_grapes',
    'technical_grapes',
    'strawberry',
    'blackberry',
    'raspberry',
    'blueberry',
  ];

  const handleChemicalSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const chemicalNames = Object.keys(fruits);

    // если поле пустое → показываем все химикаты
    if (query.trim() === '') {
      setFilteredChemicals(chemicalNames);
      return;
    }

    const matches = chemicalNames.filter((name) =>
      name.startsWith(query)
    );

    setFilteredChemicals(matches);

    if (matches.length > 0) {
      console.log('Найденные химикаты:', matches);
    } else {
      console.log('Такого химиката нет');
    }
  };

  console.log(filteredChemicals);

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <aside className="filter-section">
          <div className="filter-header">
            <h2>Fruits Filter</h2>
            <button className="select-all-btn">Select All</button>
          </div>

          <InputSearch handleChemicalSearch={handleChemicalSearch} />

          <CheckboxBlock
            allFruits={allFruits}
            isFruitSelectionDisabled={isFruitSelectionDisabled}
            onFruitToggle={toggleFruitSelection}
            selectedFruitsList={selectedFruitsList}
          />

          <div className="selected-count">
            Selected: {selectedFruitsList.length} / {allFruits.length}
          </div>
        </aside>

        <FruitTable
          selectedFruitsList={selectedFruitsList}
          filteredChemicals={filteredChemicals}
        />
      </div>
    </div>
  );
}

export default App;
