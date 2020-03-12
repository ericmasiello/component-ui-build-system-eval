import React from 'react';
import classNames from 'classnames';
import styles from './Foo.module.scss';

type FooProps = FlexibleComponentProps & React.HTMLProps<HTMLDivElement>;

const Foo: React.FC<FooProps> = props => {
  const { className, as: Component = 'div', ...rest } = props;
  const classes = classNames(styles.root, className);
  return <Component className={classes} {...rest} />;
};

// eslint-disable-next-line
Foo.defaultProps = {
  className: 'i-am-foo',
};

export default Foo;
