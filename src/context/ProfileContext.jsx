import React, { createContext, useState } from 'react';

export const PROFILES = createContext(null);

function ProfileContext({ children }) {
    const [profiles, setProfiles] = useState([
        {
            id: 1,
            name: 'Sabina',
            avatar: 'https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbFO1ZI9WDUXXCyi_QCEMIen2X1ICb04kRxJmp1mxZTKU6yF0NlEU3xBPMzvqHaturIrsjSS_S5JocdleY1N8-BYgDqy23sydeqH.png?r=8ff',
            language: 'English',
            gameHandle: '',
        },
    ]);
    const [editingProfileId, setEditingProfileId] = useState(null);
    const [addProfile, setAddProfile] = useState(false);
    const [newProfile, setNewProfile] = useState({ name: '', language: 'English', gameHandle: '' });
    const [edit, setEdit] = useState(false);

    const [originalProfile, setOriginalProfile] = useState(null);

    const handleImageClick = (profileId) => {
        const profileToEdit = profiles.find(profile => profile.id === profileId);
        setOriginalProfile(profileToEdit);
        setEditingProfileId(profileId);
        setEdit(true);
    };

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfiles(profiles.map(profile => {
            if (profile.id === editingProfileId) {
                return { ...profile, [name]: value };
            }
            return profile;
        }));
    };

    const handleSaveChanges = () => {
        setEdit(false);
        setEditingProfileId(null);
    };

    const handleCancel = () => {
        setProfiles(profiles.map(profile => {
            if (profile.id === editingProfileId) {
                return originalProfile;
            }
            return profile;
        }));
        setEdit(false);
        setEditingProfileId(null);
    };


    const handleAddNewProfile = () => {
        if (newProfile.name.trim()) {
            setProfiles([
                ...profiles,
                {
                    id: Date.now(),
                    ...newProfile,
                    avatar: 'https://occ-0-7292-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229',
                },
            ]);
            setNewProfile({ name: '', language: 'English', gameHandle: '' });
            setAddProfile(false);
        }
    };

    const handleDeleteProfile = (profileId) => {
        setProfiles(profiles.filter(profile => profile.id !== profileId));
        setEdit(false);
        setEditingProfileId(null);
    };

    return (
        <PROFILES.Provider value={{
            profiles,
            addProfile,
            setAddProfile,
            newProfile,
            setNewProfile,
            editingProfileId,
            edit,
            handleImageClick,
            handleProfileChange,
            handleSaveChanges,
            handleAddNewProfile,
            handleDeleteProfile,
            handleCancel
        }}>
            {children}
        </PROFILES.Provider>
    );
};

export default ProfileContext