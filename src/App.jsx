import React from "react";

const App = () => {
	return (
		<div className="p-8">
			<CardDisplay />
			<CardForm />
			<Success />
		</div>
	);
};

export default App;

// CardDisplay
const CardDisplay = () => {
	return <div>Card Display</div>;
};

// CardForm
const CardForm = () => {
	return <form>Card Form</form>;
};

// Success
const Success = () => {
	return <div>SuccessModal</div>;
};
