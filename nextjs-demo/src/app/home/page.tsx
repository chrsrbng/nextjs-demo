import axios, { AxiosResponse } from "axios";

export async function getTodos() {
  const result: AxiosResponse = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return {
    props: {
      todo: result.data,
    },
  };
}

export default function Home(props) {
  console.log("getTodos", props.todo);
  return (
    <>
      <h1>This is a Home Page</h1>
    </>
  );
}
