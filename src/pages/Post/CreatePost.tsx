import { motion } from 'framer-motion';
import React, { Fragment, useState } from 'react';
import FormSelect from '../../components/form/FormSelect';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import PageLayout from '../../Layouts/PageLayout';

const CreatePost = () => {

  const [fields, errors, form, isvalidForm] = useFormInputValidation({
    description: "",
    category: "",
  }, {
    description: "required|minLength:10",
    category: "required"
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isvalidForm) {
      form.customToast({ type: "success", message: "Success!" });
      console.log(fields, errors);
      // Perform api call here
    }
  };
  return (
    <Fragment>
      <PageLayout paddingTop='mt-28'>
        <div className="px-10 container mx-auto pb-10">
          <div className="flex flex-col">
            <h2 className="text-signupTextColor font-semibold text-2xl mb-10">Create New Item</h2>

            <div className="flex">
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                  <span className="text-signupTextColor text-bold md:text-sm text-xs">Image or video</span>
                  <span className="text-signupTextColor text-xs">File types supported: JPEG, PNG, GIF, SVG, MP4, WEMB, MP3, WAV, OGG, GLB and GLTF. MAX SIZE: 100MB</span>
                </div>

                <motion.div whileTap={{ scale: 0.9 }} className="border border-dotted  border-gray-500 rounded-lg flex justify-center cursor-pointer items-center w-48 h-36 mt-5 mb-10">
                  <img src="/icons/image.png" className='cursor-pointer w-10 h-10' alt="profile" />
                </motion.div>

                <div className="flex flex-col gap-3 mb-10">
                  <span className="text-signupTextColor text-bold md:text-sm text-xs">Description</span>
                  <textarea onChange={(e) => form.handleTextAreaChangeEvent(e)} className={`bg-transparent border border-gray-500 rounded-lg outline-none p-5 text-navTextDarkColor md:text-sm text-xs ${errors?.description && "border-red-600 border-2"}`} name="description" placeholder="provide detailed description of your item" cols={30} rows={10}></textarea>
                  {errors?.description && <span className="text-red-600 md:text-sm text-xs">{errors?.description}</span>}
                </div>


                <FormSelect label="Category" htmlFor="category" onChange={(e) => form.selectChange(e)} name="category" errors={errors?.category} />

                <Button name="Publish" disabled={isvalidForm} className="mx-auto" />
              </form>
            </div>

          </div>
        </div>
      </PageLayout>
    </Fragment>
  );
};

export default CreatePost;