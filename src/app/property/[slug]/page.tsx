export default function Property() {
  return (
    <div
      className="flex flex-col justify-center items-center text-white mt-10">
      <h1 className="text-2xl font-bold">
        Zip code 
      </h1>
      <p>Address</p>
      <p>***</p>
      <div className="text-center w-2/5 mt-5 rounded-xl flex flex-col px-5 py-2">
        <h3 className="font-bold text-xl">
          Reviews
        </h3>
        <div className="text-center bg-white text-black rounded-xl flex flex-col gap-5 px-5 py-2">
          <div>
            <p>Author 1</p>
            <p>*****</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam fringilla nisi, in condimentum ipsum interdum ac. Nulla facilisi. Donec laoreet aliquet neque, ac consectetur velit placerat eu. In nulla libero, ultrices non nulla eget, gravida luctus lorem. Ut id nibh suscipit, bibendum lacus in, pellentesque lacus. Ut non rhoncus dolor.</p>
          </div>
          <div>
            <p>Author 2</p>
            <p>**</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam fringilla nisi, in condimentum ipsum interdum ac. Nulla facilisi. Donec laoreet aliquet neque, ac consectetur velit placerat eu. In nulla libero, ultrices non nulla eget, gravida luctus lorem. Ut id nibh suscipit, bibendum lacus in, pellentesque lacus. Ut non rhoncus dolor.</p>
          </div>
        </div>
      </div>
    </div>

  )
}