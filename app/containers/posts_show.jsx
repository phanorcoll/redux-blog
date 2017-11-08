import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/fetch_single_post.jsx';
import { deletePost } from '../actions/delete_post.jsx';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchSinglePost(id);
        }
    }

    onDeleteClick = () => {
        const { id } = this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading!!</div>
        }

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <div className="text-right">
                    <button
                        className="btn btn-danger "
                        onClick={this.onDeleteClick}
                    >
                        Delete Post</button>
                </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>
                    {post.content}
                </p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostsShow);