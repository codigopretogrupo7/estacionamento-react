import { 
  Box,
  Card,
  CardContent,
  Grid
 } from '@material-ui/core'
 import { Link } from 'react-router-dom';


export default function MiniEstacionamento( props ){
  return(
    <Grid xs={12} sm={12} md={6} lg={4} >
      <Box m={2} >
        <Card >
          <Link style={{textDecoration:"none", color:"black"}} to="/EstacionamentoEspecifico">
            <Box display="flex" p={2}>
              <Box >
                <img
                  src={require(`${props.imagem}`).default}
                  title="Live from space album cover"
                  width="250px"
                  height="170px"
                  style={{borderRadius:"4%"}}
                  alt="Foto do estacionamento"
                  />
              </Box>

              <CardContent>
                <Box mt={3}>
                  <p>
                    {props.nome}
                  </p>
                </Box>

                  <Box mt={3}>
                    <p>
                      {props.Endereco}
                    </p>
                    <p>
                      {props.estado}
                    </p>
                  </Box>
              </CardContent>
            </Box>
          </Link>
        </Card>
      </Box>
    </Grid>
  )
}