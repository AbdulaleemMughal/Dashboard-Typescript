import React, { useState, useEffect } from "react";
import { ProjectResponse } from "../Typescripts/Project";
import { ProjectArr } from "../Typescripts/Project";

type OpenProjectsProps = {
  styles: React.CSSProperties;
};

const OpenProjects = ({  }: OpenProjectsProps) => {

  const [items, setItems] = useState<ProjectResponse[] | null>(null);

  useEffect(() => {
    setItems(ProjectArr);
  }, [])

  return (
    <>
      <div className="open-project">
        <div className="p-[21px]">
          <div className="flex justify-between">
            <h1 className="text-white font-bold">Open Projects</h1>
            <p className="text-gray-500 text-sm">Your data status</p>
          </div>
          {
            items?.map((item) =>{
              const Icon = item.icon;
              return (
                <div className="border-b border-gray-700 py-3">
                  <div className="row">
                    <div className="col-md-1">
                    <Icon style={item.styles} />
                    </div>
                    <div className="col-md-7">
                      <h2 className="text-white">{item.title}</h2>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-gray-500 float-right text-sm">{item.time}</p><br />
                      <p className="text-gray-500 float-right text-sm">{item.task}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="border-b border-gray-700 py-3">
            <div className="row">
              <div className="col-md-1">
                <FcDocument style={styles} />
              </div>
              <div className="col-md-7">
                <h2 className="text-white">Admin Dashboard Design</h2>
                <p className="text-gray-500">Broadcast web app mockup.</p>
              </div>
              <div className="col-md-4">
                <p className="text-gray-500 float-right">15 min ago</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OpenProjects;
