import React from 'react';
import './InputTextArea.scss';

export default function InputTextArea({ onChange, value }) {

  return (
    <div className="InputTextArea">
				<div className="label">Observações:</div>
				<div className="space"></div>
        <textarea 
          onChange={ e => onChange('obs', e.target.value) } 
          name="descricao" 
          placeholder="Alguma dúvida? Recado?">
        </textarea>
    </div>
  );
}
