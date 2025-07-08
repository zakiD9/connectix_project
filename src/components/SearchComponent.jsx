import Box from "@mui/material/Box";
import { useSearchStore } from "../store/searchStore";
import UserComponent from "./UserComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function SearchComponent(){
    const {results} =useSearchStore();
    return(
        <div className="p-2">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value="Results" aria-label="basic tabs example">
            <Tab label="Users" />
            <Tab label="Posts" />
            </Tabs>
        </Box>
            {results.map((user)=>(<UserComponent user={user}/>))}
        </div>
    )
}