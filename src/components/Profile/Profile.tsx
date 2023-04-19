"use client"

import Image from 'next/image'
import Link from 'next/link';

const Profile = ({ user }: { user: any }) => {
  const { avatarfull, personaname } = user?._json || {avatarfull: null, personaname: null};
  return (
    <>
      {user ?
        (
          <>
            <div className="flex items-center gap-2">
              <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-white" width={200} height={200} src={avatarfull} alt={personaname} />
              <span className="text-white font-semibold">{personaname}</span>
            </div>
          </>
        ) :
        (
          <Link href="/api/auth/login" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 duration-300 text-white p-3 rounded font-semibold">
            <Image className="fill-cyan-500 w-4" width={200} height={200} src="/valve.svg" alt="Valve" />
            Login
          </Link>
        )
      }
    </>
  )
}

export default Profile