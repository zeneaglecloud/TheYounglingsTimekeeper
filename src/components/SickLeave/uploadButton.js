import React, { Component } from 'react';
import firebase from '../../config/fbConfig';

class File extends Component {
    
    state = {
          docs: null,
          url: "",
          progress: 0
    }
    
      handleChange = e => {
        if (e.target.files[0]) {
          const docs = e.target.files[0];
          this.setState(() => ({ docs }));
        }
      };
    
      handleUpload = () => {
        const { docs } = this.state;
        const uploadTask = firebase.storage().ref(`images/${docs.name}`).put(docs);
        uploadTask.on(
          "state_changed",
          snapshot => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
          },
          error => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            firebase
              .storage()
              .ref("images")
              .child(docs.name)
              .getDownloadURL()
              .then(url => {
                this.setState({ url });
              });
          }
        );
      };
    render() {
        return (
            <div className="center">
                 <div className="row">
                   <progress value={this.state.progress} max="100" className="progress" />
                  </div>
                 <br/>
                 <input type="file" onChange={this.handleChange} />
                 <button onClick={this.handleUpload}
                         className="waves-effect waves-light btn">
                         Upload
                    </button>
            </div>
        )
    }
}

export default File;
