import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios"

class RoleForm extends React.Component {
  state={
      open:false,
      local: "",
      dono: "",
      cat: "",
      desc: "",
      capacidade: "",
      qnt: 1
      
  }

  handleClickOpen = () => {
    this.props.bool ? this.setState({open: true}) : axios.patch("https://jiji-backend.herokuapp.com/api/roles",{_id:this.props.id})
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleBora = () => {
    const {nome, categoria} = this.props
    const {dono, capacidade, desc} = this.state
    var role = {
      dono: dono,
      capacidade: capacidade,
      desc: desc,
      local: nome,
      cat: categoria,
      qnt: 1
    }
    console.log(role)
    axios({
      method: 'POST',
      url: "https://jiji-backend.herokuapp.com/api/roles",
      data: role
  })
    this.setState({open:false})
  }
  render(){
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={()=>this.handleClickOpen()}>
        {this.props.bool ? ("Marcar Role!"): ("Quero ir!")}
      </Button>
      <Dialog open={this.state.open} onClose={()=>this.handleClose()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo Role</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bem vindo a criação de roles, entre com o que você espera fazer e quantos parças vão fazer com você.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="dono"
            label="Seu nome"
            type="text"
            fullWidth
            
            onChange={(e) => {this.setState({dono:e.target.value})}}
            value={this.state.dono}
          />

          <TextField
            autoFocus
            margin="dense"
            id="desc"
            label="Descreva o seu role"
            type="text"
            fullWidth
            
            onChange={(e) => {this.setState({desc:e.target.value})}}
            value={this.state.desc}
          />

          <TextField
            autoFocus
            margin="dense"
            id="capacidade"
            label="Você e mais quantos?"
            type="number"
            max="10"
            
            onChange={(e) => {this.setState({capacidade:e.target.value})}}
            value={this.state.capacidade}

            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>this.handleClose()} color="primary">
            nah
          </Button>
          <Button onClick={()=>this.handleBora()} color="primary">
            Bora!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
}

export default RoleForm