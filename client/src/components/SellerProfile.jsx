export default function SellerProfile({ seller }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center">
            <img
              src={seller.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {seller.firstname} {seller.lastname}
              </h2>
              <p className="text-sm text-gray-600">{seller.email}</p>
              <p className="text-sm text-gray-600">Role: {seller.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
