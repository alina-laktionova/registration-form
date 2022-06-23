import {Box, Modal, Typography} from '@mui/material'

type Props = {
    open: boolean
    handleClose: () => void
    title: string
    text: string
}

export default function ModalWindow(props: Props) {
    const {open, handleClose, title, text} = props

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'fit-content',
                    backgroundColor: '#a5e8bd',
                    borderRadius: '5px',
                    boxShadow: 24,
                    padding: '30px',
                }}>
                <Typography variant="h6" color="#043f0e">
                    {title}
                </Typography>
                <Typography sx={{mt: 2}} color="#043f0e">
                    {text}
                </Typography>
            </Box>
        </Modal>
    )
}
