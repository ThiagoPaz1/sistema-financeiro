import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Div,
  Form,
  Input,
  Label,
  Line,
  Title,
} from "../../styles/styles.jsx";

interface FormUserLogin {
  email: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit, watch } = useForm<FormUserLogin>();

  const onSumit: SubmitHandler<FormUserLogin> = (data) => {};

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

  const handleFormIsValid = () => {
    if (!watchEmail || !wachPassword) {
      notify();
    }
  };

  return (
    <Div>
      <ToastContainer />
      <Form onSubmit={handleSubmit(onSumit)}>
        <Title>Acesse sua conta</Title>
        <Line></Line>
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
          <p>
            <a href="">Esqueci Minha Senha</a>
          </p>
        </div>
        <Button onClick={handleFormIsValid}>Fazer Login</Button>
      </Form>
    </Div>
  );
}
