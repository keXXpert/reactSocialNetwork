import React from 'react';
import myCSS from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEdit = () => {
        this.setState( {
            editMode: true
        });
    }
    deactivateEdit = () => {
        this.setState( {
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ () => (this.activateEdit())}>{!this.props.status? 'No status': this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ () => (this.deactivateEdit())}value={!this.state.status? 'No status': this.state.status} />
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;