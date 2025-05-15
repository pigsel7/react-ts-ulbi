import React, {FC} from "react";
import styles from "./UserItem.module.css"
import { IUser } from "../types/types";


interface UserItemProps{
    user: IUser;
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.name} проживает в городе {user.address.city} на
            улице {user.address.sreet}
        </div>
    );
}

export default UserItem;