/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, NewComment, Input, Buttons, Button } from "./style";
import Comment from "./Comment/Comment";
import axios from "axios";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { API_URL } from "../../Global";
axios.defaults.withCredentials = true;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");

  const fetchComments = async () => {
    try {
      const res = await axios.get(`${API_URL}/comments/${videoId}`);
      setComments(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const PostComments = async () => {
    try {
      await axios.post(
        `${API_URL}/comments/`,
        {
          desc,
          videoId,
        },
        { headers: { Authorization: localStorage.getItem("Authorization") } }
      );
      fetchComments();
      setDesc("");
    } catch (err) {}
  };

  return (
    <Container>
      <NewComment>
        <Avatar
          src={`${currentUser?.user?.img}`}
          sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}>
          {currentUser?.user?.name?.charAt(0)}
        </Avatar>
        <Input
          placeholder='Add a comment...'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </NewComment>
      <Buttons>
        <Button onClick={PostComments}>Comment</Button>
      </Buttons>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
