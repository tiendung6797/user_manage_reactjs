import React, { Component } from "react";
import DataRow from "./DataRow";

class DataTable extends Component {
  mappingData = () =>
    this.props.data.map((value, key) => (
      <DataRow delClick={(idDel) => this.props.delClick(idDel)} editClick={(user) => this.props.editFun1(value)} data={value} key={key} stt={key} />
    ));
  render() {
    let className = "";
    if (this.props.display === true) {
      className += "col-9";
    } else {
      className += "col-12";
    }

    return (
      <div className={className}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Rule</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.mappingData()}</tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
