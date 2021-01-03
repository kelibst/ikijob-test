import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createError } from '../../store/actions/userAction'

class ErrorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    const { show } = this.state;
      show &&
      setInterval(() => {
        this.setState({
          show: false,
        });
      }, 3000);
  }

  componentDidUpdate(){
    const { show } = this.state
    const { createError } = this.props;
    show && Error.length === '' &&
    createError({});
  }

  render() {
    const setShow = () => {
      const { createError } = this.props;
      createError({});
      this.setState({
        show: false,
      });
    };

    const { show } = this.state;
    const { Error } = this.props;
    return (
      <div className="alert-success col-sm-10 col-md-6 col-ld-4 mx-auto">
        <Alert
          show={show}
          variant="danger"
          dismissible
          onClose={() => setShow()}
        >
          <Alert.Heading>{Error.message ? Error.message : "Something went wrong!"}</Alert.Heading>
        </Alert>
      </div>
    );
  }
}

ErrorDisplay.defaultProps = {
  error: PropTypes.any,
};
ErrorDisplay.propTypes = {
  error: PropTypes.any,

  createError: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  Error: state.error.err,
});

export default connect(mapStateToProps, { createError })(ErrorDisplay);
