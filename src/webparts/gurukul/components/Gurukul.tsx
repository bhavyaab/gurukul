import * as React from 'react';
import styles from './Gurukul.module.scss';
import { IGurukulProps } from './IGurukulProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Gurukul extends React.Component<IGurukulProps, {}> {
  public render(): React.ReactElement<IGurukulProps> {
    return (
      <div className={ styles.gurukul }>
              <p>{escape(this.props.description)}</p>
      </div>
    );
  }
}
