import { useEffect, useState } from 'react';
import { H2, PrivateContent } from '../../components';
import { TableRow, UserRow } from './conponents';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { ROLE } from '../../constants';
import { checkAccess } from '../../utils/check-access';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';

const UserContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const userRole = useSelector(selectUserRole);

	const requestServer = useServerRequest();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registedAt-column">Дата регистрации</div>
						<div className="roleId-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UserContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 570px;
	margin: 0 auto;
	font-size: 18px;
`;
