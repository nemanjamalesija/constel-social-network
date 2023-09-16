import { createContext, useContext, ReactNode } from 'react';
import { PostType } from '../../types/postType';

const PostContext = createContext({} as PostType);

export function PostProvider({
  children,
  postProps, // Receive the postProps from the parent component
}: {
  children: ReactNode;
  postProps: PostType;
}) {
  return (
    <PostContext.Provider value={postProps}>{children}</PostContext.Provider>
  );
}

export function usePost() {
  return useContext(PostContext);
}
