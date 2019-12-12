import axios from 'axios';

export const fetchData = data => ({
  type: 'FETCH_DATA',
  data
});

export const MovieLists = () => {
  return dispatch => {
    axios.get('moviedata.json')
    .then(response => {
      const data = response.data
      dispatch(fetchData(data))
    })
    .catch(() => {
          alert('there is an error');
    });
  }
};
