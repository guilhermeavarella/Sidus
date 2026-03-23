import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRegister } from "../utils/authentication"
import Button from "../components/LongButton"
import BackButton from "../components/BackButton";


function Register() {
    const navigate = useNavigate();
    const { register: handleRegister, error } = useRegister();
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        {
            text: "First things first. Please provide your legal information.",
            fields: [
                { name: "firstName", placeholder: "First Name", type: "text" },
                { name: "lastName", placeholder: "Last Name", type: "text" },
                { name: "id", placeholder: "Document ID (e.g. SSN, CPF, RIC)", type: "text" }
            ]
        },
        {
            text: "Now, where are you from?",
            fields: [
                { name: "country", placeholder: "Select your country/region", type: "select" },
                { name: "address", placeholder: "Enter your address", type: "text" },
                { name: "optional", placeholder: "Apartment, suite, etc. (optional)", type: "text" },
                { name: "city", placeholder: "City", type: "text" },
                { name: "state", placeholder: "State", type: "select" },
                { name: "zipCode", placeholder: "ZIP code", type: "text" },
                { name: "email", placeholder: "Enter your email", type: "email" }
            ]
        },
        {
            text: "Let’s set up your password.",
            fields: [
                { name: "confirmPassword", placeholder: "Confirm your password", type: "password" },
                { name: "password", placeholder: "Password", type: "password" }
            ]
        }
    ];
    
    const handleSubmit = async (e) => {
        if (e) e.preventDefault(); 

        const form = document.getElementById("registerForm");
        const formData = new FormData(form);
        let result = null;

        try {
            switch (currentStep) {
                case 1:
                    result = await handleRegister(currentStep, {
                        data: {
                            firstName: formData.get("firstName"),
                            lastName: formData.get("lastName"),
                            id: formData.get("id")
                        }
                    });
                    break

                case 2:
                    result = await handleRegister(currentStep, {
                        data: {
                            country: formData.get("country"),
                            address: formData.get("address"),
                            city: formData.get("city"),
                            state: formData.get("state"),
                            zipCode: formData.get("zipCode"),
                            email: formData.get("email")
                        }
                    });
                    break

                case 3:
                    const password = formData.get("password");
                    const confirmPassword = formData.get("confirmPassword");

                    if (password !== confirmPassword) {
                        alert("Passwords do not match.");
                        return
                    }

                    result = await handleRegister(currentStep, {
                        data: { password }
                    });
                    break

                default:
                    break
            }

            if (result && !result.error) { 
                handleNextStep();
            } else if (error) {
                alert("Something went wrong. Please check your info.");
            }

        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    const handleNextStep = () => {
        document.getElementById("registerForm")?.reset();

        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            alert("Registration successful! Welcome to Sidus.");
            navigate("/welcome");
        }
    };

    return (
        <main className="w-full h-full flex flex-col items-center justify-start gap-4 p-4 pb-16">
            <section className="w-full h-16 flex items-center justify-start">
                <BackButton/>
            </section>

            <section className="w-full h-full flex flex-col items-start justify-between">
                <div className="w-full flex flex-col gap-4">
                    <div>
                        <h1>Create your account</h1>
                        <p className="text-[var(--content-secondary)]">Welcome! Create an account to get started.</p>
                    </div>

                    
                    <form id="registerForm" name="registerForm" className="w-full flex flex-col gap-3">
                        {steps[currentStep - 1].fields.map((field) => { 
                            if (field.type === "select") {
                                return (
                                    <select key={field.name} name={field.name} defaultValue="0" className="p-4 border-2 rounded-xl">
                                        <option value="0" disabled>{field.placeholder}</option>
                                        <option value="USA">United States</option>
                                        <option value="CAN">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="AUS">Australia</option>
                                        <option value="IND">India</option>
                                        <option value="BRA">Brazil</option>
                                        <option value="DEU">Germany</option>
                                        <option value="FRA">France</option>
                                        <option value="JPN">Japan</option>
                                        <option value="CHN">China</option>
                                    </select>
                                );
                            } else {
                                return (
                                    <input key={field.name} type={field.type} name={field.name} placeholder={field.placeholder} className="p-4 border-2 rounded-xl" />
                                )
                            }
                        })}
                    </form>
                </div>

                <Button variant="primary" label="Continue" action={handleSubmit} />
            </section>
            <section className="w-full flex flex-row gap-3 items-center justify-center">
                {steps.map((_, index) => (
                    <img
                        key={index}
                        src={ index + 1 === currentStep
                            ? "/icons/step-current.svg"
                            : "/icons/step.svg"
                        }
                        className="h-4"
                    />
                ))}
            </section>
        </main>
    )
}

export default Register;