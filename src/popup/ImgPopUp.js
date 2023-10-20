import { useDispatch, useSelector } from "react-redux";
import popup, { Popup } from "reactjs-popup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActions, CardHeader } from "@mui/material";
import { closePopUp } from "../store/reducerSlices/popUpSlice";
import PopupLayout from "./popUpLayout";
const ImgPopUp = ({}) => {
  const { postData, isOpen } = useSelector((state) => state.imgPopUp);
  const dispatch = useDispatch();
  return (
    <div>
            <Popup open={isOpen}>
        <PopupLayout>
        {postData && (
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  sx={{ height: 280 }}
                  image={postData.urls.full}
                  title="green iguana"
                />
                <CardContent>
                  <CardHeader
                    avatar={
                      <Avatar
                        src={postData.user.profile_image.small}
                        aria-label="recipe"
                      ></Avatar>
                    }
                    title={postData.user.username}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {postData.alt_description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {postData.user.social.instagram_username && (
                      <p>
                        Instagram:@{postData.user.social.instagram_username}
                      </p>
                    )}

                    {postData.user.social.twitter_username && (
                      <p>Twitter:@{postData.user.social.twitter_username}</p>
                    )}
                  </Typography>
                </CardContent>
                <CardActions className=" m-5">
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(closePopUp())}
                    className="p-2"
                  >
                    close
                  </Button>
                </CardActions>
              </Card>
            )}
        </PopupLayout>
            </Popup>
      
    </div>
  );
};
export default ImgPopUp;
