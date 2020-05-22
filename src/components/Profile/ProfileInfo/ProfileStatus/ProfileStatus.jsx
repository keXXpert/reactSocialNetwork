import React, { useState } from 'react';
import myCSS from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(props.status);
    
    const activateEdit = () => {
        setEditMode(true);
    }
    const deactivateEdit = () => {
        setEditMode(false);
        props.updateUserStatus(localStatus);
    }

    const onStatusChange = (e) => {
        debugger;
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => (activateEdit())}>{!props.status ? 'No Status' : props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={() => (deactivateEdit())} value={!localStatus ? '' : localStatus} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;