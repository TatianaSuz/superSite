import { useEffect, useState, FC } from 'react';
import PostApi from '../utils/api/Post';
import { Posts } from '../utils/api/Post/types';

const Feed: FC = () => {
  const [posts, setPosts] = useState<Posts>([]);
  useEffect(() => {
    PostApi.getPosts().then(({ data }) => {
      setPosts(data);
    });
  }, []);
  const postsList = posts.map((post) => {
    const { body, id, title } = post;
    return (
      <section key={id}>
        <b> {title}</b>
        <article>{body}</article>
        <br />
        <hr />
      </section>
    );
  });

  return <div>{postsList}</div>;
};

export default Feed;
