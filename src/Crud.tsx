import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const About = () => {
  const api = "https://to-dos-api.softclub.tj/api/to-dos";
  const imgapi = "https://to-dos-api.softclub.tj/images/";

  const [data, setdata] = useState([]);
  const [elem, setelem] = useState({ id: null, name: "", description: "" });

  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setdata(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function adduser(upuser) {
    try {
      await axios.post(api, upuser);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  async function edituser(upuser) {
    try {
      await axios.put(api, upuser);
      getUsers();
      setelem({ id: null, name: "", description: "" });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${api}?id=${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  const { values, handleChange, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues: {
      name: "",
      description: "",
      file: null,
    },

    onSubmit: (values) => {
      const formdata = new FormData();

      formdata.append("Name", values.name);
      formdata.append("Description", values.description);
      formdata.append("Images", values.file);

      adduser(formdata);
      resetForm();
    },
  });

  const handelsubmit = (e) => {
    e.preventDefault();

    const upuser = {
      id: elem.id,
      name: e.target.name.value,
      description: e.target.description.value,
    };

    edituser(upuser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>

      <h1>Add user</h1>

      <form onSubmit={handleSubmit}>
        <input className="border" name="name" value={values.name} onChange={handleChange} type="text" placeholder="Name" />
        <input className="border" name="description" value={values.description} onChange={handleChange} type="text" placeholder="Description" />
        <input className="border" onChange={(e) => setFieldValue("file", e.target.files[0])} name="file" type="file" />
        <button type="submit">Add user</button>
      </form>

      {
        elem.id ?
        <div>
          <h1>Edit user</h1>

          <form onSubmit={handelsubmit}>
            <input className="border" defaultValue={elem.name} name="name" type="text" />
            <input className="border" defaultValue={elem.description} name="description" type="text" />
            <button type="submit">Edit user</button>
            <button type="button" onClick={() => setelem({ id: null, name: "", description: "" })}>Cancel</button>
          </form>
        </div>
        : null
      }

      {
        data.map((e) => {
          return (
            <div key={e.id} className="border border-gray-400 p-4 m-2 rounded-lg w-[200px]">

              <img src={imgapi + e?.images?.[0]?.imageName} alt="" />

              <h2>{e.name}</h2>
              <p>{e.description}</p>

              <button onClick={() => handleDelete(e.id)}>Delete</button>

              <button onClick={() => setelem(e)}>Edit</button>

            </div>
          );
        })
      }

    </div>
  );
};

export default About;
