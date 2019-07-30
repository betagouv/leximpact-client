/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import Button from "@material-ui/core/Button";

function Contact() {
  return (
    <a
      href="mailto:leximpact@openfisca.org"
      style={{ color: "white", textDecoration: "none" }}
    >
      <Button color="inherit">
        <p>Vos Retours !</p>
      </Button>
    </a>
  );
}

export default Contact;
