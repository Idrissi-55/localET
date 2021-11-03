import { connect } from 'react-redux';

// Import action
import {
  updateEventField, updateRadioOption, submitAddressSearchUpdate,
} from 'src/actions/curioset';

// Import component
import UpdateEventForm from 'src/components/UpdateEventForm';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  // element to get from the state
  name: state.curioset.name,
  address: state.curioset.address,
  website: state.curioset.website,
  dateTime: state.curioset.dateTime,
  price: state.curioset.price,
  description: state.curioset.description,
  category: state.curioset.category,
  idEvent: state.curioset.idEvent,
  nameError: state.curioset.errors.name,
  addressError: state.curioset.errors.address,
  websiteError: state.curioset.errors.website,
  dateTimeError: state.curioset.errors.dateTime,
  priceError: state.curioset.errors.price,
  descriptionError: state.curioset.errors.description,
  categoryError: state.curioset.errors.category,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to handle changes in form field
  changeField: (newValue, name) => {
    // console.log(`newValue: ${newValue}, name: ${name}`);
    const action = updateEventField(newValue, name);
    dispatch(action);
  },
  // to handle changes in radio options
  changeChecking: (newValue, radioGroupName) => {
    // console.log(`newValue: ${newValue}`);
    dispatch(updateRadioOption(newValue, radioGroupName));
  },
  // to send modifications to the DB
  handleUpdateEvent: () => {
    dispatch(submitAddressSearchUpdate());
  },

});

// export
export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm);
