import React, { useState } from 'react';
import Header from './components/Header/Header';
import InputCheckbox from './components/InputCheckbox/InputCheckbox';
import InputTextArea from './components/InputTextArea/InputTextArea';
import InputSnippet from './components/InputSnippet/InputSnippet';
import Fieldset from './components/Fieldset/Fieldset';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {

  const [ data, setData ] = useState({ stickers: [], quantity: 0, obs: '' });
  const [ sended, setSended ] = useState(false);
  const [ error, setError ] = useState([]);
  
  function onChange(name, value) {
    setError(error.filter(e => e !== name));
    const obj = Object.assign({}, data);
    obj[name] = value;
    setData(obj);
  }

  function sendData() {
    if(validateForm()) {
      console.log('Data', data);
      setSended(true);
    }
  }

  function validateForm() {
    let listError = [];
    
    if(data.stickers.length === 0) {
      listError.push('stickers');
    } 
    
    if(data.quantity === 0) {
      listError.push('quantity');
    }
    setError(listError);
    return listError.length === 0;
  }

  return (
    <div className="box">
      <Header />
      <Fieldset>
        <InputCheckbox 
          onChange={ onChange } 
          value={ data.stickers } 
          error={ error }
          sended={ sended }
        />
      </Fieldset>
      <Fieldset>
        <InputSnippet 
          onChange={ onChange } 
          value={ data.quantity }
          error={ error } 
          sended={ sended }
        />
      </Fieldset>
      <Fieldset>
        <InputTextArea onChange={ onChange } value={ data.obs } />
      </Fieldset>
			<Footer sendData={ sendData } sended={ sended } />
		</div>
  );
}

export default App;
