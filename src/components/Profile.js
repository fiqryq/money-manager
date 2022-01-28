import { useAppContext } from "../context/app-context";

export default function Profile() {
  const context = useAppContext();
  return (
    <>
      <div className="px-6 pt-8 space-x-4 flex items-center">
        <img
          className="rounded-full"
          src={context.photoURL}
          alt="avatar"
          width={40}
          height={40}
        />
        <h1 className="font-bold text-xl">{context.displayName}</h1>
      </div>
    </>
  );
}
