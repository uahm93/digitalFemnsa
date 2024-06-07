"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

    if(!password){
      setIsPalindrome(false);
      setMessageAlert("Campo requerido")
      return 
    }

    const reverseString = password.split("").reverse().join("");

    if (password === reverseString) {
      setIsPalindrome(true);
      setMessageAlert("Tu contraseña es palíndromo")
    } else {
      setIsPalindrome(false);
      setMessageAlert("Tu contraseña no es palíndromo")
    }

    setShowAlert(true);
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Cambiar contraseña
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          {"Cambiar contraseña"}
        </DialogTitle>
        <DialogContent
          sx={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            m: "20px",
            justifyContent: "center",
          }}
        >
          {showAlert && (
            <Alert severity={isPalindrome ? "success" : "error"}>
              {messageAlert}
            </Alert>
          )}
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            onChange={(e) => setPassword(event.target.value.toLowerCase())}
            sx={{ mt: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: "10px" }}
            onClick={() => handleSubmit()}
          >
            Guardar
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
