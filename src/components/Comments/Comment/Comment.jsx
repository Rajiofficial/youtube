import React, { useEffect, useState } from "react";
import { Container, Details, Name, Text, Date } from "./style";
import axios from "axios";
import { format } from "timeago.js";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { API_URL } from "../../../Global";
axios.defaults.withCredentials = true;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`${API_URL}/users/find/${comment?.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);
  return (
    <Container>
      <Avatar
        src={`${channel?.img}`}
        sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}>
        {channel?.name?.charAt(0)}
      </Avatar>
      <Details>
        <Name>
          {channel.name} <Date>{format(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
