import { useState } from 'react'
import { View, Text, Image, StyleSheet, Switch } from 'react-native'
import StyledInput from './StyledInput'
import StyledButton from './StyledButton'

const Ej3 = () => {

	initObj = { name: "", surnames: "", age: "", email: "", gendervalue: false, gender: "femenino" }

	const [form, setForm] = useState(initObj)
	const [errors, setErrors] = useState({})
	const [show, setShow] = useState(false)

	const checkName = value => {
		setShow(false)
		setForm({ ...form, name: value })
		setErrors({ ...errors, name: !value ? "El nombre es requerido" : "" })
	}

	const checkSurnames = value => {
		setShow(false)
		setForm({ ...form, surnames: value })
		setErrors({ ...errors, surnames: !value ? "Los apellidos son requeridos" : "" })
	}

	const checkAge = value => {

		setShow(false)
		setForm({ ...form, age: value })

		let error
		// Edad de 1 hasta 127 años
		const regEx = /^[1-9]|[1-9][0-9]|1[01][0-9]|12[0-7]$/

		if (!value) {
			error = { age: "La edad es requerida" }
		} else if (!regEx.test(value)) {
			error = { age: "Debe introducir una edad válida" }
		} else {
			error = { age: "" }
		}
		setErrors({ ...errors, ...error })
	}

	const checkEmail = value => {

		setShow(false)
		setForm({ ...form, email: value })

		let error
		const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

		if (!value) {
			error = { email: "El email es requerido" }
		} else if (!regEx.test(value)) {
			error = { email: "Debe introducir un email válido" }
		} else {
			error = { email: "" }
		}
		setErrors({ ...errors, ...error })
	}

	const checkGender = value => {
		setShow(false)
		setForm({ ...form, gendervalue: value, gender: !value ? "femenino" : "masculino" })
	}

	const formIsvalid = () => {
		// Comprobamos que el form no contenga errores y que
		// no existan campos vacíos (esto último sólo ocurre
		// en la primera carga)

		for (const [, value] of Object.entries(form)) {
			if (value === "") return false
		}

		for (const [, value] of Object.entries(errors)) {
			if (value) return false
		}

		return true
	}

	const reset = () => {
		setShow(false)
		setForm(initObj)
	}

	return (
		<View style={styles.container}>

			<View style={styles.field}>
				<Text style={styles.fieldKey}>Nombre</Text>
				<StyledInput
					placeholder="Introduzca su nombre"
					onChangeText={checkName}
					value={form.name}
					error={errors.name}
					styleContainer={styles.fieldValue} />
			</View>

			<View style={styles.field}>
				<Text style={styles.fieldKey}>Apellidos</Text>
				<StyledInput
					placeholder="Introduzca sus apellidos"
					onChangeText={checkSurnames} value={form.surnames}
					error={errors.surnames}
					styleContainer={styles.fieldValue} />
			</View>

			<View style={styles.field}>
				<Text style={styles.fieldKey}>Edad</Text>
				<StyledInput
					placeholder="Introduzca su edad"
					onChangeText={checkAge}
					value={form.age}
					error={errors.age}
					keyboardType="numeric"
					styleContainer={styles.fieldValue} />
			</View>

			<View style={styles.field}>
				<Text style={styles.fieldKey}>Email</Text>
				<StyledInput
					placeholder="Introduzca su email"
					onChangeText={checkEmail} value={form.email} error={errors.email} styleContainer={styles.fieldValue}
					keyboardType="email-address" />
			</View>

			<View style={styles.field}>
				<Text style={styles.fieldKey}>Sexo</Text>
				<View style={[styles.fieldValue, { flexDirection: "row", alignItems: "center" }]}>
					<Text>Femenino</Text>
					<Switch
						trackColor={{ true: 'blue', false: 'pink' }}
						thumbColor={form.gendervalue ? 'blue' : 'pink'}
						onValueChange={checkGender}
						value={form.gendervalue}
						style={styles.switch}
					/>
					<Text>Masculino</Text>
				</View>
			</View>

			<StyledButton disable={!formIsvalid()} onPress={() => setShow(true)} style={styles.buttons}>Enviar</StyledButton>

			{
				!show
					? null
					: <>
						<Text style={styles.message}>Mi nombre es {form.name + ' ' + form.surnames} con edad {form.age}.
							Mi correo electrónico es {form.email}. Mi sexo es {form.gender}.</Text>
						<Image source={require('../img/react.png')} style={styles.image} />
						<StyledButton onPress={reset} style={[styles.buttons, { backgroundColor: "red" }]}>Resetear</StyledButton>
					</>
			}

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	field: {
		flexDirection: "row",
		marginVertical: 10,
		alignItems: "center"
	},
	fieldKey: {
		flex: 1,
		color: "black"
	},
	fieldValue: {
		flex: 2
	},
	buttons: {
		marginVertical: 20
	},
	message: {
		fontWeight: "bold"
	},
	image: {
		height: 150,
		width: 150,
		marginTop: 10,
		alignSelf: "center"
	}
})

export default Ej3
