import { IUsers } from '../../models/usersModel'

interface IUserProps {
	user: IUsers
}

export const UserItem = ({ user }: IUserProps) => (
	<div
		style={{
			border: '1px solid #ccc',
			padding: '10px',
			margin: '5px',
			width: '200px'
		}}
	>
		<div>Имя: {user.name}</div>
		<div>Возраст: {user.age}</div>
		<div>Email: {user.email}</div>
	</div>
)
