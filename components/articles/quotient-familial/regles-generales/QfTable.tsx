import babyIcon from "@iconify/icons-twemoji/baby";
import { Icon } from "@iconify/react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { addNewLineInParameterArray, removeLastLineInParameterArray } from "../../../../redux/actions/parameters";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../../../../redux/reducers/parameters";
import { StateParameter } from "../../../articles-inputs/parameter";
import { Button } from "../../buttons";
import styles from "./QfTable.module.scss";

function toFr(n: number): string {
  const words = ["zéro", "un", "deux", "troix", "quatre", "cinq", "six", "sept", "huit", "neuf"];
  return words[n] || n.toString();
}

function babyIcons(n: number): JSX.Element[] {
  const elements: JSX.Element[] = [];
  for (let i = 0; i < n; i += 1) {
    elements.push(<Icon key={i} height="24" icon={babyIcon} width="24" />);
  }
  return elements;
}

const Separator = () => (
  <div className={styles.separator}>
    <div />
    <div />
  </div>
);

const Row = ({ index, lastRow }: { lastRow: boolean, index: number }) => (
  <Fragment>
    <Separator />
    <div className={styles.content}>
      <div className={styles.situation}>
        <div>
          {babyIcons(index)}
        </div>
        <div>
          { index === 0 ? "sans enfants à charge" : `ayant ${toFr(index)} enfant${index > 1 ? "s" : ""} à charge`}
        </div>
      </div>
      <div className={styles.parts}>
        <SubRow description="Célibataire" index={index} name="celibataire" />
        <SubRow description="Divorcé" index={index} name="divorce" />
        <SubRow description="Veuf" index={index} name="veuf" />
        <SubRow description="Marié" index={index} name="mariesOuPacses" />
      </div>
    </div>
    {!lastRow && <Separator />}
  </Fragment>
);

const SubRow = (
  { description, index, name }: { description: string, name: string, index: number },
) => (
  <div>
    <div className={styles.description}>
      {description}
    </div>
    <div className={styles.value}>
      <StateParameter
        editable
        amendementInputSize="small"
        path={`impot_revenu.calculNombreParts.partsSelonNombrePAC.${index}.${name}`}
      />
    </div>
  </div>
);

const PartSupplementaireContent = () => (
  <div className={styles.partSupplementaire}>
    et ainsi de suite, en augmentant
    {" "}
    <br />
    d&apos;[une]
    {" "}
    <StateParameter
      editable
      amendementInputSize="small"
      path="impot_revenu.calculNombreParts.partsParPACAuDela"
    />
    {" "}
    part
    <br />
    par enfant à charge du contribuable.
  </div>
);

const mapStateToProps = ({ parameters }: RootState) => ({
  lines: parameters.amendement.impot_revenu.calculNombreParts.partsSelonNombrePAC,
});

const mapDispatchToProps = dispatch => ({
  addNewLine: () => dispatch(addNewLineInParameterArray("impot_revenu.calculNombreParts.partsSelonNombrePAC")),
  removeLastLine: () => dispatch(removeLastLineInParameterArray("impot_revenu.calculNombreParts.partsSelonNombrePAC")),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

class QfTable extends PureComponent<Props> {
  render() {
    const { addNewLine, lines, removeLastLine } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Situation de famille</div>
          <div>
            Nombre
            {" "}
            <br />
            de parts
          </div>
        </div>
        {
          lines.map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={styles.row}>
              <Row index={index} lastRow={index === lines.length - 1} />
            </div>
          ))
        }
        <div className={styles.row} />
        <div className={styles.row}>
          <div className={styles.deleteRow}>
            <Button
              caption="Supprimer une ligne"
              icons={<DeleteIcon />}
              onClick={removeLastLine}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.addNewRow}>
            <Button
              caption="Ajouter une nouvelle ligne"
              icons={(
                <Fragment>
                  <AddIcon />
                  <Icon height="24" icon={babyIcon} width="24" />
                </Fragment>
              )}
              onClick={addNewLine}
            />
          </div>
        </div>
        <div className={styles.row}>
          <PartSupplementaireContent />
        </div>
      </div>
    );
  }
}

const ConnectedQfTable = connector(QfTable);

export { ConnectedQfTable as QfTable };
