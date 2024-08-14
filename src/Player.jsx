import styled from 'styled-components';

const Card = styled.div`
width: 200px;
height: 273px;
margin: 10px;
border: 1px solid gold;
border-radius: 8px;
background: gold;

img {
width: 200px;
height: 120px;
}
`;

const Player = ({ name, position, nationality, shirtNumber, age, height, imageUrl }) => {
  return (
    <Card>
       <img src={imageUrl} alt={name}  />
        <h3>{name}</h3>
        <div>Pos:{position}</div>
        <div>nat:{nationality}</div>
        <div>num:{shirtNumber}</div>
        <div>height:{height}</div>
        <div>age:{age}</div>
    </Card>
  );
};

export default Player;


