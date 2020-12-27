import axios from "axios";
import { data } from "jquery";
import React, { Component, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import { Product } from "../../classes/product";
import ImageUpload from "../components/ImageUpload";
import Wrapper from "../components/wrapper";
export default class ProductEdit extends Component <{match: any}> {
  state = {
    title: '',
    description: '',
    image: "",
    price: 0,
    redirect: false,
  };
  id= 0
  title = "";
  description = "";
  image = "";
  price = 0;

  componentDidMount = async() => {
    this.id = this.props.match.params.id

    const response = await axios.get(`products/${this.id}`)

    const product: Product = response.data.data;

    this.setState({
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price
    })
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`products/${this.id}`, {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      price: this.state.price,
    });

    this.setState({
      redirect: true,
    });
  };

  imageChanged = (image: string) => {
      this.image = image
      this.setState({
        image: this.image
      })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/products" />;
    }
    return (
      <Wrapper>
        <form onSubmit={this.submit}>
          <div className="field ml-6">
            <label className="label"> Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="title"
                defaultValue={this.state.title}
                onChange={(e) => this.setState({
                  title: e.target.value
                })}
              />
            </div>

            <label className="label mt-2"> Description</label>
            <div className="control">
              <textarea
                className="textarea"
                name="description"
                defaultValue={this.state.description}
                onChange={(e) =>  this.setState({
                  description: e.target.value
                })}
                rows={10}
              ></textarea>
            </div>

           <ImageUpload value={this.image = this.state.image} imageChanged={this.imageChanged} />

            <label className="label mt-5"> Price</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="price"
                value={this.price = this.state.price}
                onChange={(e) => this.setState({
                  price: e.target.value
                })
                  
                }
              />
            </div>

            <div className="control mt-3">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </Wrapper>
    );
  }
}
