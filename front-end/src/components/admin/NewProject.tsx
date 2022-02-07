import { useForm, SubmitHandler } from "react-hook-form";
import { NotifSuccess, NotifError } from "../../services/notifications";

type NewProject = {
  name: string;
  screen: string;
  link: string;
  github: string;
  description: string;
  technos: string[];
};

interface Props {
  isLoading: boolean;
  technos: string[];
  fetchNewProject: any
}

function NewProject({ isLoading, technos, fetchNewProject }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProject>();

  const onSubmit: SubmitHandler<NewProject> = async (data) => {
    try {
      const projet = await fetchNewProject(
        data.name,
        data.screen,
        data.link,
        data.github,
        data.description,
        data.technos
      );
      NotifSuccess("Projet créé");
      return projet;
    } catch (e: any) {
      NotifError(e.data.message);
    }
  };

  return (
    <div className="border border-black  min-h-[54rem]  w-[30rem] my-8 ml-8 rounded-md shadow-black shadow">
      <h2 className="text-2xl ml-[7rem]">Ajouter un nouveau projet</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-black flex flex-col w-[50%]"
      >
        <label htmlFor="name" />
        <input
          {...register("name", { required: true })}
          placeholder="name"
          type="text"
          id="name"
          className="mt-8 ml-12 border border-black rounded-md"
        />
        {errors.name && <div className="error">enter a project name</div>}
        <label htmlFor="screen" />
        <input
          {...register("screen", { required: true })}
          placeholder="screen"
          type="text"
          id="screen"
          className="mt-8 ml-12 border border-black rounded-md"
        />
        {errors.screen && <div className="error">enter a screen url</div>}
        <label htmlFor="link" />
        <input
          {...register("link", { required: false })}
          placeholder="projet link"
          type="text"
          id="link"
          className="mt-8 ml-12 border border-black rounded-md"
        />
        <label htmlFor="github" />
        <input
          {...register("github", { required: false })}
          placeholder="github"
          type="text"
          id="github"
          className="mt-8 ml-12 border border-black rounded-md"
        />
        <label htmlFor="description" />
        <input
          {...register("description", { required: false })}
          placeholder="description"
          type="text"
          id="description"
          className="my-8 ml-12 border border-black rounded-md"
        />
        <div className="flex flex-wrap w-[100%] h-16">
          {!isLoading ? (
            technos &&
            technos.map((techno: any) => {
              return (
                <>
                  <label htmlFor={techno.techno_name} className="mx-4">
                    {techno.techno_name}
                  </label>
                  <input
                    {...register("technos", { required: false })}
                    type="checkbox"
                    value={techno.techno_name}
                    className="mt-1"
                  />
                </>
              );
            })
          ) : (
            <p>chargement en cours</p>
          )}
        </div>
        <button type="submit" className="my-24 ml-[20rem]">
          Sauvegarder
        </button>
      </form>
    </div>
  );
}

export default NewProject;
