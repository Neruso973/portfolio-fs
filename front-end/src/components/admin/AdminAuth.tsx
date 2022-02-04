import { useForm, SubmitHandler } from "react-hook-form";
import { NotifSuccess, NotifError } from "../../services/notifications";

type AdminAuth = {
  username: string;
  clearPassword: string;
};

interface Props {
  fetchAdmin: any;
  setIsAuth: React.Dispatch<React.SetStateAction<Boolean>>;
}

function AdminAuth({ fetchAdmin, setIsAuth }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminAuth>();

  const onSubmit: SubmitHandler<AdminAuth> = async (data) => {
    try {
      const admin = await fetchAdmin(data.username, data.clearPassword);
      NotifSuccess("Welcome Back Admin");
      setIsAuth(true)
      return admin;
    } catch (e: any) {
      NotifError("You aren't the Admin bye!");
    }
  };
  return (
    <div className="border border-black w-[40%] ml-[30%] mt-[20%] ">
      <h2 className="text-2xl ml-[9rem] text-[#041554] underlin">Authentification</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-black flex flex-col w-[80%] ml-[4%]"
      >
        <label htmlFor="username" />
        <input
          {...register("username", { required: true })}
          placeholder="username"
          type="text"
          id="username"
          className="mt-8 ml-12"
        />
        {errors.username && <div className="error">enter Admin Username</div>}
        <label htmlFor="clearPassword" />
        <input
          {...register("clearPassword", { required: true })}
          placeholder="clearPassword"
          type="password"
          id="clearPassword"
          className="mt-8 ml-12"
        />
        {errors.clearPassword && <div className="error">enter Admin password</div>}
        <button type="submit" className="my-12 ml-[10rem] border border-[#041554] w-[20%]">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminAuth;
