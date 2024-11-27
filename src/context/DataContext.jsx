import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData, getTv } from '../services/api'

export const DATA = createContext(null)
export const TV = createContext(null)

function DataContext({ children }) {
    const [tv, setTv] = useState([])
    const [data, setData] = useState([])
    // const [discounted, setDiscounted] = useState(null)


    useEffect(() => {
        getData().then(res => setData(res))
    }, [])
    useEffect(() => {
        getTv().then(res => setTv(res))
    }, [])

    return (
        <DATA.Provider value={{ data, setData }}>
            <TV.Provider value={{ tv, setTv }}>
                {children}
            </TV.Provider>
        </DATA.Provider>
    )
}

export default DataContext