import {useState} from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Switches({label, checked, onChange}) {

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} color="primary" />}
        label={label}
		labelPlacement="top"
      />
    </FormGroup>
  );
}