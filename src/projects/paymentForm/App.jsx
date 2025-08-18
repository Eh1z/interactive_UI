import React, { useState } from "react";

const initialCardData = {
	name: "",
	number: "",
	month: "",
	year: "",
	cvc: "",
};

const App = () => {
	const [cardData, setCardData] = useState(initialCardData);
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCardData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="p-8 flex gap-8 flex-col lg:flex-row w-full justify-center items-center min-h-screen">
			<CardDisplay cardData={cardData} />

			<div>
				{!submitted ? (
					<CardForm
						cardData={cardData}
						handleChange={handleChange}
						errors={errors}
						setErrors={setErrors}
						submitted={submitted}
						setSubmitted={setSubmitted}
					/>
				) : (
					<Success
						onContinue={() => {
							setCardData(initialCardData);
							setSubmitted(false);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default App;

// CardDisplay
const CardDisplay = ({ cardData }) => {
	const { name, number, month, year, cvc } = cardData;

	return (
		<div className="p-8 bg-purple-600 text-white rounded-lg max-w-xl min-w-md">
			<p>Card Number : {number || "0000 0000 0000 0000"}</p>
			<p>Name: {name || "John Doe"}</p>
			<p>Expiry: {(month || "00") + "/" + (year || "00")}</p>
			<p>CVC: {cvc || "000"}</p>
		</div>
	);
};

// CardForm
const CardForm = ({
	cardData,
	handleChange,
	errors,
	setErrors,
	submitted,
	setSubmitted,
}) => {
	// Form Validations
	const validateForm = () => {
		const newErrors = {};
		if (!cardData.name) newErrors.name = "Name is required";
		if (!/^\d{16}$/.test(cardData.number))
			newErrors.number = "Card Number must be up to 16 digits";
		if (!/^\d{2}$/.test(cardData.month)) newErrors.month = "Invalid Month";
		if (!/^\d{2}$/.test(cardData.year)) newErrors.year = "Invalid Year";
		if (!/^\d{3}$/.test(cardData.cvc)) newErrors.cvc = "Invalid CVC";

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			console.log(errors);
		} else {
			setSubmitted(true);
			setErrors({});
		}
	};

	return (
		<form>
			{/* Name */}
			<div className="flex flex-col py-3">
				<label className="text-sm">Cardholder Name</label>
				<input
					className="p-2 outline-none border border-gray-300 rounded text-sm"
					type="text"
					name="name"
					value={cardData.name}
					onChange={handleChange}
					placeholder="Cardholder's Name"
				/>
				<p className="text-xs text-red-600">
					{errors.name && errors.name}
				</p>
			</div>

			{/* Card Number */}
			<div className="flex flex-col py-3">
				<label className="text-sm">Card Number</label>
				<input
					className="p-2 outline-none border border-gray-300 rounded text-sm"
					type="number"
					name="number"
					value={cardData.number}
					onChange={handleChange}
					placeholder="Card Number"
				/>
				<p className="text-xs text-red-600">
					{errors.number && errors.number}
				</p>
			</div>

			<div className="flex gap-4 items-center">
				{/* Expiry Date */}
				<div className="flex flex-col py-3">
					<label className="text-sm">Expiry Date</label>
					<div className="flex items-center gap-2">
						<input
							className="p-2 outline-none border border-gray-300 rounded text-sm"
							type="number"
							name="month"
							value={cardData.month}
							onChange={handleChange}
							placeholder=" Month"
						/>
						/
						<input
							className="p-2 outline-none border border-gray-300 rounded text-sm"
							type="number"
							name="year"
							value={cardData.year}
							onChange={handleChange}
							placeholder=" Year"
						/>
					</div>
					<p className="text-xs text-red-600">
						{errors.month && errors.month}
					</p>
					<p className="text-xs text-red-600">
						{errors.year && errors.year}
					</p>
				</div>

				{/* CVC */}
				<div className="flex flex-col py-3">
					<label className="text-sm">CVC</label>
					<input
						className="p-2 outline-none border border-gray-300 rounded text-sm"
						type="number"
						name="cvc"
						value={cardData.cvc}
						onChange={handleChange}
						placeholder="CVC "
					/>
					<p className="text-xs text-red-600">
						{errors.cvc && errors.cvc}
					</p>
				</div>
			</div>

			<button
				type="submit"
				onClick={handleSubmit}
				className="px-8 py-3 bg-purple-950 text-white flex items-center justify-center rounded-lg w-full my-8"
			>
				Confirm
			</button>
			{submitted}
		</form>
	);
};

// Success
const Success = ({ onContinue }) => {
	return (
		<div className="text-center w-full flex flex-col items-center p-8  rounded shadow ">
			<p className="text-xl">Thank You!</p>
			<p className="mb-4">We've added your card details</p>
			<button
				onClick={onContinue}
				className="px-8 py-3 bg-purple-950 text-white flex items-center justify-center max-w-md rounded-lg my-8"
			>
				Continue
			</button>
		</div>
	);
};
