

const AddBlog = () => {
  

    const handleAddBlog=(e)=>{
        e.preventDefault()
        const form= e.target
        const tittle= form.tittle.value
        const url= form.url.value
        const Category= form.select.value
        const shortDescription= form.shortDescription.value
        const longDescription= form.longDescription.value
        console.log(tittle, url,Category,shortDescription,longDescription);
    }
    return (
        <div className='my-8'>
            <h1 className='text-center font-bold text-fuchsia-700 text-5xl'>Add Your Blog</h1>
            <form onSubmit={handleAddBlog} >
                <div className='mt-8 md:shadow-fuchsia-700 md:shadow-lg p-5 md:w-3/5 mx-auto'>
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
                                <option>Science</option>
                                <option>Nature</option>
                                <option>Travel</option>
                                <option>History</option>
                                <option>Food</option>
                                <option>Psychology</option>
                                
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
                    <input className='btn-primary btn bg-fuchsia-700 w-full mt-2' type="submit" value="Add Blog" />

                </div>
            </form>
        </div>
    );
};

export default AddBlog;