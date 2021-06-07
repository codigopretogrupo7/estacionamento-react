import { 
  Grid, 
  FormControl, 
  InputLabel, 
  Input, 

} from '@material-ui/core/'

export default function FormularioVeiculo(props){
  return(
    <>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth >
          <InputLabel htmlFor={"modelo"+props.numero}>Modelo {props.numero}</InputLabel>
          <Input
            id={"modelo"+props.numero}
            name={"modelo"+props.numero}
            type="text"
            />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth >
          <InputLabel htmlFor={"cor"+props.numero}>Cor</InputLabel>
          <Input
            id={"cor"+props.numero}
            name={"cor"+props.numero}
            type="text"
            />
        </FormControl>
      </Grid>
      <Grid item xs={9} md={3}>
        <FormControl fullWidth >
          <InputLabel htmlFor={"placa"+props.numero}>Placa</InputLabel>
          <Input
            id={"placa"+props.numero}
            name={"placa"+props.numero}
            type="text"
            />
        </FormControl>
      </Grid>
    </>
  )
}