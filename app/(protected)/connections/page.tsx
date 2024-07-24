"use client";

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import DashboardLayout from "../dashboard/layout";
import DiscoverContent from './components/discover';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Discover',
    children: <DiscoverContent />,
  },
  {
    key: '2',
    label: 'Your connections',
    children: 'Content of Tab Pane 2',
  },
];


const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

// export default App;
const ConnectionsPage = async() => {
  return (
    <DashboardLayout>
      <h1 className='font-medium text-3xl text-linkColor mb-8'>Co:nnections</h1>
      <div className="">
        <App />
      </div>
    </DashboardLayout>
  );
}
 
export default ConnectionsPage;