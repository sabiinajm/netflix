import React, { createContext, useEffect, useState } from "react"
import { Cookies } from "react-cookie"

export const LIST = createContext(null)

function MyListContext({ children }) {
    const cookies = new Cookies()
    const [myList, setMyList] = useState(cookies.get("myList") || [])

    const handleAddToList = (item) => {
        setMyList((prevList) => {
            const updatedList = prevList.some((i) => i.id === item.id)
                ? prevList.filter((i) => i.id !== item.id)
                : [...prevList, item]
                return updatedList
            })
            cookies.set("myList", myList);
    }

    return (
        <LIST.Provider value={{ myList, handleAddToList }}>
            {children}
        </LIST.Provider>
    )
}

export default MyListContext