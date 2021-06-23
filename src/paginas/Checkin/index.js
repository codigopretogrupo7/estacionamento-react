import { 
  Button,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Container,
  Box
} from '@material-ui/core/'
import { Link } from 'react-router-dom';



export default function Checkin(){
  return(

    <Container fixed style={{textAlign: 'left'}}>
      <Box mt={5}>
        <form>
          <Grid container spacing={6} >
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="nome">Nome</InputLabel>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  />
              </FormControl>
            </Grid>
          
          
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="sobrenome">Sobrenome</InputLabel>
                <Input
                  id="sobrenome"
                  name="sobrenome"
                  type="text"
                  />
              </FormControl>
            </Grid>
          
        
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="Telefone">Telefone</InputLabel>
                <Input
                  id="Telefone"
                  name="Telefone"
                  type="text"
                  />
              </FormControl>
            </Grid>
        
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="Modelo">Modelo</InputLabel>
                <Input
                  id="Modelo"
                  name="Modelo"
                  type="text"
                  />
              </FormControl>
            </Grid>
          
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="Cor">Cor</InputLabel>
                <Input
                  id="Cor"
                  name="Cor"
                  type="text"
                  />
              </FormControl>
            </Grid>
          
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="Placa">Placa</InputLabel>
                <Input
                  id="Placa"
                  name="Placa"
                  type="text"
                  />
              </FormControl>
            </Grid>
          
            <Grid item xs={12} md={12}>
              <FormControl fullWidth >
                <InputLabel htmlFor="Vaga">Vaga</InputLabel>
                <Input
                  id="Vaga"
                  name="Vaga"
                  type="text"
                  />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant="contained" color="primary">
                <Link to="/Vagas" style={{color:"white", }}>
                  Check-in
                </Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}