import {TextField} from '@mui/material'
import {ChangeEvent, useEffect, useState} from 'react'
import debounce from 'lodash.debounce'

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

    const debouncedSetValue = debounce((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value), 500)

    useEffect(() => {
        setErrMessage(validate)
    }, [value])

    return (
        <>
            <TextField
                required
                error={!!errMessage}
                onChange={debouncedSetValue}
                variant="filled"
                label={label}
                helperText={errMessage}
                type={type}
                autoComplete="new-password"
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                }}
            />
        </>
    )
}
