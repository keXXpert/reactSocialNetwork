import React, { useState, useEffect } from 'react';
import myCSS from './ProfileStatus.module.css';

const ProfileStatus = ({status, updateUserStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);
    
    useEffect(() => {
        setLocalStatus(status)
    },[status])

    const activateEdit = () => {
        setEditMode(true);
    }
    const deactivateEdit = () => {
        setEditMode(false);
        updateUserStatus(localStatus);
    }

    const onStatusChange = (e) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => (activateEdit())}>{!status ? 'No Status' : status}</span>
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