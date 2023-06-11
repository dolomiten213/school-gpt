
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default function useToken() {
  
  const cookies = new Cookies();
  const [token, setTokenInner] = useState(cookies.get("jwt"));

  async function setToken() {
    try {
      const response = await axios.get(
        "http://192.168.15.179:6001/api/v1/gpt/"
      )
      const cookies = new Cookies();
      cookies.set("jwt", response.data);
      setTokenInner(response.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("jwt");
    setTokenInner(token)
  })

  return { token, setToken }
}
