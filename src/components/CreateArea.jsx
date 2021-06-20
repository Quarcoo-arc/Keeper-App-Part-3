import React, { useState } from "react";

function CreateArea(props) {
  let [info, setInfo] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={info.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={info.content}
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            props.addItem(info);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
