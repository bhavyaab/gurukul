import * as React from 'react';
import styles from './ClassRoom.module.scss';
import { IClassRoomProps } from './IClassRoomProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ClassRoom extends React.Component<IClassRoomProps, {}> {
  public render(): React.ReactElement<IClassRoomProps> {
    return (
      <div className={ styles.classRoom }>
        <p>{'Class Room'}</p>
      </div>
    );
  }
}
