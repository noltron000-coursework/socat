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

console.log(form)

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

	console.log(json)

	return json
}
