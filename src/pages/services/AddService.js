import React from 'react';
import { Helmet } from "react-helmet";

const AddService = () => {

    const handleAddService = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            price,
            description
        }

        fetch("https://golpo-photography-server.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                alert("Service Added Done");
                form.reset();
                }
            })
            .catch((err) => console.error(err));
    }


    return (
        <div>
            <Helmet>
                <title>Golpo | Add Services</title>
            </Helmet>
            <form onSubmit={handleAddService}>
                <input type="text" name="title" placeholder="Enter Service Name" className="my-3 bg-black border border-orange-300 text-2xl"/>
                <input type="text" name="image" placeholder="Enter iamge url" className="my-3 bg-black border border-orange-300 text-2xl"/>
                <input type="number" name="price" placeholder="Enter Price in Bdt" className="my-3 bg-black border border-orange-300 text-2xl"/>
                <textarea name="description" className="textarea w-full my-5 border-orange-300" placeholder="Give the description"></textarea>
                <input className="btn" type="submit" value="Done" />
            </form>
        </div>
    );
};

export default AddService;