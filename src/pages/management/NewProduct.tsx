import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

function NewProduct() {

    const[name,setName] = useState<string>("")
    const[price,setPrice] = useState<number>()
    const[stock,setStock] = useState<number>()
    const[photo,setPhoto] = useState<string>()

    ////Retrieve the file from the input event
    const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
      //e.target.files?.[0]: Accesses the first file selected by the user. The ?. (optional chaining) is used to safely handle cases where e.target.files might be null or undefined.
      const file: File | undefined = e.target.files?.[0]
      //Create a new FileReader instance
      const reader: FileReader = new FileReader()

      //Check if a file was selected
      if(file){
        //Read the file as a data URL
        reader.readAsDataURL(file)

        //Define what happens when the file reading is completed
        reader.onloadend = () => {
          //Check if the result is a string (data URL)
          if(typeof reader.result === 'string'){
            //Update the state with the data URL
            setPhoto(reader.result)
          }
        }
      }
    }

  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      {/* main */}
      <main className="product_management">
        <article>
            <form>
                <h2>New Product</h2>
                <div>
                    <label>Name</label>
                    <input required
                     type="text" 
                     placeholder="Name" 
                     value={name}
                     onChange={(e => setName(e.target.value))}/>
                </div>
                <div>
                    <label>Price</label>
                    <input required
                     type="number" 
                     placeholder="Price"
                     value={price}
                     onChange={(e => setPrice(Number(e.target.value)))}
                     />
                </div>
                <div>
                    <label>Stock</label>
                    <input required 
                    type="number" 
                    placeholder="Stock"
                    value={stock}
                    onChange={(e => setStock(Number(e.target.value)))}
                    />
                </div>
                <div>
                    <label>Photo</label>
                    <input required 
                    type="file"
                    onChange={changeImageHandler}
                    />
                </div>
                {photo && <img src={photo} alt="New Image"/>}
                <button type="submit">Create</button>
            </form>
        </article>
      </main>
    </div>
  )
}

export default NewProduct