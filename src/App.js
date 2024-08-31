import { useEffect, useState, memo } from 'react';
import './App.css';
import AllComments from './components/Allcomments';
import Template from './components/template';
import listToTree from './utils/list-to-tree';

function App() {
  const [comments, setComments] = useState([]);
  async function fetchComments () {
    let result = await fetch('https://comment-dbjson.vercel.app/comments')
    setComments(listToTree(await result.json()));
  }
  useEffect(() => {
    fetchComments();
  }, [])
  
  return (
    <div className="App">
      <Template>
        <AllComments comments={comments}/>
      </Template>
    </div>
  );
}

export default memo(App);
