import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { itemsFetchData } from "../actions/items";

class ItemList extends Component {
  constructor() {
    super();
    this.state = { openPage: "" };

    this.openPage = (url) => {
      this.setState((prevState) => (prevState.openPage = url));
      console.log(this.state);
    };
  }

  componentDidMount() {
    this.props.fetchData("http://localhost:4000/urls");
  }

  render() {
    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <Box
          sx={{
            width: "100%",
            maxHeight: "30vh",
            overflow: "scroll",
            marginBottom: "3rem",
          }}
        >
          <List>
            {this.props.items.map((item) => (
              <div key={item.id}>
                <ListItem disablePadding>
                  <ListItemButton
                    component="button"
                    onClick={() => this.openPage(item.link)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
                <Divider light={true} />
              </div>
            ))}
          </List>
        </Box>
        <Divider light={true} />

        <div>
          {this.state.openPage && (
            <div style={{ position: "relative", display: "flex" }}>
              <div className="close-button" onClick={() => this.openPage("")}>
                <CloseIcon />
              </div>
              <iframe title="iframe" src={this.state.openPage} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
