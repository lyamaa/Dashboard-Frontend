import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../classes/order";
import Paginator from "../components/paginator";

import Wrapper from "../components/wrapper";

export default class Orders extends Component {
  state = {
    orders: [],
  };

  page = 1;
  last_page = 0;

  componentDidMount = async () => {
    const response = await axios.get(`orders?page=${this.page}`);

    this.setState({
      orders: response.data.data,
    });
    this.last_page = response.data.meta.last_page;
  };

  handlePageChange = async (page: number) => {
    this.page = page;

    await this.componentDidMount();
  };

  handleExport = async () => {
    const response = await axios.get("export", { responseType: "blob" });

    const blob = new Blob([response.data], { type: "text/csv" });

    const downloadUrl = window.URL.createObjectURL(response.data);

    const link = document.createElement("a");
    link.href = downloadUrl;

    link.download = "orders.csv";
    link.click();
  };
  render() {
    return (
      <Wrapper>
        {/* BUTTON SECTION */}
        <div className="field is-grouped">
          <div className="control">
            <a onClick={this.handleExport} className="button">
              CSV
            </a>
          </div>
        </div>
        {/* TABLE SECTION */}
        <table className="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Name</abbr>
              </th>

              <th>
                <abbr title="Played">Email</abbr>
              </th>
              <th>
                <abbr title="Won">Total</abbr>
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
                <abbr title="Position">Name</abbr>
              </th>
              <th>
                <abbr title="Played">Email</abbr>
              </th>
              <th>
                <abbr title="Won">Total</abbr>
              </th>
              <th>
                <abbr title="Drawn">Action</abbr>
              </th>
            </tr>
          </tfoot>
          <tbody>
            {this.state.orders.map((order: Order) => {
              return (
                <tr className="is-selected" key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.first_name} {order.last_name}
                  </td>
                  <td>{order.email}</td>
                  <td>{order.total}</td>
                  <td>
                    <div className="is-grouped">
                      <div className="control">
                        <Link
                          to={`/order/${order.id}`}
                          className="button is-small is-info"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* END OF TABLE SECTION */}
        <Paginator
          lastPage={this.last_page}
          handlePageChange={this.handlePageChange}
        />
      </Wrapper>
    );
  }
}
