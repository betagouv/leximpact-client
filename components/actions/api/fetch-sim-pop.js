/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
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
