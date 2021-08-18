import React, { useState } from 'react';

import Overlay from '../Overlay/Overlay';
import ArticlesEditForm from '../ArticlesEditForm/ArticlesEditForm';

const ArticlesListItem = ({
  title,
  body,
  onDelete,
  articleId,
  isAuthor = false,
  idx,
}) => {
  const [showEditor, setShowEditor] = useState(false);

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <li className="list-group-item d-flex w-100 justify-content-center border-0 col-lg-12 col-md-12 mb-4">
      <div className="card shadow-lg w-75 p-3 mb-5 bg-white rounded">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          {idx % 2 === 0 ? (
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
              className="img-fluid w-100"
              alt="article preview"
            />
          ) : (
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
              className="img-fluid w-100"
              alt="article preview"
            />
          )}

          <div
            className="mask"
            style={{
              backgroundColor: 'rgba(251, 251, 251, 0.15)',
            }}
          ></div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <div className="d-flex justify-content-center">
            {isAuthor && (
              <button className="btn btn-secondary m-1" onClick={toggleEditor}>
                Edit
              </button>
            )}
            {isAuthor && (
              <button
                className="btn btn-danger m-1"
                type="button"
                onClick={() => onDelete(articleId)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      {showEditor && (
        <Overlay onClose={toggleEditor}>
          <ArticlesEditForm
            articleId={articleId}
            onCloseAfterSubmit={toggleEditor}
          />
        </Overlay>
      )}
    </li>
  );
};

export default ArticlesListItem;
