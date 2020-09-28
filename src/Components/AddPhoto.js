import React, { Component } from 'react';

class AddPhoto extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      imageLink,
      description,
    };

    if (description && imageLink) {
      this.props.startAddingPost(post);

      this.props.onHistory.push('/');
    }
  }

  render() {
    return (
      <div>
        <div className='form'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' name='link' placeholder='Link' />
            <input type='text' name='description' placeholder='Description' />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
