import React from 'react';
import Image from 'next/image';
import { HiShoppingCart } from 'react-icons/hi';
import { skins } from '@mocks';
import router from "../lib/router";

export default function Home() {
  return (
    <>
      <div className="px-5">
        <Image className="w-full h-auto" width={2000} height={2000} src="/banner.webp" alt="banner" />
      </div>
      <div className="flex px-2">
        <div className="flex flex-wrap">
          <div className="flex-none block w-full flex justify-between px-3 py-3">
            <button className="bg-slate-900 hover:bg-slate-800 duration-300 text-white py-3 px-6 border rounded font-semibold">
              Página Anterior
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 duration-300 text-white py-3 px-6 border rounded font-semibold">
              Página Seguinte
            </button>
          </div>
          {
            skins.map(skin => (
              <div key={skin.id} className="flex-none px-3 py-3 w-full h-auto lg:w-1/6 md:w-1/4 sm:w-full">
                <div className="flex items-center justify-between flex-col w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50 rounded-md p-2">
                  <Image className="w-full h-auto" width={2000} height={2000} src={skin.image} alt={skin.name} />
                  <div className="flex flex-col w-full gap-2 break-words">
                    <span className="text-white text-center font-semibold text-sm">{skin.name}</span>
                    <span className="text-white text-center font-bold">{skin.price}</span>
                    <span className="text-white text-center text-xs">Preço Steam: {skin.steamPrice}</span>
                    <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 duration-300 text-white py-3 px-6 rounded font-semibold">
                      <HiShoppingCart size={26} />
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res}:{req: any, res: any}) {
  await router.run(req, res);
  return { props: { user: req.user || null } };
}