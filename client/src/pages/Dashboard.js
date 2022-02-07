import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-10">
        <h1 className="font-bold text-3xl text-zinc-400">Money Manager</h1>
      </div>

      <div className="cards  p-9 w-1/2 ml-44  h-auto  bg-orange-300 rounded-lg">
        <div className="flex title-cards justify-center">
          <div className="last-month mr-36">
            <h1 className="last-month-h1 text-2xl text-gray-600">Last Month</h1>
              <div className="content mt-10">
                <p>Inflow</p>
                <p>Outflow</p>
              </div>
          </div>
          <div className="this-month mr-36">
            <h1 className="this-month-h1 text-2xl text-gray-600">This Month</h1>
          </div>
          <div className="future">
            <h1 className="this-month-h1 text-2xl text-gray-600">Future</h1>
              <div className="content mt-10">
                  <p>Rp. 3.000.000,00</p>
                  <p>Rp. 1.500.000,00</p>
                </div>
          </div>
        </div>
        <hr className="mt-10" />
          <div class="under mt-5">
            test
          </div>
      </div>
    </Layout>
  );
}
