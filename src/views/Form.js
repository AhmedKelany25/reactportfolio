import Form from "react-bootstrap/Form";
import "./Form.css";
import Button from "react-bootstrap/Button";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
const Forms = (props) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (valu) => {
    console.log(valu);
  };

  const gender = [
    { value: "1", label: "Male" },
    { value: "2", label: "feMale" },
  ];

  const userOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  //console.log(errors.email.type)

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger"> Email is required</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-danger"> password is required</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Select</Form.Label>
          <Select options={gender} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Select options</Form.Label>
          <Controller
            name="select"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select options={userOptions} isMulti />}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
