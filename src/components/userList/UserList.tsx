import { IUsers } from '../../models/usersModel'
import { UserItem } from '../userItem/UserItem'

import classes from './userList.module.scss'

interface IUserListProps {
	users: IUsers[]
	viewMode: string
}

export const UserList = ({ users, viewMode }: IUserListProps) => {
	const renderListMode = () => (
		<table className={classes.listMode}>
			<thead>
				<tr>
					<th className={classes.listMode_border}>Имя</th>
					<th className={classes.listMode_border}>Возраст</th>
					<th className={classes.listMode_border}>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<tr key={user.id}>
						<td className={classes.listMode_border}>{user.name}</td>
						<td className={classes.listMode_border}>{user.age}</td>
						<td className={classes.listMode_border}>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	)

	const renderTileMode = () => (
		<div className={classes.tileMode}>
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	)

	return viewMode === 'list' ? renderListMode() : renderTileMode()
}
