import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
			tempSearch: "",
			temp: "hihi"
    };
  }

  displayButton = () => {
    if (this.props.display === true) {
      return (
        <button
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.contact()}
        >
          Close
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-block btn-outline-info"
          onClick={() => this.props.contact()}
        >
          Add
        </button>
      );
    }
  };

  isChange = (event) => {
    const value = event.target.value;
    this.setState({
      tempSearch: value,
		});
		this.props.getText(value);
  };

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="form-group col-9">
            <div className="btn-group">
              <input
                type="text"
                className="form-control"
                onChange={(event) => this.isChange(event)}
                placeholder="Nhập từ khóa"
              />
              <div className="btn btn-info" onClick={(textSearch) => this.props.getText(this.state.tempSearch)}> Tìm </div>
            </div>
          </div>
          <div className="col-3"> {this.displayButton()} </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Search;
