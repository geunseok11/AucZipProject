import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import logoImage from "./AucZip_title_fullsize.png";
import Contact from "./components/Home/Contact";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    // display: "flex",
    // justifyContent: "center",
    align: "center",
  },
  introduce: {
    borderStyle: "double",
  },
  title: {
    color: "black",
    textDecoration: "underline",
    textUnderlinePosition: "under",
  },
  body: {
    fontSize: "2.2rem",
  },
  contact: {},
  image: {
    border: "3px dotted #ED8DB7",
    //borderRadius: "12%",
  },
});

const Introduce = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.introduce}>
        <br />
        <br />
        <div align="center">
          <img className={classes.image} src={logoImage} />
        </div>
        <br />
        <Typography
          className={classes.title}
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
        >
          <b>서비스 소개</b>
        </Typography>
        <Typography
          align="center"
          className={classes.body}
          variant="body1"
          gutterBottom
        >
          커피 한 잔으로 건물주되자!
        </Typography>
        <Typography
          align="center"
          className={classes.body}
          variant="body1"
          gutterBottom
        >
          AucZip은 소액으로도 건물 투자를 할 수 있도록 돕습니다.
        </Typography>
        <Typography
          align="center"
          className={classes.body}
          variant="body1"
          gutterBottom
        >
          경매에 올라온 매물을 매입하여 시중 책정된 가격보다 저렴한 금액으로
          투자할 수 있게 도와 드립니다.
        </Typography>
        <Typography
          align="center"
          className={classes.body}
          variant="body1"
          gutterBottom
        >
          부담스러운 금액으로 멀게만 느껴졌던 부동산 투자.
        </Typography>
        <Typography
          align="center"
          className={classes.body}
          variant="body1"
          gutterBottom
        >
          이제 부담 없는 금액으로 시작해보세요!
        </Typography>
        <br />
      </div>
      <Contact />
    </div>
  );
};

export default Introduce;
