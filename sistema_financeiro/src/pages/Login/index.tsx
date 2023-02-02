import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  A,
  Button,
  Div,
  Form,
  Input,
  Label,
  Title,
} from "../../styles/styles.jsx";

interface FormUserLogin {
  email: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit, watch } = useForm<FormUserLogin>();

  const notify = () => {
    toast.error("Todos os campos devem ser preenchidos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const watchEmail = watch("email");
  const wachPassword = watch("password");

  const onSumit: SubmitHandler<FormUserLogin> = (data) => {
    if (!watchEmail && !wachPassword) return <h1>oi</h1>;
  };

  const handleFormIsValid = () => {
    if (!watchEmail || !wachPassword) {
      notify();
    }
  };

  return (
    <Div>
      <ToastContainer />
      <Form onSubmit={handleSubmit(onSumit)} type="submit">
        <Title>Acesse sua conta</Title>
        <div>
          <Label>Seu email</Label>
          <Input
            type="email"
            {...register("email", {
              required: "required",
            })}
          />
        </div>
        <div>
          <Label>Sua senha</Label>
          <Input
            type="password"
            {...register("password", {
              required: "required",
            })}
          />
          <div>
            <A href="">Esqueci Minha Senha</A>
          </div>
        </div>
        <Button type="submit" onClick={handleFormIsValid}>
          Fazer Login
        </Button>
      </Form>
    </Div>
  );
}
