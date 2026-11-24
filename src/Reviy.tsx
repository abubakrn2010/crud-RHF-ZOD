
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Reviy = () => {
  const api = "https://to-dos-api.softclub.tj/api/to-dos";
  const imgapi = "https://to-dos-api.softclub.tj/images/";

  const [data, setdata] = useState<any[]>([]);
  const [elem, setelem] = useState<any>({
    id: null,
    name: "",
    description: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setdata(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function adduser(upuser: any) {
    try {
      await axios.post(api, upuser);
      getUsers();
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function edituser(upuser: any) {
    try {
      await axios.put(api, upuser);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await axios.delete(`${api}?id=${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const AddSubmit = (values: any) => {
    const formdata = new FormData();

    formdata.append("Name", values.name);
    formdata.append("Description", values.description);
    formdata.append("Images", values.file[0]);

    adduser(formdata);
  };

  const EditSubmit = (e: any) => {
    e.preventDefault();

    const upuser = {
      id: elem.id,
      name: e.target.name.value,
      description: e.target.description.value,
    };

    edituser(upuser);

    setelem({
      id: null,
      name: "",
      description: "",
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Add user</h1>

      <form onSubmit={handleSubmit(AddSubmit)}>
        <input
          className="border"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum 2 letters" },
            maxLength: { value: 20, message: "Maximum 20 letters" },
          })}
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        <input
          className="border"
          {...register("description", {
            required: "Description is required",
            minLength: { value: 5, message: "Minimum 5 letters" },
            maxLength: { value: 100, message: "Maximum 100 letters" },
          })}
          type="text"
          placeholder="Description"
        />
        {errors.description && (
          <p className="text-red-500">Description is required</p>
        )}

        <input
          className="border"
          type="file"
          {...register("file", { required: "Image is required" })}
        />
        {errors.file && <p className="text-red-500">Image is required</p>}

        <button type="submit">Add user</button>
      </form>

      {elem.id ? (
        <div>
          <h1>Edit user</h1>

          <form onSubmit={EditSubmit}>
            <input
              className="border"
              defaultValue={elem.name}
              name="name"
              type="text"
              required
            />

            <input
              className="border"
              defaultValue={elem.description}
              name="description"
              type="text"
              required
            />

            <button type="submit">Edit user</button>

            <button
              type="button"
              onClick={() =>
                setelem({
                  id: null,
                  name: "",
                  description: "",
                })
              }
            >
              Cancel
            </button>
          </form>
        </div>
      ) : null}

      {data.map((e: any) => {
        return (
          <div
            key={e.id}
            className="border border-gray-400 p-4 m-2 rounded-lg w-[200px]"
          >
            <img src={imgapi + e?.images?.[0]?.imageName} alt="" />

            <h2>{e.name}</h2>
            <p>{e.description}</p>

            <button onClick={() => handleDelete(e.id)}>Delete</button>

            <button onClick={() => setelem(e)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Reviy;
