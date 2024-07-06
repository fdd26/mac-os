import svgMappings from '../../../assets/index.js'
import { GenerateTheMainMenuDateAndTime } from '../../../utils/helper/date-formatter.js'

function menuBar(params) {
	// main_menu
	const mainMenuBar = document.createElement('menu')
	mainMenuBar.classList.add('main_menu')
	const rootElement = document.getElementById('__root')
	rootElement.appendChild(mainMenuBar)

	// left main_menu
	const menuLeftDiv = document.createElement('div')
	menuLeftDiv.classList.add('main_menu_child')

	const appleIcon = document.createElement('img')
	appleIcon.src = svgMappings['apple-icon']
	menuLeftDiv.appendChild(appleIcon)
	mainMenuBar.appendChild(menuLeftDiv)

	// right main_menu
	const menuRightDiv = document.createElement('div')
	menuRightDiv.classList.add('main_menu_child', 'gap-x-4')

	// menu contorl buttons

	// focus button
	const focusButton = document.createElement('button')
	focusButton.classList.add('items-center')
	const focusIcon = document.createElement('img')
	focusIcon.src = svgMappings['focus']
	focusButton.appendChild(focusIcon)
	menuRightDiv.appendChild(focusButton)

	// Creating focus button
	const focusButton = document.createElement('button')
	focusButton.classList.add('items-center')
	const focusIcon = document.createElement('img')
	focusIcon.src = svgMappings['focus']
	focusButton.appendChild(focusIcon)
	menuRightDiv.appendChild(focusButton)

	// Creating wifi button
	const wifiButton = document.createElement('button')
	wifiButton.classList.add('items-center')
	const wifiIcon = document.createElement('img')
	wifiIcon.src = svgMappings['wifi']
	wifiButton.appendChild(wifiIcon)
	menuRightDiv.appendChild(wifiButton)

	// Creating control center button
	const controlCenterButton = document.createElement('button')
	controlCenterButton.classList.add('items-center')
	const controlCenterIcon = document.createElement('img')
	controlCenterIcon.src = svgMappings['control-center'] 
	controlCenterButton.appendChild(controlCenterIcon)
	menuRightDiv.appendChild(controlCenterButton)

	// date and time on right main_menu
	const dateAndTime = document.createElement('div')
	dateAndTime.id = 'main_menu_right_div_time_and_date'
	dateAndTime.classList.add('text-standard')
	menuRightDiv.appendChild(dateAndTime)
	mainMenuBar.appendChild(menuRightDiv)

	GenerateTheMainMenuDateAndTime()
	setInterval(GenerateTheMainMenuDateAndTime, 1000)
}
export default menuBar
