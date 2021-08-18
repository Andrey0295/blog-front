import articlesReducers from './redux/articles/articles-reducers';
import articlesActions from './redux/articles/articles-actions';


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
    expect(articlesReducers(previousState, articlesActions.addArticlesSuccess(payload)))
        .toEqual(expectedState)
})


test('should to return filter value from changeFilterAction', () => {
    const payload = 'I am test change-filter-payload'
    const expectedState = {
        articles: [],
        filter: 'I am test change-filter-payload'
    }
    expect(articlesReducers({}, articlesActions.changeFilter(payload)))
        .toEqual(expectedState)
    



})

