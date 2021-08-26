import articlesReducers from './redux/articles/articles-reducers';
import articlesActions from './redux/articles/articles-actions';



const { addArticlesSuccess, changeFilter, editArticlesSuccess, deleteArticlesSuccess } = articlesActions;

test('should return the initial state', () => {
  expect(articlesReducers(undefined, {})).toEqual(
    {
      articles: [],
      filter: "",   
    }
  )
})


test('should handle an article being added to a list', () => {
    const previousState = {}
    const payload = {
        title: 'Test',
        body: 'Test test'
    }
    const expectedState = {
          articles: [{
              title: 'Test',
              body: 'Test test', 
          }],
          filter: ""
        }
    expect(articlesReducers(previousState, addArticlesSuccess(payload)))
      .toEqual(expectedState)
    expect(previousState.length).not.toBe(0);
  
})

test('should deletes an article', () => {
  const previousState = {
    articles: [{
              id: 0,
              title: 'Test',
              body: 'Test test', 
          }],
          filter: ""
  }
  const payload = 0;
  const expectedState = {
          articles: [],
          filter: ""};
  expect(articlesReducers(previousState, deleteArticlesSuccess(payload))).toEqual(expectedState)
})




test('should to return filter value from changeFilterAction', () => {
    const payload = 'I am test change-filter-payload'
    const expectedState = {
        articles: [],
        filter: 'I am test change-filter-payload'
    }
    expect(articlesReducers({}, changeFilter(payload)))
        .toEqual(expectedState)
    
})

describe('actions', () => {
  it('should create an action to add an article', () => {
    const article = {title: 'Test', body: 'Test Test'}
    const expectedAction = {
      type: 'articles/addArticlesSuccess',
      payload: article
    }
    expect(addArticlesSuccess(article)).toEqual(expectedAction)
  })
  it('should create an action to edit an article', () => {
      const articleForEdit = {
          title: 'Test-title after edit', body: 'Test-body after edit'
      }
      const expectedAction = {
          type: 'articles/editArticlesSuccess',
          payload: articleForEdit
      }
  expect(editArticlesSuccess(articleForEdit)).toEqual(expectedAction)    
  })
  it('should create an action to delete an article', () => {
      const articleForDelete = {
          id: 0,
          title: 'Will delete',
          body: 'Test Test'
       }
      const expectedAction = {
          type: 'articles/deleteArticlesSuccess',
          payload: articleForDelete.id
       }
  expect(deleteArticlesSuccess(articleForDelete.id)).toEqual(expectedAction)
  })
})

