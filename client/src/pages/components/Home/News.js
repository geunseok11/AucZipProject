import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import NewsItem from "./NewsItem";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  tableHeader: {
    fontSize: "2rem",
    textAlign: "center",
  },
});

const News = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table>
        <th className={classes.tableHeader}>
          <td colSpan="4">최신 부동산 뉴스</td>
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
          <td>
            <NewsItem />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default News;
