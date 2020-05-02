import React from "react";
import client from "../contentful";
import Title from "../components/Title";
import Content from "../components/Content";
import Image from "../components/Image";
import Post from "../components/Post";
import Date from "../components/Date";

const Home = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "post",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);

  return (
    posts &&
    posts.map((post, i) => {
      const fullDate = post.sys.createdAt;
      const splittedDate = fullDate.split("T");
      const date = splittedDate[0];

      return (
        <Post>
          <Title>{post.fields.title}</Title>
          <Date>Skapad: {date}</Date>
          <Content>{post.fields.content.content[0].content[0].value}</Content>
          <Image>{post.fields.image.fields.file.url}</Image>
        </Post>
      );
    })
  );
};

export default Home;
