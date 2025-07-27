import React from "react"

export const Contact = () => {
    const handleFormSubmit = (formData) => {
        const FormInput = Object.fromEntries(formData.entries());
        console.log(FormInput);
    }

    return (
        <>
            <section className="contact-page">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-5 items-center">
                        <div className="col-span-3 col-start-2">
                            <h1 className="h1 text-center">Contact Us</h1>
                            <p className="text-center">Have questions, suggestions, or just want to say hello? We’d love to hear from you! Whether you're curious about our data, want to contribute a country fact, or need support, feel free to reach out. Our team is here to help.</p>                        
                        </div>
                        <form action={handleFormSubmit} className="col-span-3 col-start-2 form-box">
                            <label htmlFor="fname">First Name: </label>
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                placeholder="Enter Your Name"
                                className="form-control mb-3"
                            />
                            <label htmlFor="lname">Last Name: </label>
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                placeholder="Enter Your Last Name"
                                className="form-control mb-3s"
                            />
                            <label htmlFor="email">Email: </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Write The Email"
                                className="form-control mb-3"
                            />
                            <label htmlFor="message">Write down the description Here : </label>
                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Write the complete description about the discoveries of the countries."
                                className="form-control mb-3"
                            />
                            <button type="submit" className="btn-order">Submit Your Discoveries</button>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}

