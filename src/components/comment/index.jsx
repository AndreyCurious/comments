import React from 'react';
import './index.css';
import AllComments from '../Allcomments';

function Comment ({commentData}) {
	const date = new Date(commentData.commented_at);
	const strDate = `${date.toDateString()} ${date.toTimeString().slice(0,5)}`
	console.log(date)
	return (
		<ul>
			<li>
				<div className='Comment-user'>
					<span className='Comment-user-author'>{commentData.author}</span>
					<span className='Comment-user-date'>{strDate}</span>
				</div>
				<div className='Comment-text'>
					{commentData.message}
				</div>
				<AllComments comments={commentData.children}/>
			</li>
		</ul>
	)
}

export default Comment;