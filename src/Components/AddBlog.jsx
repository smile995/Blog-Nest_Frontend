import React from 'react';

const AddBlog = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center font-bold text-fuchsia-700 text-5xl'>Add Your Blog</h1>
            <form >
                <div className='mt-8 shadow-xl p-5 md:w-3/5 mx-auto'>
                    <div className='md:flex items-center justify-center gap-5'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Tittle</span>

                            </label>
                            <input type="text" name='tittle' placeholder="Tille here" className="input input-bordered w-full  border-fuchsia-700" />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Image URL</span>

                            </label>
                            <input type="text" name='url' placeholder="URL" className="input input-bordered w-full border-fuchsia-700 " />

                        </div>
                    </div>

                    <div className='md:flex items-center justify-center gap-5'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category</span>
                               
                            </label>
                            <select name='select' className="select border-fuchsia-700 select-bordered">
                                <option disabled selected>Select one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                
                            </select>
                           
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Short Description</span>

                            </label>
                            <input type="text" name='shortDescription' placeholder="URL" className="input input-bordered w-full border-fuchsia-700 " />

                        </div>
                    </div>
                    <div>
                        <div  >
                            <label className="label">
                                <span className="label-text">Long Description</span>

                            </label>
                            <textarea name='longDescription' className="textarea  textarea-bordered border-fuchsia-700 h-24 w-full" placeholder="Long Description"></textarea>

                        </div>
                    </div>
                    <input className='btn-primary btn bg-fuchsia-700 w-full' type="submit" value="Add Blog" />

                </div>
            </form>
        </div>
    );
};

export default AddBlog;