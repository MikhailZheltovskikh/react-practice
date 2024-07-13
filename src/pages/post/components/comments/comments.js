import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../action';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const requestServer = useServerRequest();

	const [newComment, setNewComment] = useState('');

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('')
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				/>
				<Icon
					id="fa-paper-plane-o"
					size="18px"
					margin="0 0 0 10px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
			<div></div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 560px;
	margin: 20px auto 0;

	& .new-comment {
		display: flex;
	}

	& .new-comment textarea {
		display: block;
		width: 100%;
		height: 120px;
		resize: none;
		padding: 10px;
		font-size: 16px;
	}
`;
