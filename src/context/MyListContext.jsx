import React, { createContext, useState } from "react"

export const LIST = createContext(null)

function MyListContext({ children }) {
    const [myList, setMyList] = useState([])

    const handleAddToList = (item) => {
        setMyList((prevList) => {
            const updatedList = prevList.some((i) => i.id === item.id)
                ? prevList.filter((i) => i.id !== item.id)
                : [...prevList, item]
            console.log("Updated List:", updatedList)
            return updatedList
        })
    }

    return (
        <LIST.Provider value={{ myList, handleAddToList }}>
            {children}
        </LIST.Provider>
    )
}

export default MyListContext