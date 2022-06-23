import {TextField} from '@mui/material'
import {ChangeEvent, useEffect, useState} from 'react'

type Props = {
    label: string
    value: string
    setValue: (value: string) => void
    validate: () => string
    type: 'password' | 'email' | 'text'
}

export default function InputField(props: Props) {
    const {label, value, setValue, validate, type} = props
    const [errMessage, setErrMessage] = useState<string>('')

    useEffect(() => {
        setErrMessage(validate)
    }, [value])

    return (
        <>
            <TextField
                required
                error={value ? !!errMessage : false}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                variant="filled"
                label={label}
                helperText={value ? errMessage : ''}
                type={type}
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                }}
            />
        </>
    )
}
