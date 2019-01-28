import React, {Component} from 'react';

class HomePage extends Component{
    render(){
        return (
            <div className="container">
              <h1 className="text-center">All Products In the Store</h1>
              <br />
                <div className="row" >
                    <div className="col-md text-left">
                        <img src="https://res.cloudinary.com/dolwj4vkq/image/upload/v1548415985/pexojoscqj4mhs3ppsgh.jpg" alt="..." className="rounded mw-25"/>
                        <p><a href="product">A land scape so beautiful</a></p>
                    </div>
                    <div className="col-md text-center">
                        <img src="https://res.cloudinary.com/dolwj4vkq/image/upload/v1548415985/pexojoscqj4mhs3ppsgh.jpg" alt="..." className="rounded w-25"/>
                        <p><a href="product">A land scape so beautiful</a></p>
                    </div>
                    <div className="col-md text-right">
                        <img src="https://res.cloudinary.com/dolwj4vkq/image/upload/v1548415985/pexojoscqj4mhs3ppsgh.jpg" alt="..." className="rounded w-25"/>
                        <p><a href="product">A land scape so beautiful</a></p>
                    </div>
            </div>
        </div>
        );
    }
}

export default HomePage;