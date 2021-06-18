import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.id),
});

export default connect(mapStateToProps)(SearchResults);