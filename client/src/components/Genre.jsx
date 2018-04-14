import React from 'react';

class Genre extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      items: null
    };
  }
  
  render() {
    return (
        <option>{this.props.genre.name}</option>
    );
  }

}
// export default VideoPlayer;

// const Genre = ({genre}) => {
//   return  <option>{genre.name}</option>
// }

export default Genre