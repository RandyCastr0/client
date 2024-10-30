import { TextField, Paper, Button } from '@mui/material';

const Form = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <form
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <TextField sx={{ m: 1 }} variant="outlined" label="Input Field" />
        <TextField sx={{ m: 1 }} variant="outlined" label="Another Field" />
        <input type="file" style={{ width: '97%', margin: '10px 0' }} />
        <Button sx={{ mb: 2 }} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;