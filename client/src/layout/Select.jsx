import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const Dropdown = styled.div`
	.search-input {
		margin: -14px 0;
		height: 30px;
		width: 100%;
		label,
		label input {
			height: 100%;
			width: 100%;
			border: none;
			border-radius: 5px;
			background-color: rgba(30, 30, 30);
			color: white;

			&:focus {
				outline: none;
			}
		}
	}

	.dropdown {
		height: 38px;
		/* position: absolute;
    top: 50%;
    left: 50%; */
		/* transform: translateX(-50%) translateY(-50%); */
		/* padding: 20px; */
		background-color: black;
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
		width: 300px;
		font-family: 'Lato', sans-serif;

		.dropdown__switch:checked {
			color: red;
		}
		.dropdown__switch:checked + .dropdown__options-filter .dropdown__select {
			transform: scaleY(1);
			color: red;
		}

		.dropdown__switch:checked + .dropdown__options-filter .dropdown__filter:after {
			transform: rotate(-135deg);
		}

		.dropdown__options-filter {
			width: 100%;
			cursor: pointer;

			ul {
				z-index: 9999;
				background-color: black;
				list-style: none;
				color: white;
				li {
					background-color: black;
				}
			}

			.dropdown__filter-selected {
				line-height: 0px;
				width: 100%;
			}
		}

		.dropdown__filter {
			display: flex;
			position: relative;
			padding: 20px;
			border: 1px solid #d6d6d6;
			border-radius: 30px;
			background-color: #fff;
			color: #595959;
			font-size: 14px;
			text-transform: uppercase;
			transition: 0.3s;
			height: 36px;

			&:focus {
				outline: none;
				/* box-shadow: 0 0 5px 3px #4d1091; */
			}

			&::after {
				position: absolute;
				top: 45%;
				right: 20px;
				width: 10px;
				height: 10px;
				transform: rotate(45deg) translateX(-45%);
				transition: 0.2s ease-in-out;
				border-right: 2px solid #595959;
				border-bottom: 2px solid #595959;
				content: '';
			}
		}

		.dropdown__select {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			margin-top: 5px;
			transition: 0.2s ease-in-out;
			font-weight: 300;
			box-shadow: 0 5px 10px 0 rgba(152, 152, 152, 0.6);
			transform: scaleY(0);
			transform-origin: top;
			overflow: hidden;
		}

		.dropdown__select-option {
			padding: 20px;
			transition: 0.3s;
			background-color: #fff;
			border-bottom: 1px solid #d6d6d6;

			&:last-of-type {
				border-bottom: 0;
			}

			&:hover {
				background-color: #f9f9f9;
			}
		}
	}
`

function Select({ children, onSearch }) {
	return (
		<Dropdown>
			<div className='dropdown'>
				<input type='checkbox' checked={children.length ? true : false} className='dropdown__switch' id='filter-switch' hidden />
				<label for='filter-switch' className='dropdown__options-filter'>
					<ul className='dropdown__filter' role='listbox' tabindex='-1'>
						<li className='dropdown__filter-selected'>
							<SearchInput className='search-input' onSearch={onSearch} />
						</li>
						<li>
							<ul className='dropdown__select'>{children}</ul>
						</li>
					</ul>
				</label>
			</div>
		</Dropdown>
	)
}

export default Select
