import Player from "./Player"
import Players from "./Players"

const PlayerList = () => {
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    };
  
    return (
      <div style={containerStyle}>
        {Players.map((player, index) => (
          <Player
            key={index}
            {...player}  // Spread operator to pass in all props
          />
        ))}
      </div>
    );
  };

export default PlayerList
