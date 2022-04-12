import { Container } from "./style";

export const Input = ({
  label,
  name,
  register,
  errors,
  type = "text",
  ...rest
}) => {
  return (
    <Container isError={!!errors[name]}>
      {type === "checkbox" ? (
        <>
          <div className="checkbox-container">
            <input type="checkbox" {...register(name)} />
            <span>{label}</span>
          </div>
          <span className="error"> {errors[name]?.message}</span>
        </>
      ) : (
        <>
          <label>{label}:</label>
          <input {...rest} type={type} {...register(name)} />
          <p className="error"> {errors[name]?.message} </p>
        </>
      )}
    </Container>
  );
};
