import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../services/api'

export const DATA = createContext(null)

function DataContext({ children }) {
    // const [category, setCategory] = useState(null)
    const [data, setData] = useState([])
    // const [discounted, setDiscounted] = useState(null)


    useEffect(() => {
        getData().then(res => setData(res))
    }, [])

    return (
        <DATA.Provider value={{
            data, setData
        }}>
            {children}
        </DATA.Provider>
    )
}

export default DataContext