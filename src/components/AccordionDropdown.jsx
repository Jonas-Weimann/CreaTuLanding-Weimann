import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import  {FormGroup}  from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export default function AccordionDropdown({title, options, selected=[], onFilterChange}) {
    const handleCheckboxChange = (event, option) => {
        const isChecked = event.target.checked
        const nuevosFiltros = isChecked
        ? [...selected, option]
        : selected.filter((filter) => filter !== option)
        onFilterChange(nuevosFiltros)
    }
  return (
      <Accordion sx={{bgcolor:"primary.main", width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color='secondary'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='options-container'>
            <FormGroup>
            {options.map(option =>(
                <FormControlLabel 
                  key={option}
                  sx={{ color: "pink.light", fontFamily:"alata", height:"2.5rem", fontSize:"1rem" }}
                  label={option}                              
                  control={<Checkbox
                              onChange={(event)=> handleCheckboxChange(event, option)} 
                              sx={{color: 'primary','&.Mui-checked': {color: 'secondary.main'}}}
                              checked={selected.includes(option)}
                              />}
                />  
            ))}
            </FormGroup>
        </div>
        </AccordionDetails>
      </Accordion>
  )
}