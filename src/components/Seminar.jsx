import { useState } from 'react';

const Seminar = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTopicChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('File:', file);
    setTitle('');
    setContent('');
    setFile(null);
  };

  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create a Seminar Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Enter the title"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              id="topic"
              value={content}
              onChange={handleTopicChange}
              rows={6}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Enter the content"
              autoComplete="off"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
              File Upload
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Seminar;