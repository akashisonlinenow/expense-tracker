import { Box, Button, TextField, Typography, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    &>h5, &>div, &>Button{
        margin-top: 30px;
    }
`

const NewTransactions = () => {
    return (
        <Container>
            <Typography variant='h5'>New Transactions</Typography>
            <TextField label='Enter Expense' />
            <TextField label='Enter Amount' />
            <Button variant='contained'>Add Transactions</Button>
        </Container>
    )
}

export default NewTransactions