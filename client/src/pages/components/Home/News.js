import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import NewsItem from "./NewsItem";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const News = () => {
  return (
    <div>
      <table>
        <th>
          <td>최신 부동산 소식</td>
        </th>
        <tr>
          <td>
            <NewsItem />
          </td>
          <td>
            <NewsItem />
          </td>
          <td>
            <NewsItem />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default News;
