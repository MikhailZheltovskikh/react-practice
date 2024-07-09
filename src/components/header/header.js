import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Discription = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии <br />
			Написание кода <br />
			Разбор ошибок
		</Discription>
		<ControlPanel/>
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-content: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background: #fff;
	box-shadow: 0 -2px 17px #000;
`;
