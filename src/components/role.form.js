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
      role:{
        local: "",
        dono: "",
        cat: "",
        desc: "",
        capacidade: "",
        qnt: 1
      }
  }

  handleClickOpen = () => {
    this.props.bool ? this.setState({open: true}) : alert("Beleza, bora")
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleBora = () => {
    var role = this.state.role;

    axios.post("https://jiji-backend.herokuapp.com/api/roles",{...role})
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
            value={this.state.role.desc}
            autoFocus
            margin="dense"
            id="desc"
            label="Descreva o seu role"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="capacidade"
            label="Pessoal esperado"
            type="number"
            max="10"
            
            onChange={(e) => { this.setState(prev => ({ role: { ...prev.role, capacidade: e } })) }}
            value={this.state.role.capacidade}

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