const getFileName = (data) => {
	let fileName = 'App'
	if (['Sublime Text', 'Code', "Google Chrome", "Atom"].some(name => data.owner.name.includes(name))) {
		fileName =  data.title.split('—')[0].split('.')[0]
	}
	if (['PyCharm', 'WebStorm'].some(name => data.owner.name.includes(name))) {
		const splited = data.title.split('–');
		fileName = splited[splited.length-1].split('.')[0]
	}
	return fileName.trim()
}

module.exports = {
	getFileName
}