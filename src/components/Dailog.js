import { connect } from "react-redux";
import { deletePost, cancleDelete } from '../actions';
import { Input, Card, Button } from 'semantic-ui-react'

const Dialog = (props) => {
    return (<>
    <Card className="ui container center aligned"> <Card.Header> Are you sure you want to delete this topic {props.post.tite}?</Card.Header>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green' onClick={() => { props.deletePost(props.post.postId) }}>
                    Delete
                </Button>
                <Button basic color='red' onClick={props.cancleDelete} >
                    Cancle
                </Button>
            </div>
        </Card.Content></Card>

    </>);
}

const myMapStateToProps = state => {
    return { post: state.ensureDeletingMessage }
}
export default connect(myMapStateToProps, { deletePost, cancleDelete })(Dialog);