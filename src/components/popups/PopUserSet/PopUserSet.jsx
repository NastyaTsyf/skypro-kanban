import { Link } from 'react-router-dom';
import * as S from './PopUserSet.Styled';
import { appRoutes } from '../../../lib/appRoutes';
function PopUserSet() {
	return (<S.HeaderPopUserSet id="user-set-target">
		<S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
		<S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
		<S.PopUserSetTheme>
			<p>Темная тема</p>
			<input type="checkbox" className="checkbox" name="checkbox"></input>
		</S.PopUserSetTheme>
		<Link to={appRoutes.EXIT}>
			<span className="_hover03">Выйти</span>
		</Link>
	</S.HeaderPopUserSet>
	)
}

export default PopUserSet