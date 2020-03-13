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
    tempItemUserId: this.props.user.id,
    tempItemId: "",
    isEditMode: false
  };

  onChange = (event, type) => {
    this.setState({ [type]: event.target.value })
  };

  onSubmit = () => {
    console.log('Looky here', this.state);
    if (this.state.isEditMode) {

      this.props.dispatch({
        type: 'EDIT_ITEM',
        payload: this.state
      })
      this.setState({
        tempItemDescription: "",
        tempItemImageUrl: "",
        tempItemId: "",
        isEditMode: false})
        console.log('new edits', this.state);
        
    }
    else {
      this.props.dispatch({
        type: 'POST_ITEM',
        payload: this.state
      })
    }
  };

  deleteItem = (data) => {
    this.props.dispatch({
      type: 'DELETE_ITEM',
      payload: data
    })
  }

  editItem = (data) => {
    this.setState({
      isEditMode: true,
      tempItemId: data
    });
console.log('logging end it mode', this.state.isEditMode);

  }

  render() {
    return (
      <div>
        Shelf Page
        <input label="Description" placeholder='Description' onChange={event => this.onChange(event, "tempItemDescription")}></input>
        <input label="Image Url" placeholder='Image Url' onChange={event => this.onChange(event, "tempItemImageUrl")}></input>
        <button onClick={this.onSubmit}>Submit</button>
        {this.props.item[0] ? (
          <ul>
            {this.props.item.map(thing => (
              <div key={thing.id} >
                <img alt='shelf item' src={thing.image_url} width='350px' />
                <li>{thing.description} <button onClick={() => this.deleteItem(thing.id)}>DELETE</button><button onClick={() => this.editItem(thing.id)}>EDIT</button></li>

              </div>
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