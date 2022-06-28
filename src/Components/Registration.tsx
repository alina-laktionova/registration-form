import {Box, Button, Paper, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import InputField from './InputField'
import {EMAIL_REGEX, NAME_REGEX, PWD_DIGIT_REGEX, PWD_LOWER_REGEX, PWD_UPPER_REGEX} from '../config/constants'
import {paperStyle, RedTooltip, signInStyle, signUpStyle} from './styles/registrationStyles'
import {User} from '../models/User'
import ModalWindow from './ModalWindow'

export default function Registration() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPwd, setConfirmPwd] = useState<string>('')
    const [user, setUser] = useState<User | null>(null)
    const [openSuccess, setOpenSuccess] = useState<boolean>(false)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true)

    function validateName(): string {
        if (!name) return ''

        let errMessage: string = ''
        if (name.length < 2 || name.length > 20) {
            errMessage = 'should be 2-20 characters long'
        } else if (!NAME_REGEX.test(name)) {
            errMessage = 'can only contain English letters'
        }
        return errMessage
    }

    function validateEmail(): string {
        if (!email) return ''

        return EMAIL_REGEX.test(email) ? '' : 'email should be valid'
    }

    function validatePassword(): string {
        if (!password) return ''

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
        if (!confirmPwd) return ''

        return confirmPwd === password ? '' : 'must match the first password'
    }

    function saveUser() {
        setUser({name: name, email: email, password: password})
        setOpenSuccess(true)
    }

    useEffect(() => {
        setIsDisabledBtn(
            !name ||
                !email ||
                !password ||
                !confirmPwd ||
                !!validateName() ||
                !!validateEmail() ||
                !!validatePassword() ||
                !!validateConfirmPwd()
        )
    }, [name, email, password, confirmPwd])

    return (
        <>
            <Paper elevation={15} sx={paperStyle}>
                <Typography color="#fff" variant="h4" textAlign="center">
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

                <RedTooltip
                    title="Please fill in all fields for registration"
                    arrow
                    open={showTooltip}
                    onClose={() => setShowTooltip(false)}
                    sx={{
                        '&.MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
                            marginTop: '7px',
                        },
                    }}
                    onOpen={() => isDisabledBtn && setShowTooltip(true)}>
                    <span>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={signUpStyle}
                            onClick={saveUser}
                            disabled={isDisabledBtn}>
                            Sign Up
                        </Button>
                    </span>
                </RedTooltip>

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
