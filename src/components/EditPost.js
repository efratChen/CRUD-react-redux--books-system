import { connect } from "react-redux";
import { saveEdit, cancleEdit } from '../actions';
import { Input, Card, Button } from 'semantic-ui-react'


const EditPost = (props) => {
    let postId = props.edit.postId;
    let writerId = props.edit.writerId;
    let titel = props.edit.titel;
    let concent = props.edit.concent;
    let lastUpdateDate = props.edit.lastUpdateDate;
    let save = () => {
        let post = { postId, writerId, titel, concent, lastUpdateDate };
        props.saveEdit(post);
    }
    return (<Card className="ui container center aligned">
        <h1>Edit post</h1>
        <p>   <Input type="number" placeholder={props.edit.writerId} onChange={(e) => { writerId = e.target.value }} /></p>
        <p>      <Input type="text" placeholder={props.edit.titel} onChange={(e) => { titel = e.target.value }} /></p>
        <p>     <Input type="text" placeholder={props.edit.concent} onChange={(e) => { concent = e.target.value }} /></p>
        <p>     <Input type="Date" placeholder={props.edit.lastUpdateDate} onChange={(e) => { lastUpdateDate = e.target.value }} /></p>
        <p> <div className="ui buttons">
            <Button className="ui button" onClick={save}>Save Changes </Button>
            <div className="or"></div>
            <Button className="ui positive button active" onClick={props.cancleEdit} >Cancel Changes </Button>
        </div></p>
        <p></p>
    </Card>);
}

const myMapStateToProps = (state) => {
    return { edit: state.postEdit }
}
export default connect(myMapStateToProps, { saveEdit, cancleEdit })(EditPost)

