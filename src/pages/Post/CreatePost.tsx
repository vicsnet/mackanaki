import { motion } from 'framer-motion';
import React, { Fragment, useState, useEffect, CSSProperties } from 'react';
// import { useNavigate } from 'react-router-dom';
import FormSelect from '../../components/form/FormSelect';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import PageLayout from '../../Layouts/PageLayout';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAllCategories, getCategoriesApi } from '../../redux/features/Category/categorySlice';
import { addPostApi, getAllPostState, postStateReset } from '../../redux/features/post/postSlice';
import Loader from 'react-loader-advanced';
import { BounceLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

  const [fields, errors, form, isvalidForm] = useFormInputValidation({
    description: "",
    category: "",
  }, {
    description: "required|minLength:10",
    category: "required"
  });
  const { errors: postErr, postAddedStatus } = useAppSelector(getAllPostState);
  const { categories, status: catStatus } = useAppSelector(getAllCategories);
  const [file, setFile] = useState<any>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isvalidForm) {
      const data = {
        description: fields.description,
        image: file
      };
      dispatch(addPostApi(data));
      navigate('/');
    }
  };

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    dispatch(getCategoriesApi());
    if (postAddedStatus === "failed") {
      form.customToast({ type: "error", message: postErr });
      dispatch(postStateReset());
    }
    else if (postAddedStatus === "success") {
      form.customToast({ type: "success", message: "Post has been Uploaded!" });
      dispatch(postStateReset());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, postAddedStatus, postErr]);
  // const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  // const handleClick = () => {
  //   hiddenFileInput?.current?.click();
  // };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    // console.log(fileUploaded![0].type)

    setFile(fileUploaded![0]);
  };

  return (
    <Fragment>
      <PageLayout paddingTop='mt-28'>
        <Loader show={postAddedStatus === "loading"} message={<BounceLoader cssOverride={override} color="#c1c1c1" />}>
          <div className="px-10 container mx-auto pb-10">
            <div className="flex flex-col">
              <h2 className="text-signupTextColor font-semibold text-2xl mb-10">Create New Item</h2>

              <div className="flex">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                  <div className="flex flex-col gap-2">
                    <span className="text-signupTextColor text-bold md:text-sm text-xs">Image or video</span>
                    <span className="text-signupTextColor text-xs">File types supported: JPEG, PNG, GIF, SVG, MP4, WEMB, MP3, WAV, OGG, GLB and GLTF. MAX SIZE: 100MB</span>
                  </div>

                  <div>
                    <motion.label whileTap={{ scale: 0.9 }} className="border border-dotted  border-gray-500 rounded-lg flex justify-center cursor-pointer items-center w-48 h-36 mt-5 mb-10">
                      {file === '' ? <img src="/icons/image.png" className='cursor-pointer w-10 h-10' alt="profile" /> : <img src={URL.createObjectURL(file)} className="object-cover w-48 h-36" alt="profile" />}

                      <input type="file"
                        // ref={hiddenFileInput}
                        name="uploadImage"
                        accept="image/*"
                        onChange={handleChange}
                        // style={{ display: 'none' }}
                        className="w-0 h-0"
                      />
                    </motion.label>
                    {/* <motion.label whileTap={{ scale: 0.9 }} className="border border-dotted  border-gray-500 rounded-lg flex justify-center cursor-pointer items-center w-48 h-36 mt-5 mb-10">
                      {file === '' ? <div className='w-full h-full flex flex-col items-center justify-center gap-2 '>
                        <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                        <p className='text-gray-500 hover:text-gray-700'>Click here to upload video</p>
                      </div> : <img src={URL.createObjectURL(file)} className="object-cover w-48 h-36" alt="profile" />}

                      <input type="file"
                        // ref={hiddenFileInput}
                        name="uploadImage"
                        accept="image/*"
                        onChange={handleChange}
                        // style={{ display: 'none' }}
                        className="w-0 h-0"
                      />
                    </motion.label> */}
                  </div>
                  

                  <div className="flex flex-col gap-3 mb-10">
                    <span className="text-signupTextColor text-bold md:text-sm text-xs">Description</span>
                    <textarea onChange={(e) => form.handleTextAreaChangeEvent(e)} className={`bg-transparent border border-gray-500 rounded-lg outline-none p-5 text-navTextDarkColor md:text-sm text-xs ${errors?.description && "border-red-600 border-2"}`} name="description" placeholder="provide detailed description of your item" cols={30} rows={10}></textarea>
                    {errors?.description && <span className="text-red-600 md:text-sm text-xs">{errors?.description}</span>}
                  </div>


                  <FormSelect label="Category" htmlFor="category" categories={categories} onChange={(e) => form.selectChange(e)} name="category" status={catStatus} errors={errors?.category} />
                  <Button name="Publish" disabled={isvalidForm} className="mx-auto" />
                </form>
              </div>

            </div>
          </div>
        </Loader>
      </PageLayout>
    </Fragment>
  );
};

export default CreatePost;