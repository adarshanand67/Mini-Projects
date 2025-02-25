import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  // json-server --watch .\data\db.json --port 3001
  // useFetch
  let { blogs, isLoading } = useFetch("http://localhost:3001/blogs");
  // console.log(blogs);
  // console.log(isLoading);
  // let blogs = [
  //   {
  //     title: "blog 1",
  //     body: "this is blog 1",
  //     author: "author 1",
  //     id: 1,
  //   },
  //   {
  //     title: "blog 2",
  //     body: "this is blog 2",
  //     author: "author 2",
  //     id: 2,
  //   },
  //   {
  //     title: "blog 3",
  //     body: "this is blog 3",
  //     author: "author 3",
  //     id: 3,
  //   }
  // ];
  // let isLoading = false;

  return (
    <div className="home">
      {isLoading && <div>IsLoading ⏳ </div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
