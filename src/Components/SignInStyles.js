import { makeStyles} from '@material-ui/core/Styles'

const useStyles=makeStyles({
   card:{
      position:"relative",
      height:"fit-content",
      top:"20vh"

   },
    cardContent:{
        display:"flex",
        flexDirection:"column"
        
    },
   
    Home_Taker:{
        position:"absolute",
        top:"2vh",
        left:"2vw"

    },
    link:{
        textDecoration:"none",
        color:"crimson"
    },buttons:{
        margin:"20px"
    }

})
export default useStyles;