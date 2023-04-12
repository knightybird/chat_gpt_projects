import {useState} from "react";

export default function NewPost(props) {
  const [postContent, setPostContent] = useState("");
  console.log("RESULT0: ", postContent);
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleClick= async () => {
    console.log("RESULT1: ", postContent);

    const response = await fetch('/api/generatePost', {
      method: "POST"
    });
    const json = await response.json();
    console.log("RESULT: ", json.post); //note: not showing @ console
    setPostContent(json.post);

  };


  return(
    <div>

      <button type='submit' className="btn" onClick={handleClick}>

          Generate
        </button>
       <h1>this is the new post page</h1>
      <div className="max-w-screen-sm p-10" dangerouslySetInnerHTML={{__html: postContent}}></div>

    </div>
  );
}

