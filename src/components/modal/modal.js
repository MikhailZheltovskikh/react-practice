import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if(!isOpen){
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay">
				<div className="box">
					<h3>{text}</h3>
					<div className="buttons">
						<Button width="120px" onClick={onConfirm}>
							Да
						</Button>
						<Button width="120px" onClick={onCancel}>
							Отмена
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;

	& .overlay {
		background: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .box {
		padding: 40px;
		width: 400px;
		background: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& .buttons {
		display: flex;
		column-gap: 20px;
	}

	& h3 {
		margin-top: 0;
	}
`;
