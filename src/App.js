import React, {useState} from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'
import marked from 'marked'

export default function App() {
  const [markdown, setMarkdown] = useState('# sup')

  function handleChange(e){
    setMarkdown(e.target.value)
  }
  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown}/>

      {/* <div className="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}} /> */}
      <ReactMarkdown className="preview" source={markdown}/>

    </div>
  );
}
