import React from 'react';
import classNames from 'classnames';
import styles from './Example.module.scss';

type ExampleProps = FlexibleComponentProps & React.HTMLProps<HTMLDivElement>;

const Example: React.FC<ExampleProps> = props => {
  const { className, as: Component = 'div', ...rest } = props;
  const classes = classNames(styles.example, className);
  return <Component className={classes} {...rest} />;
};

export default Example;
