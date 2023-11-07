import React from 'react'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'
import store from './src/store/index'
import { Provider } from 'react-redux'
import NavigationGeneral from './src/navigation/NavigationGeneral'
import { init } from './src/db'

init()
	.then(() => console.log('ya inicio la base de datos SQLite'))
	.catch(err => console.log('no pudo iniciar la base de datos SQLite', err.message))

export default function App() {
	const [fuentesCargadas] = useFonts(fonts)

	if (!fuentesCargadas) {
		return null
	}

	return (
		<Provider store={store}>
			<NavigationGeneral />
		</Provider>
	)
}