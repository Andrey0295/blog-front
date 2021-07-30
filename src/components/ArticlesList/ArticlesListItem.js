import React from 'react';

const ArticlesListItem = ({ title, body, onDelete, articleId }) => {
  return (
    <li className="card mb-4">
      <div className="card-body">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="cart-text">{body}</p>
        </div>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(articleId)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ArticlesListItem;
