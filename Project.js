import React ,{useEffect} from "react";
import { useParams } from 'react-router-dom';
function Project() {
    const parameters = useParams();
    useEffect(() => {

    } , [parameters])
  return (
    <div>
        <h1>the Major Projects are {parameters.user}</h1>
    </div>
  )
}

export default Project