import { Button, Card, CardActions, TextField, } from '@mui/material'
import React from 'react'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import logoLogin from '../assets/profile-authentication.png'
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="h-[100vh] bg-slate-100 flex justify-center items-center">
            <Card sx={{ width: "500px", height: "500px" }} className='flex flex-col justify-center items-center gap-5 px-5 shadow-md'>
                <img src={logoLogin} alt="Logo" className=' max-w-[80px] max-h-[80px]' />
                <div className=' text-3xl font-semibold'>Authentication</div>
                <TextField required label="Email" fullWidth sx={{ maxWidth: 400 }} />
                <TextField required label="Password" type='password' fullWidth sx={{ maxWidth: 400 }} />
                <CardActions>
                    <Button sx={{ fontSize: "15px" }} variant="contained" disableElevation color="secondary" endIcon={<LockPersonIcon />}>
                        Sign In
                    </Button>
                </CardActions>
                <div className='flex flex-row gap-3 text-md text-slate-500'>
                    <div>Don't have an account?</div>
                    <Link to={"/SignUp"}>
                        <div className=' text-[#9c27b0]'>Sign Up</div>
                    </Link>
                </div>
            </Card>
        </div>

    )
}

export default LoginPage