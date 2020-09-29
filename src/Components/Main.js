import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import Single from '../Components/Single';

class Main extends Component {
  state = { loading: true };
  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }
  render() {
    return (
      <div>
        <Link
          to={process.env.PUBLIC_URL + '/'}
          style={{ textDecoration: 'none' }}
          to='/'>
          <Title title={'PhotoWall'} />
        </Link>

        <Route
          path={process.env.PUBLIC_URL + '/'}
          exact
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path={process.env.PUBLIC_URL + '/AddPhoto'}
          exact
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path={process.env.PUBLIC_URL + '/single/:id'}
          render={(params) => (
            <Single {...this.props} loading={this.state.loading} {...params} />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
