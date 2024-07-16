import { ChangeEvent, FormEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const photo = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"

function ProductManagement() {

  const [stock,setStock] = useState<number>(10);
  const [image,setImage] = useState<string>(photo)
  const [name,setName] = useState<string>("Puma Shoes")
  const [price,setPrice] = useState<number>(2000)

  const [updateName,setUpdateName] = useState<string>(name)
  const [updatePrice,setUpdatePrice] = useState<number>(price)
  const [updateStock,setUpdateStock] = useState<number>(stock)
  const [updateImage,setUpdateImage] = useState<string>(photo)

  const ImageHandeler = (e:ChangeEvent<HTMLInputElement>) => {

    const file: File|undefined = e.target.files?.[0]
    const reader:FileReader = new FileReader()

    if(file){
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if(typeof reader.result === "string"){
          setUpdateImage(reader.result)
        }
      }
    }
  }

  const SubmitHandeler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setImage(updateImage)
    setName(updateName)
    setPrice(updatePrice)
    setStock(updateStock)
  } 

    return (
        <div className="adminContainer">
          {/* sidebar */}
          <AdminSidebar/>
          {/* main */}
          <main className="product_management">
            <section>
                {stock?
                <span className="green">{stock} Available</span> 
                :<span className="red">Not Available</span>
                }
              <strong>ID - asnmdkasndmsan</strong>
              <img src={image} alt={"Product"}/>
              <p>{name}</p>
              <h3>${price}</h3>
            </section>
            <article>
              <form onSubmit={SubmitHandeler}>
                <h2>Manage</h2>
                <div>
                  <label>Name</label>
                  <input required 
                  type="text" 
                  value={updateName} 
                  placeholder="Name"
                  onChange={(e) => setUpdateName(e.target.value) }/>
                </div>
                <div>
                  <label>Price</label>
                  <input required 
                  type="number" 
                  value={updatePrice} 
                  placeholder="Price"
                  onChange={(e) => setUpdatePrice(Number(e.target.value))}/>
                </div>
                <div>
                  <label>Stock</label>
                  <input required 
                  type="number" 
                  value={updateStock} 
                  placeholder="Stock"
                  onChange={(e) => setUpdateStock(Number(e.target.value)) }/>
                </div>
                <div>
                  <label>Photo</label>
                  <input required 
                  type="file"
                  onChange={ImageHandeler}/>
                </div>
                {image && <img src={updateImage} alt="New Image"/>}
                <button type="submit">Upadate</button>
              </form>
            </article>
          </main>
        </div>
      )
}

export default ProductManagement