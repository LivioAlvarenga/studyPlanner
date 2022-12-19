import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className=" self-center justify-self-center rounded-xl bg-neutral-800 px-6 py-3 text-xl tracking-wider text-white shadow-md duration-500  ease-in-out hover:bg-neutral-900 hover:px-9  hover:shadow-neutral-800">
        Adicionar
      </button>
    );
  }
}

export default Button;
