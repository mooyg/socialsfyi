export function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-bold text-2xl ">SOCIALS</p>
          <p className="font-bold text-2xl text-button-background">.FYI</p>
        </div>
        <div className="space-x-2 flex">
          <button className="rounded-[14px] px-10 p-2 border-button-background border bg-button-background bg-opacity-10 font-extrabold">
            Log In
          </button>
          <button className="rounded-[14px] px-8 p-2 border-button-background border bg-button-background bg-opacity-10 font-extrabold md:block hidden">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}
