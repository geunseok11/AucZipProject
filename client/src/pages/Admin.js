import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize:"20px",
    marginBottom:"10px"
  },
  content: {
    fontSize:"14px"
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    padding: "40px"
  }
}));

export default function Admin() {
  const [Items, setItems] = useState([ {address: null,
    bankName: "우리은행",
    bankNum: "049-23-123456",
    createdAt: "2020-07-06T02:29:21.000Z",
    email: "duhyun.kim@codestates.com",
    id: 3,
    memberId: "abcd",
    money: null,
    name: "dddd",
    password: "1234",
    phone: "01099993333",
    updatedAt: "2020-07-06T02:29:21.000Z"}
  ]);
  const onItemsHandler = (arr) => { //1. 이름 입력
    console.log(arr, 'arrin')
    setItems(arr)
    console.log(Items, 'items is')
}
  const classes = useStyles();
  const apiUrl = process.env.NODE_ENV === 'production' ? 'http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040' : 'http://localhost:3040';
  // axios.get(apiUrl) 
  // .then(
  //   (result) => {
  //     console.log(result, 'result')
  //     onItemsHandler([{a:1}, {b:1}])
  //     console.log(Items, 'items is')
  //   }
  // );
  useEffect(() => {
    axios
      .get(apiUrl+'/admin/userList')
      .then((result) => {
        console.log(result.data, 'get data')
        setItems(result.data)
      });
  }, []);
  // useEffect(() => {
  //   // setLoading(true)
  //   const fetchData = async () => {
  //     const result = await axios.get(apiUrl) 
  //     console.log(result, 'res')
  //     onItemsHandler(result.data)
      
  //     // setLoading(false)
  //   }
  //   fetchData()
  // }, [])
  const onDelHandler = (e) => { //1. 이름 입력
    const memberId = e.target.parentNode.parentNode.childNodes[0].textContent;
    console.log(memberId, 'e')
    axios.post(apiUrl+'/admin/delUser', {memberId})
    .then(data => {
      setItems(data.data)
    })
}

  return (
    <React.Fragment>
      <div className={classes.table}>
      <div className={classes.title}>회원 현황</div>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell className={classes.content}>userId</TableCell>
            <TableCell className={classes.content}>Name</TableCell>
            <TableCell className={classes.content}>Email</TableCell>
            <TableCell className={classes.content}>Phone</TableCell>
            <TableCell className={classes.content}>은행</TableCell>
            <TableCell className={classes.content}>계좌번호</TableCell>
            <TableCell className={classes.content} align="right">Money</TableCell>
            <TableCell className={classes.content}>회원강퇴</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Items.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.content}>{row.memberId}</TableCell>
              <TableCell className={classes.content}>{row.name}</TableCell>
              <TableCell className={classes.content}>{row.email}</TableCell>
              <TableCell className={classes.content}>{row.phone}</TableCell>
              <TableCell className={classes.content}>{row.bankName}</TableCell>
              <TableCell className={classes.content}>{row.bankNum}</TableCell>
              <TableCell  className={classes.content} align="right">{row.money?row.money:0} 원</TableCell>
              <TableCell><button onClick={onDelHandler}>회원삭제</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div>{Items[0]?Items[0].name : 'hi'}</div> */}
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
      </div>
    </React.Fragment>
  );
}
