import React, { Component } from "react";
import "./../App.css";
import Header from "./Header";
import Search from "./Search";
import DataTable from "./DataTable";
import Add from "./Add";
import Data from "./data.json";

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      dataUser: Data,
      searchText: "",
    };
  }

  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(Data));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        dataUser:temp
      });
    }
  }

  editFun = (user) => {
    console.log(user);
  }

  delClick = (idDel) => {
    var tempData = this.state.dataUser.filter(item => item.id !== idDel);
    this.setState({
      dataUser : tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  getNewUser = (username) => {

    var item = {};
    item.id = uuidv1();
    item.name = username.fName;
    item.tel = username.fPhone;
    item.permission = username.fRule;

    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser:items
    })
    console.log(this.state.dataUser);
    localStorage.setItem('userData', JSON.stringify(items));
  };

  changeButton = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  getTextSearch = (textSearch) => {
    this.setState({
      searchText: textSearch,
    });
  };

  render() {
    var result = [];
    this.state.dataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    });
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getText={(textSearch) => this.getTextSearch(textSearch)}
                contact={() => this.changeButton()}
                display={this.state.displayForm}
              />
              <DataTable delClick={(idDel) => this.delClick(idDel)} editFun1 = {(user) => this.editFun(user)} display={this.state.displayForm} data={result} />
              <Add
                addUser={(username) => this.getNewUser(username)}
                display={this.state.displayForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
