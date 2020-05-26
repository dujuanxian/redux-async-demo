export const GET_TODOS = 'GET_TODOS';

export default function getTodos() {
  return (dispatch) => (
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => dispatch({
        type: GET_TODOS,
        payload: data
      }))
  );
}