import { useLoaderData } from "react-router-dom";



const Products = () => {

    const {products} = useLoaderData()
    console.log(products)

    return (
        <div>
            <div>product page</div>
        </div>
    );
};

export default Products;