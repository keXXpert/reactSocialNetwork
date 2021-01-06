import React, { useState, useEffect } from 'react';
// import myCSS from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ status, updateUserStatus }) => {
    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const activateEdit = () => {
        setEditMode(true);
    }
    const deactivateEdit = () => {
        setEditMode(false);
        updateUserStatus(localStatus);
    }

    const onStatusChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(evt.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={() => (deactivateEdit())} value={localStatus || ''} />
                </div>
                : <div>
                    <span onDoubleClick={() => (activateEdit())}>{status || 'No Status'}</span>
                </div>}
        </div>
    )
}

export default ProfileStatus;