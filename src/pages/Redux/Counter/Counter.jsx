import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchPosts } from "./counterSlice";
export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const posts = useSelector((state) => state.counter.posts);
  const postFetchStatus = useSelector((state) => state.counter.postFetchStatus);
  const postFetchError = useSelector((state) => state.counter.postFetchError);
  const dispatch = useDispatch();

  // console.log("posts ==> ",posts)
  console.log("postFetchStatus ==> ",postFetchStatus)
  //  console.log("postFetchError ==> ",postFetchError)
  return (
    <>
      <div className="flex gap-2 items-center my-2">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 border rounded"
        >
          Inc count
        </button>

        <div>Counter :{count}</div>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 border rounded"
        >
          Dec count
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(fetchPosts())}>Fetch posts</button>
        {postFetchStatus === "loading" ? <p>Loading ...</p> : null}
        {postFetchStatus === "error" ? (
          <p>
            {`Error !
          ${postFetchError}`}
          </p>
        ) : null}

        {postFetchStatus === "success" ? (
          <ul>
          
            {posts[0].map((post)=>{
              return (<li key={post.id}>{post.title}</li>)
            })}

          </ul>
        ) : null}
      </div>
    </>
  );
};
