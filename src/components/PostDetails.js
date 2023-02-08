import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

class PostDetails extends Component {
    render(props) {
        return (<Card className='ui container center aligned'>
            <p>postId:{this.props.post.postId}</p>
            <p>authorId:{this.props.post.writerId}</p>
            <p>titel:{this.props.post.titel}</p>
            <p>concent:{this.props.post.concent}</p>
            <p>lastUpdateDate:{''+ this.props.post.lastUpdateDate}</p>
        </Card>)
    }

}
const mapStateToProps = state => {
    return { post: state.selectedPost }
}
export default connect(mapStateToProps)(PostDetails);