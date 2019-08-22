/*
  const endpoint = this.endpoint();
  const { reforme } = this.state;
  fetch(`${endpoint}/calculate/compare`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deciles: true,
      reforme,
    }),
  })
    .then(response => response.json())
    .then((json) => {
      this.setState({ total_pop: json });
    });
*/
const fetchSimPop = () => () => {};

export default fetchSimPop;
