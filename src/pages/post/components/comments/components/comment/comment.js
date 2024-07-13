import { Icon } from '../../../../../../components';
import styled from 'styled-components';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="autor">
						<Icon id="fa-user-circle-o" size="21px" margin="0 10px 0 0" />
						{author}
					</div>
					<div className="publishedAt">
						<Icon id="fa-calendar-o" size="21px" margin="0 10px 0 0" />
						{publishedAt}
					</div>
				</div>
				<div className="content-text">{content}</div>
			</div>
			<Icon id="fa-trash-o" size="21px" margin="0 0 0 10px" />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 20px;

	& .comment {
		width: 100%;
		padding: 5px 10px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .autor {
		display: flex;
		align-items: center;
	}

	& .publishedAt {
		display: flex;
		align-items: center;
	}
`;
