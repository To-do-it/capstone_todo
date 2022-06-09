import { Card, Row, Col } from "antd";
import "./Todos.css";
import { ClockCircleOutlined } from '@ant-design/icons';

const padNumber = (num) => {
    return String(num).padStart(2, '0');
  };

let to_dos = [
  {
    title: "캡스톤디자인 최종발표",
    content: "PPT 제작 및 발표 준비",
    deadline: {
      'year': 2022,
      'month': 6,
      'date': 10,
      'hour': 14,
      'minute': 0,
    },
  },
  {
    title: "한능검 심화",
    content: "공부하기",
    deadline: {
      'year': 2022,
      'month': 6,
      'date': 30,
      'hour': 10,
      'minute': 0,
    },
  },
  {
    title: "정보처리기사",
    content: "공부하기",
    deadline: {
      'year': 2022,
      'month': 7,
      'date': 7,
      'hour': 13,
      'minute': 0,
    },
  },
];

const Todos = () => (
    <Row gutter={16}>
        { to_dos.map((to_do) => (
            <Col span={8}>
                <Card title={`${to_do.title}`} size="small">
                    <p>{`${to_do.content}`}</p>
                    <br />
                    <br />
                    <br />
                    <ClockCircleOutlined />
                    {`${to_do.title}` === "캡스톤디자인 최종발표" ?
                                        <p>00:07:59</p> :
                                        `${to_do.title}` === "한능검 심화" ? <p>20:04:00</p> : <p>27:07:00</p>}
                    {/* {setInterval(Timer(to_do), 1000)} */}
                </Card>
            </Col>
        ))}
    </Row>
);

const Timer = (to_do) => {
    let minus_time = '';
    if (to_do.deadline['year'] - new Date().getFullYear() > 0) {
        let year = to_do.deadline['year'] - new Date().getFullYear();
        minus_time.concat(String(year).padStart(2, '0'));
    }
    console.log(to_do.deadline['month']- new Date().getMonth());
    if (to_do.deadline['month'] - new Date().getMonth() > 0) {
        let month = to_do.deadline['month'] - new Date().getMonth();
        minus_time.concat(String(month).padStart(2, '0'));
    }
    if (to_do.deadline['date'] - new Date().getDate() > 0) {
        let date = to_do.deadline['date'] - new Date().getDate();
        minus_time.concat(String(date).padStart(2, '0'));
    }
    minus_time.concat(String(to_do.deadline['hour'] - new Date().getHours()).padStart(2, '0'));
    minus_time.concat(String(to_do.deadline['minute'] - new Date().getMinutes()).padStart(2, '0'));
    minus_time.concat(String(60 - new Date().getSeconds()).padStart(2, '0'));
    
    return (
        <p>{`${minus_time}`}</p>
    );
}

export default Todos;
