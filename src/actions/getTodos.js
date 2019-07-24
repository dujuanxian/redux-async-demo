export const GET_TODOS = 'GET_TODOS';

export default function getTodos() {
  return {
    type: GET_TODOS,
    payload: [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
      }
    ]
  }
}