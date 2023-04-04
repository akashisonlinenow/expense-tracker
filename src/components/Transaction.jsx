import { ListItem, ListItemText, styled } from '@mui/material'
import React from 'react'

const Detail = styled(ListItem)`
  margin-top: 10px;
`

const Transaction = ({ transaction }) => {

  const color = transaction.amount > 0 ? 'Green' : 'Red';

  return (
    <Detail style={{ background: `${color}`, color: '#fff' }}>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  )
}

export default Transaction