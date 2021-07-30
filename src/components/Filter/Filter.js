import React from 'react';

import shortid from 'shortid';
import { connect } from 'react-redux';

import articlesActions from '../../redux/articles/articles-actions';
import articlesSelectors from '../../redux/articles/articles-selectors';

const Filter = ({ filterValue, onChangeFilter }) => {
  const filterInputId = shortid.generate();
  return (
    <>
      <label htmlFor={filterInputId} className="form-label">
        <input
          id={filterInputId}
          label="Find article by title"
          type="text"
          value={filterValue}
          placeholder="Find by the article-title"
          onChange={onChangeFilter}
          className="form-control"
        />
      </label>
    </>
  );
};

const mapStateToProps = state => ({
  filterValue: articlesSelectors.getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(articlesActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
