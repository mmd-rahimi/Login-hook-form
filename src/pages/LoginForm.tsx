import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";

interface ILoginFormData {
  username: string;
  password: string;
}

export const LoginForm: FC = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="flex flex-col justify-center items-center mx-auto gap-4 m-10 border-4 w-[30rem] py-6"
    >
      <p className="text-xl font-semibold">Login</p>
      <div>
        <label htmlFor="username">
          Username{" "}
          <input
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "username must be enter",
              },
              minLength: {
                value: 3,
                message: "username must have at least 3 char",
              },
            })}
            className="border-2 px-1 rounded"
            type="text"
          />
        </label>
        <p className="text-red-400">{errors.username?.message}</p>
      </div>
      <div>
        <label htmlFor="password">
          Password{" "}
          <input
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "password must be enter",
              },
              minLength: {
                value: 8,
                message: "password must have at least 8 char",
              },
            })}
            className="border-2 px-1 rounded"
            type="password"
          />
        </label>
        <p className="text-red-400">{errors.password?.message}</p>
      </div>
      <button className="w-[5rem] border-2 rounded-md bg-red-300">
        Submit
      </button>
    </form>
  );
};
