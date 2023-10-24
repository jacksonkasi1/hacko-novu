export interface Post {
  u_id: string;
  post_id: string;
  title: string;
  slug: string;
  content: string;
  published_date: string;
  likes: { u_id: string }[];
  dislikes: { u_id: string }[];
}

export const posts: Post[] = [
  {
    u_id: "a123",
    post_id: "1",
    title: "Building a chat app with NextJS and Novu",
    slug: "building-a-chat-app-with-nextjs-and-novu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infan",
    published_date: "27-07-2023",
    likes: [{ u_id: "12345" }, { u_id: "ancsd" }],
    dislikes: [{ u_id: "12345" }],
  },
  {
    u_id: "b123",
    post_id: "2",
    title: "How to create a ecommerce app with NextJS and Novu ",
    slug: "how-to-create-a-ecommerce-app-with-nextjs-and-novu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infan",
    published_date: "27-07-2023",
    likes: [{ u_id: "12345" }],
    dislikes: [{ u_id: "12345" }],
  },
];
