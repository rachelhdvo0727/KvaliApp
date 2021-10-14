import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/actions/UserActions";
import defaultStyles from "../styles/General";

export default function LogInScreen(props) {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const [email, onChangeEmail] = React.useState("");
	const [password, onChangePassword] = React.useState("");

	const loggedInUser = useSelector((state) => state.user?.loggedInUser);

	const handleLogIn = () => {
		// Attach and Send to Back-end
		dispatch(logIn(email, password));
	};

	React.useEffect(() => {
		if (loggedInUser !== undefined) {
			// if user is found
			console.log("found user");
			navigation.navigate("HomeTab");
		}
	});

	return (
		<View style={defaultStyles.pageCenter}>
			<Text style={[defaultStyles.headerH1, styles.titleAlign]}>Log in</Text>
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
					placeholder='********'
				></TextInput>
			</View>

			<Text style={[defaultStyles.btnLink, styles.forgotPass]}>
				Forgot password?
			</Text>
			<Pressable
				style={[defaultStyles.btnPrimary, defaultStyles.lightShadow]}
				onPress={handleLogIn}
			>
				<Text style={defaultStyles.btnPrimaryContent}>Log in</Text>
			</Pressable>
			<View style={styles.signUpLinkWrapper}>
				<Text>Don't have an account? </Text>
				<Link style={defaultStyles.btnLink} to={{ screen: "SignUpScreen" }}>
					Sign up
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
	forgotPass: {
		margin: 10
	},
	titleAlign: {
		alignSelf: "flex-start"
	}
});
