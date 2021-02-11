import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, Dropdown, FormControl } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu'

function Searchbar({ fetchGames }) {
	const [search, setSearch] = useState([])
	const [searchText, setSearchText] = useState('')
	const [isOpen, setIsOpen] = useState(true)
	const onSearch = e => setSearchText(e.currentTarget.value)

	useEffect(() => {
		fetchGames(searchText).then(result => setSearch(result))
		return () => {
			setSearch([])
		}
	}, [searchText, fetchGames])

	return (
		<InputGroup
			onBlur={() =>
				//TODO Fix lose focus and link conflict
				setTimeout(() => {
					setIsOpen(false)
				}, 200)
			}
			onFocus={() => setIsOpen(true)}
			className='mb-3'
		>
			<Dropdown show={isOpen}>
				<DropdownMenu>
					{search?.map((elm, idx) => (
						<Dropdown.Item key={idx} as={Link} to={`/read/${elm._id}`}>
							{elm.title}
						</Dropdown.Item>
					))}
				</DropdownMenu>
			</Dropdown>
			<FormControl value={searchText} onChange={onSearch} aria-describedby='basic-addon1' />
		</InputGroup>
	)
}

export default Searchbar
