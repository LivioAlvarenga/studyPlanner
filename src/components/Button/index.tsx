import React from "react";

class Button extends React.Component<{ children: string; hover?: string | undefined }> {
  render() {
    const hoverColor = this.props.hover ?? "hover:bg-neutral-900";
    return (
      <button
        className={` self-center justify-self-center rounded-xl bg-neutral-800 px-6 py-3 text-xl tracking-wider text-white shadow-md duration-500  ease-in-out  hover:px-9  hover:shadow-neutral-800 ${hoverColor}`}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
