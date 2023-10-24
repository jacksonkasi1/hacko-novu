export const formatDate = (): string => {
  const date: Date = new Date();
  const day: string = String(date.getDate()).padStart(2, "0");
  const month: string = String(date.getMonth() + 1).padStart(2, "0");
  const year: number = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const addNewPost = (
  u_id: string,
  title: string,
  content: string,
  date: string,
  navigate: () => void,
): void => {
  fetch("http://localhost:4000/post/add", {
    method: "POST",
    body: JSON.stringify({ u_id, title, content, date }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res: Response) => res.json())
    .then((data: { message: string }) => {
      alert(data.message);
      console.log(data);
      navigate("/");
    })
    .catch((err: Error) => {
      console.error(err);
      alert("Encountered an error ❌");
    });
};

export const fetchPostContent = (
  slug: string,
  setLoading: (loading: boolean) => void,
  setPost: (post: any) => void,
): void => {
  fetch("http://localhost:4000/post/details", {
    method: "POST",
    body: JSON.stringify({ slug: slug }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res: Response) => res.json())
    .then((data: { post: any }) => {
      setLoading(false);
      setPost(data.post);
    })
    .catch((err: Error) => console.error(err));
};

export const postReaction = (slug: string, type: string): void => {
  fetch("http://localhost:4000/post/react", {
    method: "POST",
    body: JSON.stringify({ slug, type, u_id: localStorage.getItem("u_id") }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res: Response) => res.json())
    .then((data: { message: string }) => alert(data.message))
    .catch((err: Error) => console.error(err));
};

export const fetchAllPosts = (
  setLoading: (loading: boolean) => void,
  setPosts: (posts: any) => void,
): void => {
  fetch("http://localhost:4000/posts")
    .then((res: Response) => res.json())
    .then((data: { posts: any }) => {
      setLoading(false);
      setPosts(data.posts);
    })
    .catch((err: Error) => console.error(err));
};
