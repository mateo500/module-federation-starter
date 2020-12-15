import React, { FC, ReactElement } from 'react';
import styles from './style.module.scss';

interface SourceProps {
  name: string;
}

const Source: FC<SourceProps> = ({ name }: SourceProps): ReactElement => {
  return (
    <div>
      <div className={styles.test}>heyyyyy {name}!</div>;
      <button type='button'>Hello</button>
    </div>
  );
};

export default Source;
//always use the default export
