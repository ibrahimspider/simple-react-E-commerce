export default function Loading() {
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-screen flex justify-center items-center bg-black opacity-90 z-50">
        <div className="">
          <div
            className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-blue-700 border-t-transparent"
          ></div>
        </div>
      </div>
    </>
  );
}
