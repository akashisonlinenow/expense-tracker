import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'

const Transactions = ({ transactions }) => {
    return (
        <Box>
            <Typography variant='h5'> Transactions History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <p> hello</p>
                    ))
                }
            </List>
        </Box>
    )
}

export default Transactions