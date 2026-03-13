import { use } from "react"
import User from "./user";

export default function Users({ usersPromise }) {
    const users = use(usersPromise);
    
    return (
        <div>
            <h2>Company Details</h2>

            {
                users.map(user => <User key={user.id} user = {user}></User>)
            }
        </div>
    )
}