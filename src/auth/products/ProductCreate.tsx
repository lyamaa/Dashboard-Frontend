import axios from "axios";
import { data } from "jquery";
import React, { Component, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import Wrapper from "../components/wrapper";
export default class ProductCreate extends Component {
  state = {
    image: "",
    redirect: false,
  };
  title = "";
  description = "";
  image = "";
  price = "0";

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("products", {
      title: this.title,
      description: this.description,
      image: this.image,
      price: this.price,
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
                name="name"
                onChange={(e) => (this.title = e.target.value)}
              />
            </div>

            <label className="label mt-2"> Description</label>
            <div className="control">
              <textarea
                onChange={(e) => (this.description = e.target.value)}
                className="textarea"
                placeholder="10 lines of textarea"
                rows={10}
              ></textarea>
            </div>

           <ImageUpload value={this.image = this.state.image} imageChanged={this.imageChanged} />

            <label className="label mt-5"> Price</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="name"
                onChange={(e) => parseFloat((this.price = e.target.value))}
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
