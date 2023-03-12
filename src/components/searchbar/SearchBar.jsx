import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault()
        if(value){
            navigate(`/search/${value}`)
            setValue('')
        }
    }
    return (
        <Paper
        component={'form'}
        sx={{border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none'}}
        onSubmit={submitHandler}
        >
            <input value={value} className="search-input" type="text" placeholder="Search..." onChange={e => setValue(e.target.value)}/>
            <IconButton type="submit">
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;