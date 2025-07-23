export default function ProductPage({params}) {

const { id } = params;
return (
    <div>
              <h1>Product ID: {id}</h1>
  <p>This is the product page for product {id}</p>
      <div>
        <h3>Product Details</h3>
        <ul>
          <li>Product ID: {id}</li>
          <li>Category: Electronics</li>
          <li>Status: Available</li>
        </ul>
      </div>
    </div>
)

}