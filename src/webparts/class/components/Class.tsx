import * as React from 'react';
import styles from './Class.module.scss';
import { IClassProps } from './IClassProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Class extends React.Component<IClassProps, {}> {
  public render(): React.ReactElement<IClassProps> {
    return (
      <div className={ styles.class }>
              <p>{escape(this.props.description)}</p>
        <p>{'Class'}</p>
      </div>
    );
  }
}
