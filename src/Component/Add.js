import React, { Component } from "react";

class Add extends Component {
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  displayForm = () => {
    if (this.props.display === true) {
      return (
        <div className="card border-primary mb-3 mt-2">
          <div className="card-header">Thêm</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="fName"
                onChange={(event) => this.isChange(event)}
                className="form-control"
                placeholder="Input name"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="fPhone"
                onChange={(event) => this.isChange(event)}
                className="form-control"
                placeholder="Input phone"
              />
            </div>
            <div className="form-group">
              <label>Rule</label>
              <select
                className="custom-select"
                name="fRule"
                onChange={(event) => this.isChange(event)}
                required
              >
                <option value>Choose rule</option>
                <option value={1}>Admin</option>
                <option value={2}>Editor</option>
                <option value={3}>User</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="reset"
                className="btn btn-block btn-primary"
                onClick={() => this.props.addUser(this.state)}
                value="Add"
              />
            </div>
          </div>
        </div>
      );
    }
  };
  
  render() {
    return (
      <div className="col-3">
        <form>
          <div>{this.displayForm()}</div>
        </form>
      </div>
    );
  }
}

export default Add;
