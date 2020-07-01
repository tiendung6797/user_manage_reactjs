import React, { Component } from "react";

class DataRow extends Component {
  permissionShow = () => {
    if (this.props.data.permission === 1 || this.props.data.permission === "1") {
      return "Admin";
    } else if (this.props.data.permission === 2 || this.props.data.permission === "2") {
      return "Editor";
    } else {
      return "User";
    }
  };

  editRow = () => {
   this.props.editClick();
   //console.log(this.props.data);
  }

  delRow = (idDel) => {
    this.props.delClick3(idDel);
  }

  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua" onClick = {() => this.editRow()}>
              <i className="fa fa-edit    "/>
              Edit
            </div>
            <div className="btn btn-danger xoa" onClick = {() => this.delRow(this.props.data.id)}>
              <i className="fa fa-trash-o   " />
              Delete
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default DataRow;
