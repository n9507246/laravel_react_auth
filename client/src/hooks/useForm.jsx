import { useRef } from 'react'
export default function(){
    const fromRefs = {}
    const getFormData = () => {
        const formData = {}
        for(const name in fromRefs) formData[name] = fromRefs[name].current.value
        return formData
    }
    const setFormField = (name) => {return fromRefs[name] = useRef() }
    return {getFormData, setFormField}
}