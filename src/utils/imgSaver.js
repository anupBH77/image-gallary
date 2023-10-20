import { saveAs } from "file-saver";
import Link from "@mui/joy/Link";
import DownloadIcon from '@mui/icons-material/Download';

const ImgSaver = ({ imgUrl }) => {
    const downloadImage = () => {
        saveAs(imgUrl, 'image.jpg') // Put your image URL here.
      }
  return (
    <div onClick={downloadImage}>
      <Link
        
        level="body-xs"
        underline="none"
        startDecorator={<DownloadIcon />}
        sx={{
          fontWeight: "md",
          ml: "auto",
          color: "text.secondary",
          "&:hover": { color: "primary.plainColor" },
        }}
      ></Link>
    </div>
  );
};
export default ImgSaver;
