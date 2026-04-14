import './FormInput.css';

function FormInput({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-input-group">
      <label htmlFor={name} className="form-input-label">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input ${error ? 'form-input-error' : ''}`}
      />

      {error && <p className="form-input-message">{error}</p>}
    </div>
  );
}

export default FormInput;