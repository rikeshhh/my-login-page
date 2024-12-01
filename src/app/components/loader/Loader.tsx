import Image from "next/image";

export const Loader = () => {
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-black  z-50 gap-8">
      <Image
        src="/tribali/TriBali_Logo_Web.png"
        width={100}
        height={100}
        alt="logo"
      />
      <div className="loader"></div>
    </section>
  );
};
