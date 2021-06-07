import {
  Card, 
  CardActions, 
  CardContent, 
  Typography,
  Grid,
  Box,
} from '@material-ui/core/';


import Checkin from '@material-ui/icons/Add';
import Checkout from '@material-ui/icons/IndeterminateCheckBox';
import Edit from '@material-ui/icons/Create';


export default function Vaga(props){
  
  return(
    <Grid item key={props.idVaga} >
      <Box mt={5} border={2}  borderRadius="borderRadius"  borderColor={props.vazia ? "limegreen" : "error.main"}>
        <Card style={{width:'140px',height:'120px'}} >
          <CardContent>
            {
              props.placaOcupante ? 
              <Typography >
                Placa: {props.placaOcupante}
              </Typography>
              :
              <Box mt={1}>
                <Typography >
                  Vaga {props.numeroVaga}
                </Typography>
              </Box>
            }
            
          </CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" mt={props.vazia ? 0 : -2}>
            <CardActions >
              {
                props.vazia ? 
                <>
                  <Checkin color="primary" fontSize="large" style={{cursor:'pointer'}}/>
                </> :
                <>
                  <Checkout style={{marginRight:'17px',cursor:'pointer'}} color="secondary" fontSize="large"/>
                  <Edit fontSize="large" style={{cursor:'pointer'}}/>
                </>
              }
            </CardActions>
          </Box>
        </Card>
      </Box>
    </Grid>
  )
}