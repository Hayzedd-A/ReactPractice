import React, { useState } from "react";

function CopyToClipboard(props) {
  let [buttonText, setButtonText] = useState("Copy to clipboard");
  const copyToClipboard = () => {
    // Create a new textarea element
    console.log(props.color);
    const textarea = document.createElement("textarea");

    // Set the value of the textarea to the text to be copied
    textarea.value = props.color;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Show a success message on the button
    setButtonText("Copied successfully");
    setTimeout(() => {
      setButtonText("Copy to clipboard");
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "0.5em",
        borderRadius: "0.5em",
        border: "2px solid black",
        cursor: "pointer",
      }}
    >
      {buttonText}
    </button>
  );
}

export default CopyToClipboard;
