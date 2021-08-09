import React, { Component } from 'react';
import { connect } from 'react-redux';

import articlesOperations from '../redux/articles/articles-operations';

import Overlay from '../components/Overlay/Overlay';

import ArticlesForm from '../components/ArticlesForm/ArticlesForm';

import ArticlesList from '../components/ArticlesList/ArticlesList';

class MyArticlesView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  onCloseModal = () => {
    this.setState({ showModal: false, showEditModal: false });
  };

  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="row d-flex justify-content-center align-items-center h-100">
        {this.state.showModal && (
          <Overlay onClose={this.onCloseModal}>
            <ArticlesForm onCloseAfterSubmit={this.onCloseModal} />
          </Overlay>
        )}
        <button
          onClick={this.onOpenModal}
          type="button"
          className="btn btn-success w-25 mr-auto ml-auto"
        >
          Add new article
        </button>

        <div>
          <ArticlesList isAuthor={true} onEdit={this.submitEditData} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(articlesOperations.fetchMyArticles()),
});

export default connect(null, mapDispatchToProps)(MyArticlesView);
