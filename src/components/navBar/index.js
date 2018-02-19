import { connect } from 'react-redux';

import { updateSelectedURL } from '../../actions';
import NavBar from './NavBar';

const mapDispatchToProps = dispatch => ({
  updateSelectedURL(selectedURL) {
    dispatch(
      updateSelectedURL(selectedURL)
    )
  }
});

const mapStateToProps = state => ({
  selectedURL: state.selectedURL
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);