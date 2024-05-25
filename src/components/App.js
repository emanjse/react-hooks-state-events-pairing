import video from '../data/video.js';
import VideoDeatils from './VideoDetails.js';
import CommentsList from './CommentsList.js';

const { title, embedUrl, comments } = video;

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <h1>{title}</h1>
      <VideoDeatils details={video} />
      <CommentsList comments={comments} />
    </div>
  );
}

export default App;