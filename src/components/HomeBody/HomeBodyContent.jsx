import React from "react";
import { HomeImageCard } from "../HomeImageCard";

export const HomeBodyContent = () => {
  return (
    <section className='row flex-sm-row-reverse mb-4'>
      <div className='col-sm-12 col-md-6'>
        <div className='row'>
          <div className='col-sm-6 pr-0 hover'>
            <HomeImageCard
              src={"/avw-gRRwfGizgfM-unsplash.jpg"}
              title={"Shoes"}
            />
          </div>
          <div className='col-sm-6 pr-0 hover'>
            <HomeImageCard
              src={"/andrey-zvyagintsev-orHe9TEsQxA-unsplash.jpg"}
              title={"New"}
            />
          </div>
          <div className='col-sm-12 pr-0 hover'>
            <HomeImageCard
              src={"/maksym-tymchyk-bE6OvxczIc8-unsplash.jpg"}
              title={"Men"}
            />
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-6'>
        <div className='row'>
          <div className='col-sm-12 pr-0 overflow-hidden position-relative'>
            <HomeImageCard
              src={"/honey-yanibel-minaya-cruz-q0r3xKBNGcQ-unsplash.jpg"}
              title={"Women"}
            />
          </div>
          <div className='col-sm-6 pr-0 hover'>
            <HomeImageCard
              src={"/malte-helmhold-fNtIHujicRk-unsplash.jpg"}
              title={"Sale"}
            />
          </div>
          <div className='col-sm-6 pr-0 hover'>
            <HomeImageCard
              src={"/hector-achautla-n7nfxVlLuDI-unsplash.jpg"}
              title={"Accessories"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
