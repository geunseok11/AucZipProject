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
              title={newsFakeData[1].title}
              day={newsFakeData[1].day}
              descriptionUrl={newsFakeData[1].descriptionUrl}
              imageUrl={newsFakeData[1].imageUrl}
              text={newsFakeData[1].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsFakeData[2].title}
              day={newsFakeData[2].day}
              descriptionUrl={newsFakeData[2].descriptionUrl}
              imageUrl={newsFakeData[2].imageUrl}
              text={newsFakeData[2].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsFakeData[3].title}
              day={newsFakeData[3].day}
              descriptionUrl={newsFakeData[3].descriptionUrl}
              imageUrl={newsFakeData[3].imageUrl}
              text={newsFakeData[3].text}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default News;
