import { useParams } from "react-router-dom";

const Profile = function() {
    const params = useParams();
    return(
        <div>
            <h1>Profile Page</h1>
            {params ? <h2>{params.name}</h2> : ""}
        </div>
    )
}

export default Profile;