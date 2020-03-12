interface FlexibleComponentProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  /**
   * Which HTML tag or custom Component should be rendered
   */
  as?: React.ElementType;
}
