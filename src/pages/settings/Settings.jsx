import './settings.scss'
import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import { styled } from '@mui/material/styles'
import MuiAlert from '@mui/material/Alert'
import TableCell from '@mui/material/TableCell'

import TableRow from '@mui/material/TableRow'

import {
  Button,
  InputLabel,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import EnhancedTable from '../../Components/Table/EnhancedTable'

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',

  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Settings = () => {
  const dispatch = useDispatch()
  const [nbMonths, setNbMonths] = useState(localStorage.getItem('nbMonths'))
  const [nbRows, setNbRows] = useState(localStorage.getItem('nbRows'))
  const [message, setMessage] = useState({ text: '', severity: 'warning' })
  const [showSnackbar, setShowSnackbar] = useState(false)
  var isRealData = useSelector((state) => state.isRealData)
  const handleClose = (event, reason) => {
    setShowSnackbar(false)
  }

  const handleNbMonths = () => {
    if (nbMonths < 2 || nbMonths > 12) {
      setShowSnackbar(true)
      setMessage({
        severity: 'error',
        text: 'Number of months must be between 2 and 12',
      })
    } else {
      setShowSnackbar(true)
      setMessage({
        severity: 'success',
        text: 'Saved',
      })
      dispatch({ type: 'nbMonths', nbMonths: nbMonths })
    }
  }

  const handleNbRows = () => {
    if (nbRows > 12 || nbRows < 1) {
      setShowSnackbar(true)
      setMessage({
        severity: 'error',
        text: 'Number of rows must be between 1 and 12',
      })
    } else {
      setShowSnackbar(true)
      setMessage({
        severity: 'success',
        text: 'Saved',
      })
      dispatch({ type: 'nbRows', nbRows: nbRows })
    }
  }

  return (
    <div className="settings">
      <Sidebar />
      <div className="settContainer">
        <Navbar />
        <Snackbar open={showSnackbar} autoHideDuration={6000}>
          <Alert
            onClose={handleClose}
            severity={message.severity}
            sx={{ width: '100%' }}
          >
            {message.text}
          </Alert>
        </Snackbar>
        <Stack sx={{ padding: 5 }} spacing={3}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography>Fake Data</Typography>
            <AntSwitch
              onChange={(event, checked) => {
                dispatch({ type: 'dataSource', isRealData: checked })
                if (checked) {
                  setShowSnackbar(true)
                  setMessage({
                    severity: 'warning',
                    text: 'DataBase not ready yet for real data',
                  })
                } else {
                  setShowSnackbar(true)
                  setMessage({
                    severity: 'success',
                    text: 'Saved',
                  })
                }
                setTimeout(() => {
                  window.location.reload()
                }, 800)
              }}
              defaultChecked={isRealData == 'true' || isRealData == true}
              inputProps={{ 'aria-label': 'ant design' }}
            />
            <Typography>Real Data</Typography>
          </Stack>
          <Stack
            spacing={3}
            width={500}
            direction={'row'}
            justifyContent="space-between"
          >
            <Typography>Number of rows :</Typography>
            <TextField
              sx={{
                background: 'white',
                width: '150px',
              }}
              variant="outlined"
              label="Number of rows"
              type={'number'}
              fullWidth={false}
              value={nbRows}
              onChange={(e) => {
                setNbRows(parseInt(e.target.value))
              }}
            />
            <Button
              onClick={handleNbRows}
              size="large"
              variant="contained"
              color="success"
            >
              Confirm
            </Button>
          </Stack>

          <Stack
            spacing={3}
            width={500}
            direction={'row'}
            justifyContent="space-between"
          >
            <Typography>Number of Months</Typography>
            <TextField
              sx={{
                background: 'white',
                width: '150px',
              }}
              id="nbMonths"
              variant="outlined"
              label="Number of months"
              type={'number'}
              fullWidth={false}
              value={nbMonths}
              onChange={(e) => {
                setNbMonths(parseInt(e.target.value))
              }}
            />
            <Button
              onClick={handleNbMonths}
              size="large"
              variant="contained"
              color="success"
            >
              Confirm
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
  )
}

export default Settings
