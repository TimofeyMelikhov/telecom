import { useState } from 'react'

import { ToggleButton } from '../../components/ui/toggleButton/ToggleButton'
import { UserList } from '../../components/userList/UserList'

import classes from './mainPage.module.scss'

export const MainPage = () => {
	const [viewMode, setViewMode] = useState('list')

	const users = [
		{ id: 1, name: 'Иван', age: 30, email: 'ivan@mail.ru' },
		{ id: 2, name: 'Мария', age: 25, email: 'maria@yandex.ru' },
		{ id: 3, name: 'Петр', age: 35, email: 'petr@gmail.com' },
		{ id: 4, name: 'Елена', age: 28, email: 'elena@inbox.com' }
	]

	const tabs = [
		{
			title: 'Список',
			tabLink: 'list'
		},
		{
			title: 'Плитка',
			tabLink: 'tiles'
		}
	]

	return (
		<div className={classes.container}>
			<div className={classes.container__buttonsBlock}>
				{tabs.map(tab => (
					<ToggleButton
						onClick={() => setViewMode(tab.tabLink)}
						tab={tab}
						viewMode={viewMode}
					/>
				))}
			</div>

			<div className={classes.container__usersTable}>
				<UserList users={users} viewMode={viewMode} />
			</div>
		</div>
	)
}
