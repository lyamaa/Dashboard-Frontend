import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper";
import axios from "axios";
import { Product } from "../../classes/product";
import "./product.css";
import Paginator from "../components/paginator"

export default class products extends Component {
  state = {
    products: [],
  };

  page = 1;
  last_page = 0;

  componentDidMount = async () => {
    const response = await axios.get(`products?page=${this.page}`);
    console.log(response);

    this.setState({
      products: response.data.data,
    });

    this.last_page = response.data.data.last_page
  };

  delete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete selected product?")) {
      await axios.delete(`products/${id}`);

      this.setState({
        product: this.state.products.filter((p: Product) => p.id != id),
      });
    }
  };

  handlePageChange = async (page: number) => {
    this.page = page;
    await this.componentDidMount()
  }

  render() {
    return (
      <Wrapper>
        {/* BUTTON SECTION */}
        <div className="field is-grouped">
          <div className="control">
            <Link to={"/products/create"} className="button">
              Product Create
            </Link>
          </div>
        </div>
        {/* TABLE SECTION */}
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-narrow">
          <thead>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Image</abbr>
              </th>
              <th>
                <abbr title="Drawn">Title</abbr>
              </th>
              <th>
                <abbr className="desc" title="Drawn">
                  Description
                </abbr>
              </th>
              <th>
                <abbr title="Drawn">Price</abbr>
              </th>
              <th>
                <abbr title="Drawn">Action</abbr>
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Image</abbr>
              </th>
              <th>
                <abbr title="Drawn">Title</abbr>
              </th>
              <th>
                <abbr className="desc" title="Drawn">
                  Description
                </abbr>
              </th>
              <th>
                <abbr title="Drawn">Price</abbr>
              </th>
              <th>
                <abbr title="Drawn">Action</abbr>
              </th>
            </tr>
          </tfoot>
          <tbody>
            {this.state.products.map((product: Product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img src={product.image} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="is-grouped">
                      <div className="control">
                        <Link
                          to={`/products/${product.id}/edit`}
                          className="button is-small is-info"
                        >
                          Edit
                        </Link>
                        <a
                          href={"/products"}
                          className="button is-small is-danger"
                          onClick={() => this.delete(product.id)}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange} />
      </Wrapper>
    );
  }
}
