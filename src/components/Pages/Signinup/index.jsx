import MenuBar from "../../MenuBar";
import { Button } from "../../Button";
import { Input } from "../../Input";

import { Form } from "./style";

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../../services/api";

const Siginup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Required field!")
      .min(3, "Minimum 3 characters!")
      .matches(/^[a-zA-Z]+$/, "It must only contain letters!"),
    email: yup.string().email("Invalid email!").required("Required field!"),
    password: yup
      .string()
      .min(8, "Minimum 8 characteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain at least one capital letter, one number and one special character!"
      )
      .required("Required field!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match!"),
    terms: yup.boolean().isTrue("You not accepted terms!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data) => {
    const { confirmPassword, terms, ...dataForApi } = data;
    // console.log(dataForApi);
    // console.log(data);

    api
      .post("/users/", dataForApi)
      .then((response) => {
        toast.success("Register successful!");
        reset();
        console.log(response);
        // history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email or username already exists!");
      });
  };

  return (
    <>
      <MenuBar />
      <h1>Sign Up</h1>
      <button onClick={() => history.push("/")}>Sair</button>

      <Form onSubmit={handleSubmit(handleMyForm)}>
        <Input
          type="text"
          register={register}
          label="Username"
          name="username"
          errors={errors}
        />

        <Input
          type="text"
          register={register}
          label="Email"
          name="email"
          errors={errors}
        />

        <Input
          type="password"
          register={register}
          label="Password"
          name="password"
          errors={errors}
        />

        <Input
          type="password"
          register={register}
          label="Confirm Password"
          name="confirmPassword"
          errors={errors}
        />

        {/* <label>Confirm Password:</label>
        <input type="password" {...register("confirmPassword")} />
        <span>{errors.confirmPassword?.message}</span> */}
        {/* {errors.password && <span>{errors.password.message}</span>} */}

        <Input
          type="checkbox"
          register={register}
          label="Accepted terms?"
          name="terms"
          errors={errors}
        />
        {/* <div>
          <input type="checkbox" {...register("terms")} />
          <span>Accepted terms?</span>
        </div>
        <span>{errors.terms?.message}</span> */}

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Button type="submit">Create an Account</Button>
        {/* <div>
          <button type="submit">Create an Account</button>
        </div> */}
      </Form>
    </>
  );
};
export default Siginup;
