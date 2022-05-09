import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Package added successfully!")
                    window.location = "/";
                    reset();
                }
            })
    };
    return (
        <div className="add-product w-50 mx-auto">
            <h1 style={{ width: "50%" }} className="section-title mx-auto py-3 my-4">Add a package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="Name" {...register("name", { required: true, maxLength: 100 })} /> <br />
                <textarea className="form-control" placeholder="Description" {...register("description")} /> <br />
                <input className="form-control" placeholder="Image URL" {...register("img")} /> <br />
                <input className="form-control" placeholder="Cost" type="number" {...register("cost")} /> <br />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;