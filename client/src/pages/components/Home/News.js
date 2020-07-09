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
              title={newsData[0].title}
              day={newsData[0].day}
              descriptionUrl={newsData[0].descriptionUrl}
              imageUrl={newsData[0].imageUrl}
              text={newsData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsData[1].title}
              day={newsData[1].day}
              descriptionUrl={newsData[1].descriptionUrl}
              imageUrl={newsData[1].imageUrl}
              text={newsData[1].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsData[2].title}
              day={newsData[2].day}
              descriptionUrl={newsData[2].descriptionUrl}
              imageUrl={newsData[2].imageUrl}
              text={newsData[2].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsData[3].title}
              day={newsData[3].day}
              descriptionUrl={newsData[3].descriptionUrl}
              imageUrl={newsData[3].imageUrl}
              text={newsData[3].text}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default News;
