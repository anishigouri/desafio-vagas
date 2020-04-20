import React, { useState, useEffect } from 'react';
import './InputSnippet.scss';

export default function InputSnippet({ onChange, value, error, sended }) {

	const [ disabled, setDisabled ] = useState(true);

	useEffect(() => {
		setDisabled(value === 0);
	}, [value])

	function changeSnippet(newValue) {
		if(!sended && newValue >= 0) {
			onChange('quantity', newValue);
		}
	}

  return (
    <div className="InputSnippet">
			<h3>
				Quantos stickers de cada?
			</h3>
			<div className={`counter ${sended ? 'disabled' : ''} `}>
				<svg className={ disabled ? 'disabled' : '' } onClick={ e => changeSnippet( value - 1) } xmlns="http://www.w3.org/2000/svg" width="42" height="42">
					<path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" />
				</svg>
				<input disabled={ true } type="text" value={ value } className={ error.includes('quantity') ? 'error' : '' } />
				<svg onClick={ e => changeSnippet( value + 1) } xmlns="http://www.w3.org/2000/svg" width="42" height="42">
					<path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" />
				</svg>
			</div>
		</div>
  )
}

