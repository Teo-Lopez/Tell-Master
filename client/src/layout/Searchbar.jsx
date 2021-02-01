import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from './Select'
import { Link } from 'react-router-dom'

const SearchBar = styled.span`
	display: flex;
`
function Searchbar({ cb }) {
	const [search, setSearch] = useState([])
	const [searchText, setSearchText] = useState('')

	const onSearch = text => setSearchText(text)

	useEffect(() => {
		cb(searchText).then(result => setSearch(result))
		return () => {
			setSearch([])
		}
	}, [searchText, cb])

	return (
		<SearchBar>
			<Select onSearch={onSearch}>
				{search.map(game => (
					<li aria-selected className='dropdown__select-option' role='option'>
						<Link to={`/read/${game._id}`}>{game.title}</Link>
					</li>
				))}
			</Select>
		</SearchBar>
	)
}

export default Searchbar
