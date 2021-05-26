import { useCallback, useState } from "react";
import axios from "axios";
import { useMessage } from "./useMessage";

export const useAllPosts = () => {
  const {showMessage} = useMessage()
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const getPosts = useCallback(()=> {
    setLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        setPosts(res.data)
      })
      .catch(()=>{
        showMessage({title: "データー取得に失敗しました", status: "error"})
      })
      .finally(()=> {
        setLoading(false)
      })
  },[])
  return { getPosts, loading, posts }
}

export default useAllPosts;