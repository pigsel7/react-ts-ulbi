import React, { FC } from 'react'
import { IUser } from '../types/types';
import styles from './UserList.module.css'
import UserItem from './UserItem';


interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div className={styles.list}>
            {users.map(user => 
                <UserItem user={user} key={user.id} />
            )}
        </div>
    )
}

export default UserList;