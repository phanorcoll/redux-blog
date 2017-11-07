import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/fetch_posts.jsx';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return _.map(this.props.posts, post =>{
            return(
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);