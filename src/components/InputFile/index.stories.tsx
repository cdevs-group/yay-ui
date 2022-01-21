import React, { useEffect, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import Input from "./InputFile";

export default {
  title: "Components/InputFile",
  component: Input,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1 * 1024 * 1024) {
      setError(true);
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = ({ target: { result } }) => {
        setPreview(result);
        submitFile(result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const submitFile = async (url) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const file = new File([blob], "cover", { type: "image/png" });
    const formData = new FormData();
    formData.append("cover", file);
    console.log(...formData);

    setLoading(true);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Input handleInputChange={handleInputChange} loading={loading} success={success} error={error} />
      <img src={preview} alt="" />
    </div>
  );
};
