import { Stack } from "@mui/material";
import { categoryList } from "../../constants/categoryList";
import { colors } from "../../constants/colors";

const Category = ({categoryHandler, category}) => {
    return (
        <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
            {categoryList.map(item =>(
                <button
                onClick={() => categoryHandler(item.name)} 
                style={{borderRadius: '0', background: item.name === category && colors.secondary}} 
                className="category-button" 
                key={item.name}
                >
                    <span style={{color: colors.primary}}>{item.icon}</span>
                    <span style={{opacity: '1', color: item.name === category && colors.primary}}>{item.name}</span>
                </button>
            ))}
        </Stack>
    );
} 
export default Category;