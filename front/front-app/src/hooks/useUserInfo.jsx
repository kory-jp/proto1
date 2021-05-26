import { useCallback, useState } from "react";
import axios from "axios";
import { useMessage } from "./useMessage";

export const useUserInfo = (userId) => {
  const {showMessage} = useMessage()
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  const getUserInfo = useCallback(()=> {
    setLoading(true)
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res)=>{
        setUserInfo(res.data)
      })
      .catch(()=>{
        showMessage({title: "データー取得に失敗しました", status: "error"})
      })
      .finally(()=> {
        setLoading(false)
      })
  },[showMessage, userId])
  return { getUserInfo, loading, userInfo }
}

export default useUserInfo;