import React from 'react';

class Poki extends React.Component {
  componentDidMount() {
    console.log(`Poki ${this.props.pokemon.name}:  Mounts`);
  }
  
  render() {
      const { pokemon } = this.props;
      console.log(`Poki ${this.props.pokemon.name}: Renders`);
      return(
      <div key={pokemon.id} className="pokemon">
        <img src={pokemon.img} alt={pokemon.name} />
        <div>
          <h3>{pokemon.name}</h3>
          {pokemon.next_evolution &&
            pokemon.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
        </div>
      </div>);
  }
}

export default Poki;