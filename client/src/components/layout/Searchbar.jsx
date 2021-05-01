import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, Dropdown, FormControl } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu'

function Searchbar({ fetchGames }) {
	const [search, setSearch] = useState([])
	const [searchText, setSearchText] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const onSearch = e => setSearchText(e.currentTarget.value)

	useEffect(() => {
		fetchGames(searchText).then(result => setSearch(result))
		return () => {
			setSearch([])
		}
	}, [searchText, fetchGames])

	return (
		<InputGroup
			onBlur={e => {
				//TODO Fix lose focus and link conflict
				setIsOpen(false)
			}}
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
			<FormControl
				placeholder='Busca tu nueva historia favorita'
				style={{ backgroundColor: 'rgb(225, 225, 225)' }}
				value={searchText}
				onChange={onSearch}
				aria-describedby='basic-addon1'
			/>
		</InputGroup>
	)
}

export default Searchbar
