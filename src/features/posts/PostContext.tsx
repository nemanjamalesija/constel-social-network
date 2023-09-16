import { createContext, useContext, ReactNode } from 'react';
import { Post } from '../../types/postType';

const PostContext = createContext({} as Post);

export function PostProvider({
  children,
  postProps, // Receive the postProps from the parent component
}: {
  children: ReactNode;
  postProps: Post;
}) {
  return (
    <PostContext.Provider value={postProps}>{children}</PostContext.Provider>
  );
}

export function usePost() {
  return useContext(PostContext);
}
