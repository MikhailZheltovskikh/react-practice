import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input onChange={onChange} value={searchPhrase} placeholder="Поиск по заголовкам..."/>
			<Icon id="fa-search" size="21px" inactive={true}/>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	position: relative;
	display: flex;
	width: 320px;
	height: 40px;
	margin: 40px auto 0;

	& > input {
	padding: 10px 32px 10px 10px;
	}

	& > div {
	position: absolute;
    top: 6px;
    right: 9px;
	}
`;