import { createContext, useContext, ReactNode } from 'react';
import { PostType } from '../../types/postType';

const PostContext = createContext({} as PostType);

export function PostProvider({
  children,
  postProps, // Pass postProps to children
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
