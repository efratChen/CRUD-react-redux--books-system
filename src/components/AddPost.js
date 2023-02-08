import { connect } from "react-redux";
import { addPost } from '../actions';
import { Input } from 'semantic-ui-react'

const AddPost = (props) => {
    let postId;
    let writerId;
    let titel;
    let concent;
    let lastUpdateDate;
    const createPost = () => {
        lastUpdateDate = new Date();
        let newPost = { postId, writerId, titel, concent, lastUpdateDate }
        console.log(newPost);
        props.addPost(newPost);
    }
    return (<div>
        <h1>Add post</h1>
        <Input type="number" placeholder="postId" onChange={(e) => { postId = e.target.value }} />
        <Input type="number" placeholder="writerId" onChange={(e) => { writerId = e.target.value }} />
        <Input type="text" placeholder="titel" onChange={(e) => { titel = e.target.value }} />
        <Input type="text" placeholder="content" onChange={(e) => { concent = e.target.value }} />
        <Input type="button" value="add" onClick={createPost} />
    </div>);
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps, { addPost })(AddPost);