import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  state = {
    tempItemDescription: "",
    tempItemImageUrl: "",
    tempItemUserId: this.props.user.id
  };

  onChange = (event, type) => {
    this.setState({ [type]: event.target.value })
  };

  onSubmit = () => {
    console.log('Looky here', this.state);
    this.props.dispatch({
      type: 'POST_ITEM',
      payload: this.state
    });
  };

  deleteItem = (data) => {
    this.props.dispatch({
      type: 'DELETE_ITEM',
      payload: data
    })
  }

  render() {
    return (
      <div>
        Shelf Page
        <input placeholder="description" onChange={event => this.onChange(event, "tempItemDescription")}></input>
        <input placeholder="earl" onChange={event => this.onChange(event, "tempItemImageUrl")}></input>
        <button onClick={this.onSubmit}>Submit</button>
        {this.props.item[0] ? (
          <ul>
            {this.props.item.map(thing => (
              <>
                <img src={thing.image_url} width='350px' />
                <li>{thing.description} <button onClick={() => this.deleteItem(thing.id)}>DELETE</button></li>

              </>
            ))}
          </ul>
        ) : (
            <p>No Data</p>
          )}
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
  item: reduxState.item, user: reduxState.user
});

export default connect(mapStateToProps)(InfoPage);