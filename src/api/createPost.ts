import { PostType } from '../types/postType';
import { baseUrl } from '../utils/baseUrl';
import toast from 'react-hot-toast';

export default async function createPost(
  data: FormData
): Promise<PostType | void> {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + jwt,
      },
      body: data,
    });

    if (response.status == 400) {
      const { error } = await response.json();

      toast.error(error.message);
      return;
    }

    const { post } = await response.json();

    return post;
  } catch (error) {
    console.error(error);
    throw new Error('Could not create post!');
  }
}
