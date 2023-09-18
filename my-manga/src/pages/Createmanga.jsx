import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Createmanga = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      summary: "",
      file: Yup.mixed().required("File is requred"),
      chaptersImages: Yup.array()
        .of(Yup.mixed())
        .required("Chapter images are required"),
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("Category is required"),
      summary: Yup.string().required("Summary is required"),
      file: Yup.mixed().required("File is required"),
    }),
  });

  const handleFormSubmit = async (values) => {
    const currentDate = new Date().toISOString();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("summary", values.summary);
    formData.append("file", values.file);
    formData.append("date", currentDate);
    formData.append("chaptersImages", values.chaptersImages);
    try {
      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", res.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <h1>Upload Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value="" label="Select a category" />
            <option value="action" label="Action" />
            <option value="comedy" label="Comedy" />
            <option value="drama" label="Drama" />
            <option value="fantasy" label="Fantasy"></option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.summary}
          />
          {formik.touched.summary && formik.errors.summary ? (
            <div>{formik.errors.summary}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="file">Choose a file:</label>
          <input
            type="file"
            id="file"
            name="manga-image"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
          />
          {formik.touched.file && formik.errors.file ? (
            <div>{formik.errors.file}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="chaptersImages">
            Choose chapter images (multiple files):
          </label>
          <input
            type="file"
            id="chaptersImages"
            name="chapters-images"
            multiple
            onChange={(event) => {
              formik.setFieldValue("chaptersImages", event.currentTarget.files);
            }}
          />
          {formik.touched.chaptersImages && formik.errors.chaptersImages ? (
            <div>{formik.errors.chaptersImages}</div>
          ) : null}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Createmanga;
