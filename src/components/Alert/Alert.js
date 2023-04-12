function Alert(props) {
  /**
   * Children adalah props khusus.
 */
  const { children } = props;

  return (
    <div>
      <span>{children}</span>
    </div>
  );
}

export default Alert;
