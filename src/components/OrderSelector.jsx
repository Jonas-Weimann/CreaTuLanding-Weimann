import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ onOrderChange, order }) {
  const handleChange = (event) => {
    onOrderChange(event.target.value);
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        minWidth: 180,
        width: "10%",
        borderRadius: "2rem",
      }}
    >
      <FormControl fullWidth className="form-container">
        <InputLabel
          id="order-select-label"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "alata",
            background: "#13032b",
            borderRadius: "1rem",
            padding: "0px 9px",
            position: "absolute",
            top: -10,
          }}
        >
          Ordenar por
        </InputLabel>
        <Select
          className="select-dropdown"
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 250,
              },
            },
            disableScrollLock: true,
          }}
          sx={{
            color: "#ff20e1",
            fontFamily: "alata",
            fontSize: "1.2rem",
            borderRadius: "2rem",
            height: "2.5rem",
            border: "2px #ff20e1 solid",
          }}
          labelId="order-select-label"
          id="order-select"
          value={order || "Novedades"}
          label="Ordenar por"
          onChange={handleChange}
        >
          <MenuItem sx={{ fontFamily: "alata" }} value={"Novedades"}>
            Novedades
          </MenuItem>
          <MenuItem sx={{ fontFamily: "alata" }} value={"Menor precio"}>
            Menor precio
          </MenuItem>
          <MenuItem sx={{ fontFamily: "alata" }} value={"Mayor precio"}>
            Mayor precio
          </MenuItem>
          <MenuItem sx={{ fontFamily: "alata" }} value={"Más valorados"}>
            Más valorados
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
