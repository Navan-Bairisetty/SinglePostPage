import React from 'react';

function Reply(props) {
  function handleClick() {
    props.fn(props.user);
  }
  return (
    <p
      style={{
        fontSize: '14px',
        borderStyle: 'none',
        padding: '0px',
        marginTop: '0px',
        marginBottom: '3px',
      }}
      onClick={handleClick}
      id='reply'
    >
      Reply
    </p>
  );
}

export default Reply;
