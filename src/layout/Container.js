import React from "react";

const Container = props => {
  return <div className={ (props.add ? props.add+' ' : '') + 'rounded mx-auto max-w-4xl' }>{props.children}</div>
}

export default Container;