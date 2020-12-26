import React, { Component } from 'react'

export default class Paginator extends Component <{lastPage: number, handlePageChange: any}> {

    page = 1

    prev = () => {
        if (this.page === 1) return;
    
        this.page--;

        this.props.handlePageChange(this.page)
      };
    
      next = () => {
        if (this.page === this.props.lastPage) return;
    
        this.page++;
        this.props.handlePageChange(this.page)
      };

    render() {
        return (
            <nav
            className="pagination is-rounded"
            role="navigation"
            aria-label="pagination"
          >
            <a className="pagination-previous" onClick={this.prev}>
              Previous
            </a>
            <a className="pagination-next" onClick={this.next}>
              Next page
            </a>
          </nav>
        )
    }
}
