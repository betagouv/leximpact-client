import babyIcon from "@iconify/icons-twemoji/baby";
import { Icon } from "@iconify/react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fragment, PureComponent } from "react";

import NumberInput from "../../../articles-inputs/parameter/NumberInput";
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

const Row = ({ lastRow, nbrePacs, part }: { lastRow: boolean, nbrePacs: number, part: Part }) => (
  <Fragment>
    <Separator />
    <div className={styles.content}>
      <div className={styles.situation}>
        <div>
          {babyIcons(nbrePacs)}
        </div>
        <div>
          { nbrePacs === 0 ? "sans enfants à charge" : `ayant ${toFr(nbrePacs)} enfant${nbrePacs > 1 ? "s" : ""} à charge`}
        </div>
      </div>
      <div className={styles.parts}>
        <SubRow description="Célibataire" value={part.celibataire} />
        <SubRow description="Divorcé" value={part.divorce} />
        <SubRow description="Veuf" value={part.veuf} />
        <SubRow description="Marié" value={part.mariesOuPacses} />
      </div>
    </div>
    {!lastRow && <Separator />}
  </Fragment>
);

const SubRow = ({ description, value }: { description: string, value: number }) => (
  <div>
    <div className={styles.description}>
      {description}
    </div>
    <div className={styles.value}>
      <NumberInput className={styles.smallInput} value={value} />
    </div>
  </div>
);

const DeleteRow = () => (
  <div className={styles.deleteRow}>
    <Button
      caption="Supprimer une ligne"
      icons={<DeleteIcon />}
      onClick={() => {}}
    />
  </div>
);

const AddNewRow = () => (
  <div className={styles.addNewRow}>
    <Button
      caption="Ajouter une nouvelle ligne"
      icons={(
        <Fragment>
          <AddIcon />
          <Icon height="24" icon={babyIcon} width="24" />
        </Fragment>
      )}
      onClick={() => {}}
    />
  </div>
);

const PartSupplementaireContent = () => (
  <div className={styles.partSupplementaire}>
    et ainsi de suite, en augmentant
    {" "}
    <br />
    d&apos;[une]
    {" "}
    <NumberInput className={styles.smallInput} value={1} />
    {" "}
    part
    <br />
    par enfant à charge du contribuable.
  </div>
);

interface Props {
  parts: Part[];
}

export class QfTable extends PureComponent<Props> {
  render() {
    const { parts } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Situation de famille</div>
          <div>Nombre de parts</div>
        </div>
        {
          parts.map((part, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={styles.row}>
              <Row lastRow={index === parts.length - 1} nbrePacs={index} part={part} />
            </div>
          ))
        }
        <div className={styles.row} />
        <div className={styles.row}>
          <DeleteRow />
        </div>
        <div className={styles.row}>
          <AddNewRow />
        </div>
        <div className={styles.row}>
          <PartSupplementaireContent />
        </div>
      </div>
    );
  }
}
