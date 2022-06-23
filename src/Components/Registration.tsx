import {Box, Button, Paper, Typography} from '@mui/material'
import {useState} from 'react'
import InputField from './InputField'
import {EMAIL_REGEX, NAME_REGEX, PWD_DIGIT_REGEX, PWD_LOWER_REGEX, PWD_UPPER_REGEX} from '../config/constants'
import {paperStyle, signInStyle, signUpStyle} from './registrationStyles'
import {User} from '../models/User'
import ModalWindow from './ModalWindow'

export default function Registration() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPwd, setConfirmPwd] = useState<string>('')
    const [user, setUser] = useState<User | null>(null)
    const [openSuccess, setOpenSuccess] = useState<boolean>(false)

    function validateName(): string {
        let errMessage: string = ''
        if (name.length < 2 || name.length > 20) {
            errMessage = 'should be 2-20 characters long'
        } else if (!NAME_REGEX.test(name)) {
            errMessage = 'can only contain letters'
        }
        return errMessage
    }

    function validateEmail(): string {
        return EMAIL_REGEX.test(email) ? '' : 'email should be valid'
    }

    function validatePassword(): string {
        let errMessage: string = ''
        if (password.length < 8 || password.length > 20) {
            errMessage = 'should be 8-20 characters long'
        } else if (!PWD_UPPER_REGEX.test(password)) {
            errMessage = 'should contain at least one upper case letter'
        } else if (!PWD_LOWER_REGEX.test(password)) {
            errMessage = 'should contain at least one lower case letter'
        } else if (!PWD_DIGIT_REGEX.test(password)) {
            errMessage = 'should contain at least one digit'
        }
        return errMessage
    }

    function validateConfirmPwd(): string {
        return confirmPwd === password ? '' : 'must match the first password'
    }

    function saveUser() {
        setUser({name: name, email: email, password: password})
        setOpenSuccess(true)
    }

    return (
        <>
            <Paper elevation={15} sx={paperStyle}>
                <Typography color="#fff" variant="h4">
                    Registration
                </Typography>

                <InputField label={'Name'} value={name} setValue={setName} validate={validateName} type="text" />
                <InputField label={'Email'} value={email} setValue={setEmail} validate={validateEmail} type="email" />
                <InputField
                    label={'Password'}
                    value={password}
                    setValue={setPassword}
                    validate={validatePassword}
                    type="password"
                />
                <InputField
                    label={'Confirm Password'}
                    value={confirmPwd}
                    setValue={setConfirmPwd}
                    validate={validateConfirmPwd}
                    type="password"
                />

                <Button
                    variant="contained"
                    sx={signUpStyle}
                    onClick={saveUser}
                    disabled={!!validateName() || !!validateEmail() || !!validatePassword() || !!validateConfirmPwd()}>
                    Sign Up
                </Button>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography color="white">Already have an account?</Typography>
                    <Button variant="text" sx={signInStyle}>
                        Sign In
                    </Button>
                </Box>
            </Paper>
            <ModalWindow
                open={openSuccess}
                handleClose={() => setOpenSuccess(false)}
                title={'Registration Successful'}
                text={`user with email ${user?.email} registered`}
            />
        </>
    )
}
