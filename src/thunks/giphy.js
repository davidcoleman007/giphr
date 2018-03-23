import {getTrendingGifs} from '../api/giphy';
import { setTrending } from '../actions/results';

export const getTrending = () => {
  return (dispatch) => {
    return getTrendingGifs(10).then(
      (res) => {
        console.log(res);
        res.json().then(
          (data) => {
            console.log(data);
            dispatch(setTrending(data.data));
          }
        );
      }
    );
  }
};
