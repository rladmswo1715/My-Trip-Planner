import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const ReviewTextEditor = () => {
  const [content, setContent] = useState('');

  return (
    <div className="mt-[3rem]">
      <ReactQuill
        value={content}
        onChange={setContent}
        style={{ width: '100%', height: '450px' }}
        theme="snow"
      />
    </div>
  );
};

export default ReviewTextEditor;
