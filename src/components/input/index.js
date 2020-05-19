import React from "react";
import "./index.css";
import { usePersistentState } from "../../libs/usePersistentState";

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     this.handleClick();
//   }

//   handleKeyDown(e) {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   }

//   handleClick() {
//     this.props.renderListItem(this.state.text);
//     this.setState({ text: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           placeholder={"Enter a shopping item"}
//           value={this.state.text}
//           onChange={this.handleChange.bind(this)}
//           onKeyDown={this.handleKeyDown.bind(this)}
//         ></input>
//         <button className="button" onClick={() => this.handleSubmit()}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

function Input({ renderListItem }) {
  const [input, setInput] = usePersistentState("", "input_text");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    console.log(`You've added: ${input} to your shopping list`);
    renderListItem(input);
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div>
      <input
        placeholder={"Enter a shopping item"}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button className="button" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
}

export default Input;

// return an input field
// return a save input button
// input field should have a state that is something like an empty string at first
// use setState to change the text to what's in the input field
// .... look up how to extract data from the input field
// render data to a li on handleChange
//
// list will live in the App.js as it needs to communciate with delete and listitem and input field
// hand down function to App which allows us to create an li
