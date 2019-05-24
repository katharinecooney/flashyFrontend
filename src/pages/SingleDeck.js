import React from 'react';

function SingleDeck (props) {
  const { userDeck } = props.location.state.groups;
  return (
    <div>
      <h1>One Deck</h1>
      {userDeck.map(deck => {
        return (<p>{deck.frontText}</p>);
      })}
    </div>
  );
}

export default SingleDeck;
