import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import NewsItem from "./NewsItem";
import newsFakeData from "./newsFakeData";

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

  const [newsData, setNewsData] = useState(() => {
    fetch("http://localhost:3040/building/news")
      .then((data) => data.text())
      .then((text) => console.log(text));
  });

  return (
    <div className={classes.root}>
      <table>
        <th className={classes.tableHeader}>
          <td colSpan="4">최신 부동산 뉴스</td>
        </th>
        <tr>
          <td>
            <NewsItem
              id="0"
              title={newsFakeData[0].title}
              day={newsFakeData[0].day}
              descriptionUrl={newsFakeData[0].descriptionUrl}
              imageUrl={newsFakeData[0].imageUrl}
              text={newsFakeData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsFakeData[0].title}
              day={newsFakeData[0].day}
              descriptionUrl={newsFakeData[0].descriptionUrl}
              imageUrl={newsFakeData[0].imageUrl}
              text={newsFakeData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsFakeData[0].title}
              day={newsFakeData[0].day}
              descriptionUrl={newsFakeData[0].descriptionUrl}
              imageUrl={newsFakeData[0].imageUrl}
              text={newsFakeData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsFakeData[0].title}
              day={newsFakeData[0].day}
              descriptionUrl={newsFakeData[0].descriptionUrl}
              imageUrl={newsFakeData[0].imageUrl}
              text={newsFakeData[0].text}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default News;
