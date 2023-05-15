import style from './Title.module.css';

export const Title = ({ myStyles = null, children }) => {
	return (
		<h2 className={style.title} style={myStyles}>
			{children}
		</h2>
	)
}