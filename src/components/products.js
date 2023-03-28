

import './styles/products.css';
import  craftKit from '../images/craft-kit.jpg';
import sensoryKit from '../images/sensory-bin.jpg';
import Navbar from './navbar';


export default function Products(){

    const products = [
        {
            name: "Craft Kits",
            description: "Each kit is an exciting opportunity to explore and learn while creating a work of art!",
            imageUrl: craftKit
        },
        {
            name: "Sensory Bins",
            description: "Our sensory bins are senational! Perfect for toddlers developing their motor skills or anyone with sensory processing disorders.",
            imageUrl: sensoryKit
        }
    ]

    const productList = products.map(product => <div key={product.name}>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} className="product-list-image" alt={product.name}/>
        <p className="product-descript">{product.description}</p>
    </div>)


    return(
        <div id="products-page">
            <Navbar />
            <h1>Our Products</h1>
            <div id="products-list"> 
            {productList}
            </div>
        </div>
    )
}