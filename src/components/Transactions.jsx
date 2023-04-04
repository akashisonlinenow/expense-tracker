import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
    return (
        <Box>
            <Typography variant='h5'> Transactions History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction} />
                    ))
                }
            </List>
        </Box>
    )
}

export default Transactions