import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import successWithMessage from "../../store/actions/successWithMessage";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount(){
      const { show } = this.state;
      const { successWithMessage } = this.props;
      setInterval(()=> {
        successWithMessage("");
        show && this.setState({
          show: false,
        });
      },3000)
  }

  componentWillUnmount() {
    const { successWithMessage } = this.props;
    successWithMessage("");
  }

  render() {
    const setShow = () => {
      const { successWithMessage } = this.props;
      successWithMessage("");
      this.setState({
        show: false,
      });
    };

    const { show } = this.state;
    const { success } = this.props;
    return (
      <div className="alert-success col-sm-10 col-md-6 col-ld-4 mx-auto">
        <Alert show={show} variant="success" dismissible onClose={() => setShow()}>
          <Alert.Heading>{success.message}</Alert.Heading>
        </Alert>
      </div>
    );
  }
}

Success.defaultProps = {
  success: PropTypes.shape,
};
Success.propTypes = {
  success: PropTypes.shape,

  successWithMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  success: state.succMsg.message,
});

export default connect(mapStateToProps, { successWithMessage })(Success);
