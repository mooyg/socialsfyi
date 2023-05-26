export function Navbar() {
  return (
    <>
      <div className="mb-12 flex justify-between">
        <div className="flex">
          <p className="text-2xl font-bold ">SOCIALS</p>
          <p className="text-button-background text-2xl font-bold">.FYI</p>
        </div>
        <div className="flex space-x-2">
          <button className="border-button-background bg-button-background rounded-[14px] border bg-opacity-10 p-2 px-10 font-extrabold">
            Log In
          </button>
          <button className="border-button-background bg-button-background hidden rounded-[14px] border bg-opacity-10 p-2 px-8 font-extrabold md:block">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}
