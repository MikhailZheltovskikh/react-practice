import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../action';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate(`/`);
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" size="18px" margin="0 7px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="21px"
					margin="0 0 0 0"
					onClick={() => onPostRemove(id)}
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	font-size: 18px;

	& .published-at {
		display: flex;
		align-items: center;
	}

	& i {
		position: relative;
		top: -2px;
	}

	& .buttons {
		display: flex;
		align-items: center;
	}
`;
