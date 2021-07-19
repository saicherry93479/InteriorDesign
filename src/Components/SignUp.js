import React from 'react'
import {TextField,Button,Typography,Card,CardContent} from  "@material-ui/core"
import {Link} from 'react-router-dom'
import useStyles from './SignInStyles.js'
function SignUp() {
    const classes=useStyles();
    return (
        <div style={{display:"flex",justifyContent:"center",height:"90vh"}}>
            <div className={classes.Home_Taker}> <Link to="/" className={classes.link}>Home</Link></div>
           <Card  className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography align="center" color="secondary">SigUp</Typography>
                <TextField variant="outlined" tupe="text"  label="Name" margin="dense"  color="secondary"></TextField>
                <TextField variant="outlined" tupe="email" id="email" label="Email" margin="dense"  color="secondary"></TextField>
                <TextField variant="outlined" type="password" label="Password"   margin="dense" color="secondary"></TextField>
                <TextField variant="outlined" type="password" label="confirm Password"   margin="dense" color="secondary"></TextField>
                <Button variant="outlined" color="secondary" className={classes.buttons}>signup</Button>
                <Typography variant="body1">If you  have account?  <Link to="/signin" className={classes.link}>SignIn</Link></Typography>
            </CardContent>
            </Card>
            
        </div>
    )
}

export default SignUp
