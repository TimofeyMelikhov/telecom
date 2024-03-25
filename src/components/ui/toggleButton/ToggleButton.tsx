import cn from 'clsx'

import { ITabs } from '../../../models/usersModel'

import classes from './toggleButton.module.scss'

interface IButtonProps {
	tab: ITabs
	viewMode: string
	onClick: () => void
}

export const ToggleButton = ({ onClick, tab, viewMode }: IButtonProps) => {
	return (
		<button
			className={cn(classes.mainButton, {
				[classes.mainButton_active]: viewMode === tab.tabLink
			})}
			onClick={onClick}
		>
			{tab.title}
		</button>
	)
}
