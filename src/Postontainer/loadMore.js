import { Button } from "@mui/joy";


export default function LoadMore({onClick}){
    return(<Button className=" m-2" sx={
        {margin:2}
    } onClick={onClick}>
        More
    </Button>)
}