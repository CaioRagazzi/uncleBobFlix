import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function SnackBar(props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={props.open}
      autoHideDuration={3000}
      onClose={props.atClose}
      message="Favor preencher todos os campos"
      action={(
        <>
          <IconButton size="small" aria-label="close" color="inherit" onClick={props.atClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
        )}
    />
  );
}

export default SnackBar;
