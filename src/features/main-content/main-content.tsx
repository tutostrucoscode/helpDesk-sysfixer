import { ChevronRight } from "lucide-react";
import React from "react";

const MainContent = () => {
  return (
    <main className="main-p-top main-min-height flex flex-auto flex-col">
      <div className="overflow-x-hidden mt-header pt-header pl-page_l pr-page_r mb-[-164px] flex flex-col items-center justify-center fmFVFA">
        <div className="pl-page_l pr-page_r max-w-page w-full">
          <div className="mt-16 flex flex-col items-center">
            <a
              href=""
              className="btn-main main-animation-1 flex items-center h-7 text-silver main-blur-12px text-xs font-medium leading-7 white-space-collapse text-wrap px-3 py-0 background-header-1 border border-solid	border-color-header-1 border-image-header-1 border-radius-btn-9999px transition-header-1 header-sectio-1"
            >
              <div>Comenzar ahora</div>
              <span>→</span>
            </a>
            <h1 className="h1-main-1 h1-animation text-center h1-color-unset text-7xl tracking-[-0.02em] font-medium mx-0 my-6 h1-bg-color">
              Soluciones de centro de ayuda
              <br />
              eficientes para empresas
            </h1>
            <p className="main-animation-2 main-p-color-1 text-center mx-0 mb-12 mt-0 text-xl leading-[1.3] font-normal">
              Soporte integral, comunicación en tiempo real,
              <br />y potentes herramientas para empresas.
            </p>
          </div>
        </div>
        <a
          type="button"
          href=""
          className="main-animation-3 appearance-none cursor-pointer	relative inline-flex items-center justify-center select-none max-w-full h-12 gap-2 m-0 border-radius-btn-9999px ctldVj"
        >
          <span>Más información</span>
          <ChevronRight />
        </a>
      </div>
    </main>
  );
};

export default MainContent;
