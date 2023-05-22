import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };
 
  return (
    <div className='quill-main'>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default TextEditor;
