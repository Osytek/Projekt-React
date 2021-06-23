import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  console.log(searchString);
  return {
    cards: getCardsForSearchResults(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);