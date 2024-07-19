import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id="fa-calendar-o"
								size="18px"
								margin="0 7px 0 0 "
								inactive="true"
							/>
							{publishedAt}
						</div>
						<div className="comments">
							<Icon
								id="fa-comment-o"
								size="18px"
								margin="0 7px 0 0 "
								inactive="true"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;
	border: 1px solid #000;
	overflow: hidden;

	& img {
		display: block;
	}

	& h4 {
		margin: 0;
	}

	& .post-card-footer {
		padding: 5px;
		border-top: 1px solid #000;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .comments {
		display: flex;
		align-items: center;
	}
`;
