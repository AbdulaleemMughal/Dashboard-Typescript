import DoughnutChart from "./DoughnutChart";
import OpenProjects from "./OpenProjects";

const Projects = () => {
  return (
    <>
      <div className="my-4">
        <div className="row m-0">
          <div className="col-md-4">
            <div className="transaction p-3">
              <h1 className="text-white font-bold p-3">Transaction History</h1>
              <DoughnutChart />
              <div className="project-card flex justify-between m-3 rounded-md items-center p-3">
                <div className="text-white">
                  <h1 className="font-bold">Transfer to PayPal</h1>
                  <p className="text-sm">07 Jan 2024 09:12 AM</p>
                </div>
                <div>
                  <h1 className="text-white">$234</h1>
                </div>
              </div>
              <div className="project-card flex justify-between m-3 rounded-md items-center p-3">
                <div className="text-white">
                  <h1 className="font-bold">Transfer to Stripe</h1>
                  <p className="text-sm">21 July 2022 105:2 AM</p>
                </div>
                <div>
                  <h1 className="text-white">$650</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <OpenProjects styles={{fontSize: '40px', backgroundColor: 'blueviolet', padding: '5px'}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
