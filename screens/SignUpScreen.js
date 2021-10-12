import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import defaultStyles from "../styles/General";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/actions/UserActions";
import { Link } from "@react-navigation/native";

export default function SignUpScreen() {
	const dispatch = useDispatch();
	const [email, onChangeEmail] = React.useState("");
	const [password, onChangePassword] = React.useState("");
	const [confirmPass, onChangeConfirmPass] = React.useState("");

	const handleSignUp = () => {
		password === confirmPass
			? dispatch(signUp(email, password))
			: console.error(password, confirmPass);
	};

	return (
		<View style={defaultStyles.pageCenter}>
			<Text style={[defaultStyles.headerH1, styles.titleAlign]}>
				Sign up to get access
			</Text>
			<View style={[defaultStyles.fieldset, defaultStyles.lightShadow]}>
				<TextInput
					style={defaultStyles.formInput}
					onChangeText={(v) => onChangeEmail(v)}
					value={email}
					placeholder='student@student.cbs.dk'
				></TextInput>
				<TextInput
					style={defaultStyles.formInput}
					onChangeText={(v) => onChangePassword(v)}
					value={password}
					placeholder='Must be at least 6 character'
				></TextInput>
				<TextInput
					style={defaultStyles.formInput}
					onChangeText={(v) => onChangeConfirmPass(v)}
					value={confirmPass}
					placeholder='Re-enter your password'
				></TextInput>
			</View>
			<Pressable
				style={[defaultStyles.btnPrimary, defaultStyles.lightShadow]}
				onPress={handleSignUp}
			>
				<Text style={defaultStyles.btnPrimaryContent}>Get access</Text>
			</Pressable>
			<View style={styles.signUpLinkWrapper}>
				<Text>Already have an account? </Text>
				<Link style={defaultStyles.btnLink} to={{ screen: "LogInScreen" }}>
					Log in
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	signUpLinkWrapper: {
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		margin: 20
	},
	titleAlign: {
		alignSelf: "flex-start"
	}
});
