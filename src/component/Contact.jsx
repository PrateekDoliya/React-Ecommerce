import React from 'react';
import {Input, Label}  from 'reactstrap'

const Contact = () => {
    return (
        <>
            <div className="col-sm-10 col-md-5 p-5 mx-auto">
                <form>
                    <div className="form-group">
                        <Label>Your Name</Label>
                        <Input
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group mt-4">
                        <Label>Your Email</Label>
                        <Input
                            type="email"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group mt-4">
                        <Label>Your Phone</Label>
                        <Input
                            type="number"
                            className="form-control"
                            maxLength="10"
                        />
                    </div>

                    <div className="form-group mt-4">
                        <Label>Your Message</Label>
                        <Input
                            type="textarea"
                            className="form-control"
                            maxLength="10"
                            row="5"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;
