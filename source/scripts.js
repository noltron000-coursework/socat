/*
	These IDs have been imported:
	- title
	- description
	- form
*/

// Grab HTML
const title = document.getElementById('title')
const description = document.getElementById('description')
const form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
	e.preventDefault()
	const json = await getTaco()
	description.innerHTML = json
})

// Call API 
const getTaco = async () => {
	const path = 'https://taco-randomizer.herokuapp.com/random/'
	const res = await fetch(path)
	const json = await res.json()

	const all = []
	for (item in json) {
		console.log(item)
		all.push(fetch(item.url),then(res => res.text()))
	}
	
	const values = await Promise.all(all)
	console.log(values)
 

	return json
}
