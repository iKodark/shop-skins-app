"use client"

import Image from 'next/image'

const Profile = ({ user }: { user: any }) => {
  console.log(user);
  const { avatarfull, personaname } = user?._json || {avatarfull: null, personaname: null};
  return (
    <>
      {user ?
        (
          <>
            <div className="flex items-center gap-2">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={avatarfull} alt={personaname} />
              <span className="text-white font-semibold">{personaname}</span>
            </div>
          </>
        ) :
        (
          <a href="/api/auth/login" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 duration-300 text-white p-3 rounded font-semibold">
            <Image className="fill-cyan-500 p" src="/valve.svg" width={16} height={16} alt="Valve" />
            Login
          </a>
        )
      }
    </>
  )
}

export default Profile