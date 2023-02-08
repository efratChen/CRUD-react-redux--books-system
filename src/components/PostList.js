import { connect } from "react-redux";
import { selectedForDeleting, selectPost, postEdit } from "../actions";
import '../components/PostList.css';
import { Card, Button } from 'semantic-ui-react'

const PostList = (props) => {
    return (<>
        {props.arr.map((item) => {
            return (<Card onClick={() => props.selectPost(item)}>{item.titel + '      '}
                {item.concent}
                <Card.Header>fff </Card.Header>
                <Card.Content extra>
                    <div className='ui two buttons'>  
                    <Button type="button" basic color='green'  onClick={() => { props.postEdit(item) }} > Edit</Button>
                    <Button type="button" basic color='red'  onClick={() => { props.selectedForDeleting(item) }} > Delete</Button>
                </div> </Card.Content></Card>)
        })}
   </>);
}

const myMapStateToProps = (state) => {
    return {
        arr: state.postList,
        post: state.selectPost
    }
}

export default connect(myMapStateToProps, { selectPost, selectedForDeleting, postEdit })(PostList);
