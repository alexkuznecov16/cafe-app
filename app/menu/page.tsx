import Image from 'next/image'
import "./menu.css"

export default function Page() {
  return (
    <>
      <h1 style={{
    fontSize: "48px",
    textAlign: "center",
    color: "#00c3ff",
    textShadow: `
      0 0 5px #00c3ff,
      0 0 10px #00c3ff,
      0 0 20px #00c3ff,
      0 0 40px #00c3ff
    `,
    margin: "40px 0",
    textTransform: "uppercase"}}>Menu</h1>
      <div className="menu__inner">
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
        <div className="menu--item">
          <div className='item_up'>
            <Image src={"/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg"} alt='' width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "auto" }}></Image>
            <p className='title'>Pizza Pepperoni</p>
            <span className='price'>50$</span>
          </div>
          <div className='item_down'>
            <p className="description">A delicious Pepperoni pizza with melted mozzarella cheese, a crispy golden crust, and flavorful tomato sauce. Perfect for lunch or dinner!</p>
          </div>
        </div>
      </div>
    </>
  )
}