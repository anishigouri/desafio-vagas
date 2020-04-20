import React from 'react';
import './InputCheckbox.scss';

export default function InputCheckbox({ onChange, value, error, sended }) {

  const items = ['React', 'Vue', 'Angular'];

  function changeStickers(checked, item) {
    if(!sended) {
      let list = Object.assign([], value);
      if(checked) {
        list.push(item);
        onChange('stickers', list)
      } else {
        onChange('stickers', list.filter(v => v !== item));
      }
    }
  }

  return (
    <div className="InputCheckbox">
      <h3 className="title">
        Quais stickers:
      </h3>
      <div className="fields">
        {
          items.map((item, index) => 
            <label 
              key={ index } 
              className={`container ${ error.includes('stickers') ? 'error' : '' } ${sended ? 'disabled': ''}`}>{ item }
              <input 
                type="checkbox" 
                onChange={ e => changeStickers(e.target.checked, item) } 
              />
              <span className="checkmark"></span>
            </label>)
        }
      </div>
    </div>
  );
}
