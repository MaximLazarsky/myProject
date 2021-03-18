import {TextField, Button} from '@material-ui/core';

export default function AddUpdateEmployeeForm() {
    return(
    <form>
         <TextField
            label="Name"
            variant="outlined"
        />
        <TextField
            label="Surname"
            variant="outlined"
        />
        <TextField
            label="Position"
            variant="outlined"
        />
        <TextField
            label="Expiriense"
            variant="outlined"
        />
    </form>
    )
}