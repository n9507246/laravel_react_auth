import { useRef, useState } from 'react'
export default function(){
    const [err, setError] = useState([])
    const fromRefs = {}
    const getData = () => {
        const formData = {}
        for(const name in fromRefs) formData[name] = fromRefs[name].current.value
        return formData
    }
    const getDataByName = (name) => fromRefs[name] = useRef()
    const getErrorByName  = (errorName) => err[errorName] !== undefined ? err[errorName][0] : undefined

    return { getData, setError, getDataByName, getErrorByName

    }
}