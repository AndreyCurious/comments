import React from 'react';
import './index.css';

function Template ({children}) {
	return (
		<div className='Template'>
			<h2>Комменатрии</h2>
			{children}
		</div>
	)
}

export default Template;