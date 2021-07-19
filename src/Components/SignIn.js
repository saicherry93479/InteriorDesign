import React from 'react'
import {TextField,Button,Typography,Card,CardContent} from  "@material-ui/core"
import {Link} from 'react-router-dom'
import useStyles from './SignInStyles.js'

function SignIn() {
    const classes=useStyles();
    return (
        <div style={{display:"flex",justifyContent:"center",height:"90vh"}}>
              <div className={classes.Home_Taker}> <Link to="/" className={classes.link}>Home</Link></div>
        <Card  className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography align="center" color="secondary">SigIn</Typography>
                <TextField variant="outlined" tupe="email" id="email" label="Email" margin="dense"  color="secondary"></TextField>
                <TextField variant="outlined" type="password" label="Password" id="password" required margin="dense" color="secondary"></TextField>
                <Button variant="outlined" color="secondary" className={classes.buttons}>signin</Button>
                <Typography variant="body1">If you dont' have account?  <Link to="/signup" className={classes.link}>SignUp</Link></Typography>
            </CardContent>
            
        </Card>
        </div>
    )
}

export default SignIn
