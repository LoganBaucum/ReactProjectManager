export default function Input({ label, textArea, ...props }) {
  return (
    <p>
      <label htmlFor={label}>{label}</label>
      {textArea ? (
        <textarea name={label} {...props} />
      ) : (
        <input name={label} {...props} />
      )}
    </p>
  );
}
