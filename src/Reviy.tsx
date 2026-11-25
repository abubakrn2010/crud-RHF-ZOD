import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const userSchema = z.object({
  name: z.string().min(2, "Minimum 2 letters").max(20, "Maximum 20 letters"),
  description: z.string().min(5, "Minimum 5 letters").max(100, "Maximum 100 letters"),
  file: z.custom<FileList>((files) => files instanceof FileList && files.length > 0, "Image is required"),
});

type UserForm = z.infer<typeof userSchema>;

const Reviy = () => {
  const api = "https://to-dos-api.softclub.tj/api/to-dos";
  const imgapi = "https://to-dos-api.softclub.tj/images/";

  const [data, setdata] = useState<any[]>([]);
  const [elem, setelem] = useState<any>({ id: null, name: "", description: "" });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserForm>({ resolver: zodResolver(userSchema) });

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

  const AddSubmit = (values: UserForm) => {
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
        description: e.target.description.value 
      };
    edituser(upuser);
    setelem({ id: null, name: "", description: "" });
  };

  useEffect(() => { getUsers(); }, []);

  return (
    <div>
      <div>
        <h1>Add user</h1>
        <form onSubmit={handleSubmit(AddSubmit)}>

          <input className="border" {...register("name")} type="text" placeholder="Name" />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input className="border" {...register("description")} type="text" placeholder="Description" />

          {errors.description && <p className="text-red-500">{errors.description.message}</p>}

          <input className="border" type="file" {...register("file")} />

          {errors.file && <p className="text-red-500">{errors.file.message}</p>}

          <button type="submit">Add user</button>

        </form>

        {elem.id ? (
          <div>
            <h1>Edit user</h1>
            <form onSubmit={EditSubmit}>

              <input className="border" defaultValue={elem.name} name="name" type="text" required />

              <input className="border" defaultValue={elem.description} name="description" type="text" required />

              <button type="submit">Edit user</button>

              <button type="button" onClick={() => setelem({ id: null, name: "", description: "" })}>Cancel</button>

            </form>
          </div>
        ) : null}

        {data.map((e: any) => (
          <div key={e.id} className="border border-gray-400 p-4 m-2 rounded-lg w-[200px]">
            <img src={imgapi + e?.images?.[0]?.imageName} alt="" />
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
            <button onClick={() => setelem(e)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviy;