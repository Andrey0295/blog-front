import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import articlesOperations from '../../redux/articles/articles-operations';
import articlesSelectors from '../../redux/articles/articles-selectors';

class ArticlesForm extends Component {
  state = {
    title: '',
    body: '',
  };

  titleInputId = shortid.generate();
  bodyInputId = shortid.generate();

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    const { title } = this.state;
    const { allArticles, onSubmit, onCloseAfterSubmit } = this.props;
    e.preventDefault();

    allArticles.filter(article => article.title === title).length > 0
      ? alert(`${title} is already in articles-list`)
      : onSubmit(this.state);

    this.setState({
      title: '',
      body: '',
    });
    onCloseAfterSubmit();
  };

  render() {
    const { title, body } = this.state;
    return (
      <>
        <form
          className="d-flex flex-column justify-content-center w-75 m-4"
          onSubmit={this.onFormSubmit}
        >
          <div className="form-outline flex-fill">
            <label htmlFor={this.titleInputId} className="form-label w-100">
              <input
                required
                id={this.titleInputId}
                label="Title"
                type="text"
                name="title"
                value={title}
                onChange={this.onInputChange}
                className="form-control border-dark"
                placeholder="Title"
              />
            </label>
          </div>

          <div className="form-outline flex-fill">
            <label htmlFor={this.bodyInputId} className="form-label w-100">
              <textarea
                required
                rows="10"
                id={this.bodyInputId}
                label="Body"
                color="secondary"
                type="text"
                name="body"
                value={body}
                onChange={this.onInputChange}
                className="form-control border-dark"
                placeholder="Body"
              />
            </label>
          </div>

          <button type="submit" className="btn btn-success btn-block">
            Add article
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => ({
  allArticles: articlesSelectors.getAllArticles(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ title, body }) =>
    dispatch(articlesOperations.addArticle({ title, body })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesForm);
