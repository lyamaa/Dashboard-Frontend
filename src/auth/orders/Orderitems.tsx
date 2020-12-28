import React, { Component } from 'react'
import Wrapper from "../components/wrapper"
import axios from "axios"
import { Order } from '../../classes/order'
import { Link } from 'react-router-dom'
import { OrderItem } from '../../classes/order_item'

export default class Orderitems extends Component <{match: any}> {
    state = {
        order_items: []
    }
    id =0
    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        const response = await axios.get(`orders/${this.id}`)
        const order: Order = response.data.data
        
        this.setState({
            order_items: order.order_items
        })
    }

    render() {
        return (
            <Wrapper>
        {/* TABLE SECTION */}
        <table className="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Product Title</abbr>
              </th>
              
              <th>
                <abbr title="Played">Price</abbr>
              </th>
              <th>
                <abbr title="Won">Quantity</abbr>
              </th>
            
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Product Title</abbr>
              </th>
              <th>
                <abbr title="Played">Price</abbr>
              </th>
              <th>
                <abbr title="Won">Quantity</abbr>
              </th>
              
            </tr>
          </tfoot>
          <tbody>
            {this.state.order_items.map((order_item: OrderItem) => {
              return (
                <tr className="is-selected" key={order_item.id}>
                  <td>{order_item.id}</td>
                  <td>{order_item.product_title}</td>
                  <td>{order_item.price}</td>
                  <td>{order_item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* END OF TABLE SECTION */}
            </Wrapper>
        )
    }
}
