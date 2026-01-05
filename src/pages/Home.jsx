import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop Pro", price: 85000 },
  { id: 2, name: "Smartphone X", price: 42000 },
  { id: 3, name: "Wireless Headphones", price: 12000 },
  { id: 4, name: "Smart Watch", price: 18000 },
  { id: 5, name: "Gaming Mouse", price: 3500 },
  { id: 6, name: "Mechanical Keyboard", price: 6500 },
  { id: 7, name: "Bluetooth Speaker", price: 9000 },
  { id: 8, name: "Tablet", price: 30000 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* Page Heading */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Explore Our Products
        </h1>
        <p className="text-gray-400">
          High quality electronics at best prices
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
