import GroupIcon from "@material-ui/icons/Group";
import { Fragment, PureComponent } from "react";

import styles from "./GagnantsPerdantsContent.module.scss";

interface Props {
  icon: JSX.Element;
  title: string;
  plf?: number;
  amendement?: number;
  caption?: string;
  captionPlf?: number;
  captionAmendement?: number;
}

function inMillions(n: number): number {
  return Math.round(n / 100000) / 10;
}

export class GagnantsPerdantsContent extends PureComponent<Props> {
  render() {
    const {
      amendement, caption, captionAmendement, captionPlf, icon, plf, title,
    } = this.props;
    return (
      <div>
        {icon}
        <span className={styles.titleCard}>
          {title}
        </span>
        <div className={styles.containerImpact}>
          {
            typeof plf === "number"
              ? (
                <div className={styles.plf}>
                  <span className={styles.plfValue}>{inMillions(plf)}</span>
                  <span className={styles.plfUnit}> M</span>
                  <GroupIcon
                    className={styles.plfIcon}
                    fontSize="small"
                  />
                </div>
              )
              : null
          }
          {
            typeof amendement === "number"
              ? (
                <div className={styles.amendement}>
                  <span className={styles.amendementValue}>{inMillions(amendement)}</span>
                  <span className={styles.amendementUnit}> M</span>
                  <GroupIcon
                    className={styles.amendementIcon}
                    fontSize="small"
                  />
                </div>
              ) : null
          }
        </div>
        {
          caption && (typeof amendement === "number" || typeof plf === "number") && (
            <div className={styles.details}>
              dont
              {" "}
              {
                typeof captionPlf === "number"
                  ? (
                    <Fragment>
                      <span className={styles.detailsPlfValue}>{inMillions(captionPlf)}</span>
                      <span className={styles.detailsPlfUnit}> M</span>
                    </Fragment>
                  )
                  : null
              }
              {
                typeof captionAmendement === "number"
                  ? (
                    <Fragment>
                      <span className={styles.detailsAmendementValue}>
                        {inMillions(captionAmendement)}
                      </span>
                      <span className={styles.detailsAmendementUnit}> M</span>
                    </Fragment>
                  ) : null
              }
              {caption}
            </div>
          )
        }
      </div>
    );
  }
}
