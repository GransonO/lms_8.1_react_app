import React, {Component} from 'react';

class Product extends Component{
    render(){
        return (<div className="text-center">
            <br />
            <h2>This is full display of a product</h2>
            <img src="https://res.cloudinary.com/dolwj4vkq/image/upload/v1548415985/pexojoscqj4mhs3ppsgh.jpg" alt="..." className="rounded w-70"/>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>);
    }
}

export default Product;