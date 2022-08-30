import { store } from "../store/store"
import { actionGetOnePhoto } from "../store/promiseReducer"
import { Link } from "react-router-dom"

let Image = (props) => 
    <Link to={`/photo/${props.photo?.id}`} onClick={() => store.dispatch(actionGetOnePhoto(props.photo?.id))}>
        <div class="front" style={{background:`url(${props.photo.urls.small}) no-repeat center center/cover`}}>
            <div className="img-shadow">
                <h5 className="text-shadow">Author: {props.photo?.user?.username}</h5>
                <h5 className="text-shadow">Description: {props.photo?.description}</h5>
            </div>
        </div>
    </Link>


export let Images = (props) =>
    <div className='df'>
    {console.log(props.pics)}
        {props.pics.map((pic, i) => <Image key={i} photo={pic}/>)}
    </div>

    

