import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" size="18px" margin="0 7px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" size="21px" margin="0 0 0 0" />
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
