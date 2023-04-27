import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Container } from "./style";
import axios from "axios";
import { API_URL } from "../../Global";
axios.defaults.withCredentials = true;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`${API_URL}/videos/${type}`, {
        headers: { Authorization: localStorage.getItem("Authorization") },
      });
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
