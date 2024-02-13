import * as S from './PopUserSet.Styled';
function PopUserSet() {
	return (<S.HeaderPopUserSet id="user-set-target">
		<S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
		<S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
		<S.PopUserSetTheme>
			<p>Темная тема</p>
			<input type="checkbox" className="checkbox" name="checkbox"></input>
		</S.PopUserSetTheme>
		<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
	</S.HeaderPopUserSet>
	)
}

export default PopUserSet