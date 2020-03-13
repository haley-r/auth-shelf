import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  render() {
    
    return (
      <div>
        <p>
          Shelf Page
    {JSON.stringify(this.props.item)}
          <ul>
            
            {this.props.item[0] ?
            <p>hello</p>
            :
              <>
                {this.props.item.map(shelfItem =>
                  <li key= {shelfItem.id}>
                    <img src={shelfItem.image_url} />
                  </li>)} 
                </>  
             }
          </ul>
        </p>
      </div>
    )
  }
}
const mapStateToProps = reduxState => ({
  item: reduxState.item,
});

export default connect(mapStateToProps)(InfoPage);