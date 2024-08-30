import React from 'react';
import './index.css';
import Comment from '../comment'

function AllComments ({comments}) {
	
	return (
		<>
		{comments.map((item) => 
			<div key={item.id}>
        <Comment commentData={item}/>
      </div>
		)}
		</>
		
	)
}

export default AllComments;