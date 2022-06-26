import {styled, Tooltip, tooltipClasses, TooltipProps} from '@mui/material'

export const paperStyle = {
    width: '400px',
    height: 'fit-content',
    backgroundColor: '#353477',
    padding: '30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin: '20px',
}

export const signUpStyle = {
    backgroundColor: '#77b2f1',
    height: '55px',
    fontSize: '18px',
    color: '#000',
    '&:hover': {
        backgroundColor: '#4f65ba',
        color: '#fff',
    },
    '&.Mui-disabled': {
        backgroundColor: '#586289',
        color: '#000',
    },
}

export const signInStyle = {
    color: '#fff',
    '&:hover': {
        backgroundColor: '#4f65ba',
    },
}

export const RedTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#a13838',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#a13838',
    },
}))
