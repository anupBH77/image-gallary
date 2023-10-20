import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImgSaver from "../utils/imgSaver";
import { useDispatch } from "react-redux";
import { setPopUpData } from "../store/reducerSlices/popUpSlice";

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const date = new Date(post.created_at);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader
        avatar={
          <Avatar
            src={post.user.profile_image.small}
            
            aria-label="recipe"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.username}
        subheader={formattedDate}
      />
      <AspectRatio ratio="4/3">
        <figure>
          <img
            className=" hover:cursor-pointer"
            onClick={() => {
              console.log("clicked");
              dispatch(setPopUpData(post));
            }}
            src={post.urls.raw}
            srcSet={post.urls.raw}
            alt={post.slug}
          />
        </figure>
      </AspectRatio>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.alt_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Favorite />}
          sx={{
            fontWeight: "md",
            ml: "auto",
            color: "text.secondary",
            "&:hover": { color: "danger.plainColor" },
          }}
        >
          {post.likes}
        </Link>
        <ImgSaver imgUrl={post.links.download} />
      </CardActions>
    </Card>
  );
}
