import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Paper, Button, MenuItem } from "@material-ui/core";
import TextError from "./TextError";
import "./App.css";

const useStyles = makeStyles({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		width: "100%",
		background: "#000428" /* fallback for old browsers */,
		background:
			"-webkit-linear-gradient(to bottom, #004e92, #000428)" /* Chrome 10-25, Safari 5.1-6 */,
		background:
			"linear-gradient(to bottom, #004e92, #000428)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
	},
	formContainer: {
		background: "white",
		paddingLeft: "2rem",
		paddingRight: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flexStart",
		height: "100%",
		width: "60%",
	},
	formHeading: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		alignItems: "flex-start",
		marginTop: "3rem",
		fontFamily: "Nunito, sans-serif",
	},
	row: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		margin: "1rem",
	},
	error: {
		color: "red",
		fontSize: "0.5rem",
	},
	lable: {
		width: "11rem",
		fontWeight: "bold",
		fontFamily: "Nunito",
	},
	Field: {
		width: "100%",
		marginLeft: "1rem",
	},
	customSelect: {
		width: "100%",
		"& select": {
			paddingLeft: "1rem",
			borderRadius: "10px",
			width: "100%",
			height: "2rem",
			outline: "none",
		},
	},
	weekDays: {
		height: "25%",
		width: "100%",
		marginTop: "1rem",
		display: "flex",
		flexDirection: "column",
	},
	weekLable: {
		width: "100%",
		display: "flex",
		fontSize: "1rem",
		fontWeight: "bold",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonStyle: {
		marginTop: "1rem",
	},
	label: {
		display: "flex",
		flexDirection: "column-reverse",
		justifyContent: "center",
		alignItems: "center",
		fontWeight: "bold",
		fontFamily: "Nunito",
	},
	radioStyles: {
		padding: "2.5rem",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

function App() {
	const classes = useStyles();
	const repeatValues = [
		{ key: 0, value: "None" },
		{ key: 1, value: "Daily" },
		{ key: 2, value: "Weekly" },
	];
	const shiftValues = [{ key: 0, value: "Morning Shift - 5am to 9am" }];

	const validationSchema = Yup.object({
		startDate: Yup.string().required("Required"),
		repeatType: Yup.string().required("Required"),
		shift: Yup.string().required("Required"),
		start_time: Yup.string().required("Required"),
		end_time: Yup.string().required("Required"),
		pick: Yup.string().required("Required"),
	});

	const initialValues = {
		startDate: "",
		repeatType: "",
		shift: "",
		start_time: "",
		end_time: "",
		pick: "",
	};

	const onSubmit = (values, { resetForm }) => {
		console.log(values);
		alert('Form Submitted')
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			validateOnMount
		>
			{(formik) => {
				return (
					<Form>
						<div className={classes.container}>
							<div className={classes.formContainer}>
								<div className={classes.formHeading}>
									<h2>Select Start Date and Shift Times</h2>
									<h4>Each row represents a shift</h4>
								</div>
								<div className={classes.row}>
									<div className={classes.lable}>Start&nbsp;Date</div>
									<div className={classes.Field}>
										<Field
											as={TextField}
											id="datetime-local"
											fullWidth
											type="date"
											defaultValue="2017-05-24"
											name="startDate"
										/>
										<ErrorMessage name="startDate" component={TextError} />
									</div>
								</div>
								<div className={classes.row}>
									<div className={classes.lable}>
										Start&nbsp;Repeat&nbsp;Date
									</div>
									<div className={classes.customSelect}>
										<Field
											as={TextField}
											select
											fullWidth
											variant="outlined"
											name="repeatType"
											label="Repeats"
										>
											{repeatValues.map((item) => {
												return (
													<MenuItem key={item.key} value={item.value}>
														{item.value}
													</MenuItem>
												);
											})}
										</Field>
										<ErrorMessage name="repeatType" component={TextError} />
									</div>
								</div>
								<div className={classes.row}>
									<div className={classes.lable}>
										Start&nbsp;Repeat&nbsp;Date
									</div>
									<div className={classes.customSelect}>
										<Field
											as={TextField}
											select
											fullWidth
											variant="outlined"
											name="shift"
											label="Shifts"
										>
											{shiftValues.map((item) => {
												return (
													<MenuItem key={item.key} value={item.value}>
														{item.value}
													</MenuItem>
												);
											})}
										</Field>
										<ErrorMessage name="repeatType" component={TextError} />
									</div>
								</div>
								<div className={classes.row}>
									<div className={classes.lable}>
										Select&nbsp;Start&nbsp;Time
									</div>
									<div className={classes.Field}>
										<Field
											as={TextField}
											id="datetime-local"
											fullWidth
											type="time"
											name="start_time"
										/>
										<ErrorMessage name="start_time" component={TextError} />
									</div>
								</div>
								<div className={classes.row}>
									<div className={classes.lable}>Select&nbsp;End&nbsp;Time</div>
									<div className={classes.Field}>
										<Field
											as={TextField}
											id="datetime-local"
											fullWidth
											type="time"
											name="end_time"
										/>
										<ErrorMessage name="end_time" component={TextError} />
									</div>
								</div>
								<div className={classes.weekDays}>
									<Paper
										elevation={5}
										style={{
											height: "100%",
											width: "100%",
											borderRadius: "2rem",
										}}
									>
										<div className={classes.weekLable}>
											Please Select the day of Week
										</div>
										<div
											role="group"
											className={classes.radioStyles}
											aria-labelledby="my-radio-group"
										>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Mon" />
												Mon
											</label>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Tue" />
												Tue
											</label>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Wed" />
												Wed
											</label>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Thu" />
												Thu
											</label>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Fri" />
												Fri
											</label>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Sat" />
												Sat
											</label>
											<label className={classes.label}>
												<Field type="radio" name="pick" value="Sun" />
												Sun
											</label>
										</div>
									</Paper>
									<div style={{ marginTop: "2rem", fontWeight: "bold" }}>
										<label
											style={{
												fontFamily: "Nunito",
												width: "6.5rem",
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
											}}
										>
											<Field type="radio" name="pick" value="WeekDays" />
											Week Days
										</label>
									</div>
								</div>
								<div className={classes.buttonStyle}>
									<Button type="submit" variant="contained" color="secondary">
										Submit
									</Button>
								</div>
							</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}

export default App;
