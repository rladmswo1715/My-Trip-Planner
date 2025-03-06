import { useRef, useState } from 'react';
import QuillWrapper from './QuillWrapper';

const ReviewTextEditor = () => {
  const quillInstance = useRef(null);
  const [content, setContent] = useState('');

  return (
    <div className="mt-[3rem]">
      <QuillWrapper
        forwardedRef={quillInstance}
        value={content}
        onChange={setContent}
        theme="snow"
        style={{ width: '100%', height: '450px' }}
      />
    </div>
  );
};

export default ReviewTextEditor;
