import React, { createContext, useState } from 'react'
import user from '../assets/imgs/user.png'
import user1 from '../assets/imgs/user1.png'
export const PROFILES = createContext(null)

function ProfileContext({ children }) {
    const [profiles, setProfiles] = useState([
        {
            id: 1,
            name: 'Sabina',
            avatar: user
        },
    ])
    const [editingProfileId, setEditingProfileId] = useState(null)
    const [addProfile, setAddProfile] = useState(false)
    const [newProfile, setNewProfile] = useState({ name: '', avatar: user1 })
    const [edit, setEdit] = useState(false)
    const [originalProfile, setOriginalProfile] = useState(null)

    const handleProfileChange = (e) => {
        const { name, value } = e.target
        setProfiles((prev) =>
            prev.map((profile) =>
                profile.id === editingProfileId ? { ...profile, [name]: value } : profile
            )
        )
    }

    const handleSaveChanges = () => {
        setEdit(false)
        setEditingProfileId(null)
        setOriginalProfile(null)
    }

    const handleCancel = () => {
        if (originalProfile) {
            setProfiles((prev) =>
                prev.map((profile) =>
                    profile.id === editingProfileId ? originalProfile : profile
                )
            )
        }
        setEdit(false)
        setEditingProfileId(null)
        setOriginalProfile(null)
    }
    
    const handleAddNewProfile = () => {
        if (newProfile.name.trim()) {
            setProfiles([
                ...profiles,
                {
                    id: Date.now(),
                    name: newProfile.name,
                    avatar: newProfile.avatar || user1
                },
            ])
            setNewProfile({ name: '', avatar: user1 })
            setAddProfile(false) 
        }
    }

    const handleDeleteProfile = (profileId) => {
        setProfiles(profiles.filter(profile => profile.id !== profileId))
        setEdit(false)
        setEditingProfileId(null)
    }
    
    const [selectedProfile, setSelectedProfile] = useState(profiles[0]?.avatar || null)

    const handleProfileImageClick = (profileId) => {
        const selectedProf = profiles.find(profile => profile.id === profileId)
        setSelectedProfile(selectedProf?.avatar) 
        setOriginalProfile({...selectedProf})
        setEdit(true)
        setEditingProfileId(profileId)
    }
    return (
        <PROFILES.Provider 
        value={{
            profiles,
            addProfile,
            setProfiles,
            setAddProfile,
            newProfile,
            setNewProfile,
            editingProfileId,
            edit,
            handleProfileChange,
            handleSaveChanges,
            handleAddNewProfile,
            selectedProfile,
            handleDeleteProfile,
            handleProfileImageClick,
            handleCancel,
        }}>
            {children}
        </PROFILES.Provider>
    )
}

export default ProfileContext