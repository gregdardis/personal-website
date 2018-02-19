import { connect } from 'react-redux';

import { updateSelectedPageUrl } from '../../actions';
import NavBar from './NavBar';

const mapDispatchToProps = dispatch => ({
  updateSelectedPageUrl(selectedPageUrl) {
    dispatch(
      updateSelectedPageUrl(selectedPageUrl)
    );
  }
});

const mapStateToProps = state => ({
  selectedPageUrl: state.selectedPageUrl
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);