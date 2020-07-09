import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import NewsItem from "./NewsItem";
import newsFakeData from "./newsFakeData";
import axios from "axios";

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

  const [newsData, setNewsData] = useState([])
    // axios.get("http://54.180.105.165:3040/building/news")
    //   .then((data) => data.data) //data.text())
    //   .then((text) => setNewsData(text));
  // });
  useEffect(() => {
    axios.get("http://54.180.105.165:3040/building/news")
      .then((result) => {
        
        setNewsData(result.data)
        console.log(newsData[0], 'data')
      });
  }, []);
  return (
    <div className={classes.root}>
      <table>
        <th className={classes.tableHeader}>
          <td colSpan="4">최신 부동산 뉴스</td>
        </th>
        <tr>
          <td>
            <NewsItem
              id='0'
              title={newsData[0]?newsData[0].title : newsFakeData[0].title}
              day={newsData[0]?newsData[0].day : newsFakeData[0].day}
              descriptionUrl={newsData[0]?newsData[0].descriptionUrl : newsFakeData[0].descriptionUrl}
              imageUrl={newsData[0]?newsData[0].imageUrl :newsFakeData[0].imageUrl}
              text={newsData[0]?newsData[0].text :newsFakeData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsData[1]?newsData[1].title : newsFakeData[0].title}
              day={newsData[1]?newsData[1].day : newsFakeData[0].day}
              descriptionUrl={newsData[1]?newsData[0].descriptionUrl : newsFakeData[0].descriptionUrl}
              imageUrl={newsData[1]?newsData[1].imageUrl :newsFakeData[0].imageUrl}
              text={newsData[1]?newsData[1].text :newsFakeData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsData[2]?newsData[2].title : newsFakeData[0].title}
              day={newsData[2]?newsData[2].day : newsFakeData[0].day}
              descriptionUrl={newsData[2]?newsData[0].descriptionUrl : newsFakeData[0].descriptionUrl}
              imageUrl={newsData[2]?newsData[2].imageUrl :newsFakeData[0].imageUrl}
              text={newsData[2]?newsData[2].text :newsFakeData[0].text}
            />
          </td>
          <td>
            <NewsItem
              id="0"
              title={newsData[3]?newsData[3].title : newsFakeData[0].title}
              day={newsData[3]?newsData[3].day : newsFakeData[0].day}
              descriptionUrl={newsData[3]?newsData[3].descriptionUrl : newsFakeData[0].descriptionUrl}
              imageUrl={newsData[3]?newsData[3].imageUrl :newsFakeData[0].imageUrl}
              text={newsData[3]?newsData[3].text :newsFakeData[0].text}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default News;
