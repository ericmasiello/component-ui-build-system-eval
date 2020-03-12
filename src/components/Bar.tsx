import React from 'react';
import classNames from 'classnames';
import styles from './Bar.module.scss';

type BarProps = FlexibleComponentProps & React.HTMLProps<HTMLDivElement>;

const Bar: React.FC<BarProps> = props => {
  const { className, as: Component = 'div', ...rest } = props;
  const classes = classNames(styles.root, className);
  return <Component className={classes} {...rest} />;
};

// eslint-disable-next-line
Bar.defaultProps = {
  className: 'i-am-bar',
  as: 'div',
};

export default Bar;
