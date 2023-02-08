import './App.css';
import AddPost from './components/AddPost';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';
import Dialog from './components/Dailog';
import { connect } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, Button } from 'react-bootstrap';
// import 'semantic-ui-css/semantic.min.css'
// import { propTypes } from 'react-bootstrap/esm/Image';
import EditPost from './components/EditPost';
import { editPost } from './actions';
function App(props) {
  return (
    <div className="App">
      {props.dialog && <Dialog />}
      {props.edit && <EditPost />}
      <PostList /> 
       {props.post && <PostDetails />}
    
      <AddPost />
    </div>
  );
}

const myMapStateToProps = state => {

  return {
    dialog: state.ensureDeletingMessage,
    post: state.selectedPost,
    edit:state.postEdit
  }
}
export default connect(myMapStateToProps)(App);

