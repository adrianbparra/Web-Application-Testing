import { useState } from "react"

export const InputHook = initialValue => {
    const [value, setValue] = useState(initialValue)
    const handleChanges = updatedValue => {
        setValue(updatedValue)
    };
    return [value,setValue, handleChanges]
}