import D6 from '../components/shared/assets/d6book.svg'
import D20 from '../components/shared/assets/d20.svg'

export const isOwn = (id1, id2) => id1 === id2

export const preloadDice = () => {
	const d6Prefetch = document.createElement('link')
	const d20Prefetch = document.createElement('link')
	d6Prefetch.rel = 'prefetch'
	d20Prefetch.rel = 'prefetch'
	d6Prefetch.href = D6
	d20Prefetch.href = D20
	d6Prefetch.as = 'image'
	d20Prefetch.as = 'image'

	document.head.append(d6Prefetch)
	document.head.append(d20Prefetch)
}

export const areDeepEqual = (arr1, arr2) => {
	if (arr1.length === 0 && arr2.length === 0) return true
	if (arr1.length !== arr2.length) return false

	const copy1 = [...arr1],
		copy2 = [...arr2]
	copy1.sort()
	copy2.sort()
	let i = 0
	console.log(copy1, copy2)
	while (i < copy1.length) {
		if (copy1[i]._id !== copy2[i]._id) {
			return false
		}
		i++
	}

	return true
}
