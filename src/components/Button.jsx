import React from 'react'

export default function Button(props) {

    const handleclick = () => {
        console.log("click");
    };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleclick}>{props.text}</button>
    </div>
  )
}
