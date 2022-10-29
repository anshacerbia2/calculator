import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formula, setFormula] = useState('rectangular');
  const phi = Math.PI;
  const [inputVal, setInputVal] = useState({
    length: 0,
    width: 0,
    radius: 0,
    base: 0,
    height: 0
  });
  const [val, setVal] = useState(null);

  const handleSelect = (e) => {
    setFormula(e.target.value);
    setInputVal({ length: 0, width: 0, radius: 0, base: 0, height: 0 });
    setVal(null);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = +e.target.value;

    if (formula === 'rectangular') {
      let len = inputVal.length;
      let wdt = inputVal.width;
      if (name === 'length') len = value;
      if (name === 'width') wdt = value;
      let res = len * wdt;
      setVal(res.toFixed(2));
    }

    if (formula === 'circle') {
      let res = (phi * (value ** 2));
      setVal(res.toFixed(2));
    }

    if (formula === 'triangle') {
      let b = inputVal.base;
      let h = inputVal.height;
      if (name === 'base') b = value;
      if (name === 'height') h = value;
      let res = b * h / 2;
      setVal(res.toFixed(2));
    }

    setInputVal({ ...inputVal, [name]: value });
  }

  return (
    <div className="App">
      <div className="container my-5">
        <h1 className='mb-3'>Hitung Luas</h1>
        <select
          className="form-select"
          style={{ maxWidth: 400 }}
          value={formula}
          onChange={handleSelect}
        >
          <option value="rectangular">Persegi Panjang</option>
          <option value="circle">Lingkaran</option>
          <option value="triangle">Segitiga</option>
        </select>
        <div
          style={{
            maxWidth: 400,
            padding: 20,
            marginTop: 20,
            border: '1px solid #ddd'
          }}
        >
          {
            formula === 'rectangular' && (
              <>
                <div className="mb-3">
                  <label htmlFor="length" className="form-label">Panjang</label>
                  <input type="number" min={0} className="form-control" id="length" name="length" value={inputVal.length} onChange={handleInput} />
                </div>
                <div className="mb-3">
                  <label htmlFor="width" className="form-label">Lebar</label>
                  <input type="number" min={0} className="form-control" id="width" name="width" value={inputVal.width} onChange={handleInput} />
                </div>
              </>
            )
          }
          {
            formula === 'circle' && (
              <>
                <div className="mb-3">
                  <label htmlFor="radius" className="form-label">Jari-jari</label>
                  <input type="number" min={0} className="form-control" id="radius" name="radius" value={inputVal.radius} onChange={handleInput} />
                </div>
              </>
            )
          }
          {
            formula === 'triangle' && (
              <>
                <div className="mb-3">
                  <label htmlFor="base" className="form-label">Alas</label>
                  <input type="number" min={0} className="form-control" id="base" name="base" value={inputVal.base} onChange={handleInput} />
                </div>
                <div className="mb-3">
                  <label htmlFor="height" className="form-label">Tinggi</label>
                  <input type="number" min={0} className="form-control" id="height" name="height" value={inputVal.height} onChange={handleInput} />
                </div>
              </>
            )
          }
          <div className="mb-3 d-flex align-items-center">
            <span style={{ flexGrow: 1 }}>Nilai:</span> <span>{val}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
